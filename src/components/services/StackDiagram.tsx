"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Logo } from "@/components/icons/Logo";
import { gsap, ScrollTrigger, usePrefersReducedMotion } from "@/lib/motion";
import {
  STACK_HUB as HUB,
  STACK_NODES as NODES,
  STACK_VIEWBOX as VB,
} from "@/lib/services";
import { cn } from "@/lib/utils";

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

/**
 * The "stack that runs the work" diagram, rebuilt as live markup.
 *
 * The exported SVG draws every label as outlined paths, so as an <img> it can
 * neither respond to the pointer nor be read by a screen reader. The geometry
 * here is copied from that export — spoke endpoints and gradient colours — so
 * the layout is the design's, while the cards are real, selectable text.
 *
 * Motion is kept deliberately quiet:
 *   - the hub glow breathes on a five-second cycle
 *   - every so often a data packet drifts from a tool into the core
 *   - hovering a tool lights its spoke in its own colour and runs a steady
 *     stream inward, while the other tools step back
 * All of it pauses when the diagram leaves the viewport, and none of it runs
 * under prefers-reduced-motion — the hover highlight still works, instantly.
 */
export function StackDiagram() {
  const root = useRef<HTMLDivElement>(null);
  const focusPacket = useRef<SVGCircleElement>(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  /* Ambient motion: packets + hub breathing, paused off-screen. */
  useGSAP(
    () => {
      if (reduced) return;

      const ambient = gsap.timeline({ repeat: -1, paused: true });
      const packets = gsap.utils.toArray<SVGCircleElement>("[data-packet]");

      packets.forEach((el, i) => {
        const node = NODES[i];
        const start = i * 0.85; // staggered, so only a few are ever in flight
        ambient
          .set(el, { attr: { cx: node.x, cy: node.y }, opacity: 0 }, start)
          .to(el, { opacity: 0.9, duration: 0.35, ease: "none" }, start)
          .to(
            el,
            { attr: { cx: HUB.x, cy: HUB.y }, duration: 2.2, ease: "power1.in" },
            start,
          )
          .to(el, { opacity: 0, duration: 0.4, ease: "none" }, start + 1.8);
      });

      const breathe = gsap.to("[data-hub-glow]", {
        attr: { r: 170 },
        opacity: 0.75,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
      });

      const trigger = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          if (self.isActive) {
            ambient.play();
            breathe.play();
          } else {
            ambient.pause();
            breathe.pause();
          }
        },
      });

      return () => trigger.kill();
    },
    { scope: root, dependencies: [reduced] },
  );

  /* Focus stream: a steady flow along whichever spoke is hovered. */
  useEffect(() => {
    const el = focusPacket.current;
    if (!el || reduced || !active) return;

    const node = NODES.find((n) => n.id === active);
    if (!node) return;

    gsap.set(el, { attr: { fill: node.color } });
    const tween = gsap.fromTo(
      el,
      { attr: { cx: node.x, cy: node.y }, opacity: 1 },
      {
        attr: { cx: HUB.x, cy: HUB.y },
        duration: 1.1,
        ease: "power2.in",
        repeat: -1,
        repeatDelay: 0.2,
      },
    );

    return () => {
      tween.kill();
      gsap.set(el, { opacity: 0 });
    };
  }, [active, reduced]);

  const activeNode = NODES.find((n) => n.id === active);

  return (
    <>
      {/* ---------- Desktop: the interactive diagram ---------- */}
      <div
        ref={root}
        className="relative mx-auto hidden w-full max-w-[1180px] lg:block"
        style={{ aspectRatio: `${VB.w} / ${VB.h}` }}
      >
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          className="absolute inset-0 size-full"
        >
          <defs>
            <radialGradient id="hub-glow">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </radialGradient>
            {NODES.map((n) => (
              <linearGradient
                key={n.id}
                id={`spoke-${n.id}`}
                gradientUnits="userSpaceOnUse"
                x1={n.x}
                y1={n.y}
                x2={HUB.x}
                y2={HUB.y}
              >
                <stop offset="0%" stopColor={n.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={n.color} stopOpacity="0.03" />
              </linearGradient>
            ))}
          </defs>

          <circle
            data-hub-glow
            cx={HUB.x}
            cy={HUB.y}
            r={150}
            fill="url(#hub-glow)"
            opacity={0.55}
          />

          {/* Resting spokes, exactly as exported */}
          {NODES.map((n) => (
            <line
              key={n.id}
              x1={n.x}
              y1={n.y}
              x2={HUB.x}
              y2={HUB.y}
              stroke={`url(#spoke-${n.id})`}
              strokeWidth={1}
              className="transition-opacity duration-300"
              style={{ opacity: active && active !== n.id ? 0.35 : 1 }}
            />
          ))}

          {/* Highlight laid over the hovered spoke */}
          {NODES.map((n) => (
            <line
              key={`hl-${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={HUB.x}
              y2={HUB.y}
              stroke={n.color}
              strokeWidth={1.5}
              strokeLinecap="round"
              className="transition-opacity duration-300"
              style={{ opacity: active === n.id ? 0.85 : 0 }}
            />
          ))}

          {/* Ambient packets — one per tool, driven by the timeline above */}
          {NODES.map((n) => (
            <circle
              key={`p-${n.id}`}
              data-packet
              cx={n.x}
              cy={n.y}
              r={2.5}
              fill={n.color}
              opacity={0}
            />
          ))}

          <circle ref={focusPacket} cx={HUB.x} cy={HUB.y} r={3} opacity={0} />
        </svg>

        {/* Hub */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: pct(HUB.x, VB.w),
            top: pct(HUB.y, VB.h),
            transform: "translate(-50%, -32%)",
          }}
        >
          <span
            className="flex size-[70px] items-center justify-center rounded-[18px] border border-[rgb(168_85_247/0.45)] bg-[rgb(20_21_28/0.92)] backdrop-blur-md transition-shadow duration-500"
            style={{
              boxShadow: activeNode
                ? `0 0 0 1px ${activeNode.color}66, 0 0 36px -4px ${activeNode.color}88`
                : "0 0 36px -8px rgb(168 85 247 / 0.55)",
            }}
          >
            <Logo className="h-[30px] w-[28px]" />
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[1.2px] text-ink-500">
            Core
          </span>
        </div>

        {/* Tools */}
        <ul aria-label="Platforms we build on">
          {NODES.map((n) => {
            const isActive = active === n.id;
            const dimmed = active !== null && !isActive;
            return (
              <li
                key={n.id}
                onPointerEnter={() => setActive(n.id)}
                onPointerLeave={() => setActive(null)}
                className={cn(
                  "absolute flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border bg-[rgb(13_14_19/0.9)] py-2 pl-2 pr-3.5 backdrop-blur-md",
                  "transition-[opacity,transform,border-color,box-shadow] duration-300 ease-[var(--ease-out-quart)]",
                  dimmed ? "opacity-45" : "opacity-100",
                )}
                style={{
                  left: pct(n.x, VB.w),
                  top: pct(n.y, VB.h),
                  transform: `translate(-50%, -50%) translateY(${isActive ? -3 : 0}px)`,
                  borderColor: isActive ? `${n.color}99` : "rgb(255 255 255 / 0.09)",
                  boxShadow: isActive ? `0 10px 30px -12px ${n.color}80` : "none",
                }}
              >
                <span
                  aria-hidden="true"
                  className="flex size-[26px] items-center justify-center rounded-[8px]"
                  style={{ backgroundColor: `${n.color}1f` }}
                >
                  <span
                    className="size-[7px] rounded-full"
                    style={{
                      backgroundColor: n.color,
                      boxShadow: `0 0 8px 1px ${n.color}99`,
                    }}
                  />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] font-semibold leading-tight text-ink-100">
                    {n.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.9px] text-ink-500">
                    {n.role}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/*
        ---------- Below lg: a plain grid ----------
        At tablet widths the radial layout would shrink its text to a few
        pixels, so smaller screens get the same nine tools as a grid. Only one
        of the two lists is ever displayed, so assistive tech reads it once.
      */}
      <ul
        aria-label="Platforms we build on"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden"
      >
        {NODES.map((n) => (
          <li
            key={n.id}
            className="flex items-center gap-3 rounded-[12px] border border-[rgb(255_255_255/0.09)] bg-slate-900 p-3"
          >
            <span
              aria-hidden="true"
              className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px]"
              style={{ backgroundColor: `${n.color}1f` }}
            >
              <span
                className="size-[7px] rounded-full"
                style={{ backgroundColor: n.color }}
              />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-[13.5px] font-semibold text-ink-100">
                {n.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.9px] text-ink-500">
                {n.role}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
