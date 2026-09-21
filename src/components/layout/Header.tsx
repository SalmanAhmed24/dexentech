"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { EASE, gsap, ScrollTrigger, usePrefersReducedMotion } from "@/lib/motion";
import { primaryCta, primaryNav, site, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * The header starts nearly transparent over the hero and firms up as soon as
   * content scrolls beneath it. Driving it from ScrollTrigger rather than a
   * scroll listener keeps the work on GSAP's single rAF loop, so it never
   * competes with the hero timeline for frames.
   */
  useEffect(() => {
    const el = headerRef.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        backgroundColor: "rgba(10,11,14,0.88)",
        backdropFilter: "blur(14px)",
        borderBottomColor: "rgba(255,255,255,0.10)",
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: 120,
          scrub: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reduced]);

  // Route change closes everything. Without this the drawer survives navigation.
  useEffect(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [pathname]);

  // Escape closes whichever layer is open.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const matches = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /*
    A group counts as active when the current route is one of its children,
    not only when it matches the group's own href. Without this, the AI
    Infrastructure group never highlights on its own sub-pages, since its href
    points at the overview under /solutions.
  */
  const isActive = (item: NavItem) =>
    matches(item.href) || (item.children?.some((c) => matches(c.href)) ?? false);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b border-line-subtle bg-[rgb(10_11_14/0.78)]",
        "px-[12.5px] py-1 backdrop-blur-[7px]",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-[10.3px]"
          aria-label={`${site.name} — home`}
        >
          <Logo className="h-[38px] w-[36px]" />
          <span className="font-display text-[14.47px] leading-[1.07] tracking-[0.434px] text-white">
            {site.name}
          </span>
        </Link>

        {/*
          Desktop navigation. The gap tightens to 20px between xl and 2xl:
          with "Technology Stack" in the list, 26px gaps overflow the header
          by ~12px at a 1280px viewport. The design's 26px returns at 1536px.
        */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 xl:flex 2xl:gap-[26px]"
        >
          {primaryNav.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const active = isActive(item);

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[13.5px] font-medium leading-[20.25px] transition-colors duration-200",
                    active ? "text-ink-100" : "text-ink-500 hover:text-ink-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            const menuId = `menu-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
            const open = openMenu === item.label;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/*
                  The label navigates and the chevron discloses — two controls,
                  because one element cannot both follow a link and toggle a
                  menu without stealing one behaviour from keyboard users.
                  Hovering anywhere on the pair still opens the menu.
                */}
                <div
                  className={cn(
                    "flex items-center gap-[3px] text-[13.5px] font-medium leading-[20.25px]",
                    "transition-colors duration-200",
                    active || open ? "text-ink-100" : "text-ink-500",
                  )}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="transition-colors duration-200 hover:text-ink-100"
                  >
                    {item.label}
                  </Link>

                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-haspopup="true"
                    aria-label={`${item.label} submenu`}
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    className="-m-1 flex items-center p-1 transition-colors duration-200 hover:text-ink-100"
                  >
                    <ChevronDown
                      className={cn(
                        "size-[13px] opacity-50 transition-transform duration-300",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      id={menuId}
                      initial={
                        reduced ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }
                      }
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: reduced ? 0 : 0.22, ease: EASE }}
                      className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-[14px]"
                    >
                      <div
                        className={cn(
                          "rounded-[14px] border border-line bg-cinder/95 p-2",
                          "shadow-[0_24px_60px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl",
                        )}
                      >
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[10px] px-3 py-2.5 transition-colors duration-200 hover:bg-[rgb(255_255_255/0.05)]"
                          >
                            <span className="block text-[13.5px] font-medium text-ink-100">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-500">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button href={primaryCta.href} size="sm" className="hidden sm:inline-flex">
            {primaryCta.label}
          </Button>

          <button
            type="button"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-[9px] border border-line-subtle text-ink-100 xl:hidden"
          >
            <span className="relative block h-[10px] w-[18px]">
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                  drawerOpen ? "top-[5px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                  drawerOpen ? "top-[5px] -rotate-45" : "top-[10px]",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
            className="overflow-hidden border-t border-line-subtle xl:hidden"
          >
            <nav
              aria-label="Mobile"
              className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-5 py-6"
            >
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-[9px] px-3 py-3 text-[15px] font-medium transition-colors",
                        isActive(item)
                          ? "bg-[rgb(255_255_255/0.05)] text-ink-100"
                          : "text-ink-300 hover:text-ink-100",
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <ul className="mb-2 ml-3 border-l border-line-subtle pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-[13.5px] text-ink-500 transition-colors hover:text-ink-100"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <Button href={primaryCta.href} className="mt-6 w-full sm:hidden">
                {primaryCta.label}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
