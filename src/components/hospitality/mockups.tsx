import Image from "next/image";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { StatusDot } from "@/components/ui/StatusDot";
import { cn } from "@/lib/utils";

/**
 * The product mockups for the HospitalityOS page.
 *
 * None of these are images — Figma builds every one from text and frames, so
 * they are rebuilt here as real markup. That keeps them crisp at any zoom,
 * searchable, and free of six extra network requests.
 *
 * Every pattern below is hard-coded rather than randomised. Random fills would
 * differ between the server and client render and trip a hydration mismatch.
 */

/* ---------- Shared bits ---------- */

function PanelHeading({ left, right }: { left: string; right?: string }) {
  return (
    <div className="flex items-center justify-between px-[21px] pb-3 pt-4">
      <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-ink-500">
        {left}
      </span>
      {right && (
        <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-ink-600">
          {right}
        </span>
      )}
    </div>
  );
}


/* ---------- Hero: unified calendar ---------- */

// 3 property rows × 7 nights. 1 = booked, 0 = open. Fixed so SSR and the
// client agree.
const CALENDAR_GRID = [
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 0, 1],
];

const CHANNELS = ["Booking.com", "Airbnb", "Expedia", "VRBO"];

export function CalendarMock() {
  return (
    <div className="relative">
      <BrowserFrame
        url="app.dexentech.com/hospitality/calendar"
        className="bg-cinder"
        chromeRight={<StatusDot label="Synced" />}
      >
        <PanelHeading left="Unified calendar · 3 properties" right="Jul 14 — 27" />

        <div
          className="flex flex-col gap-2 px-[21px]"
          role="img"
          aria-label="A unified booking calendar across three properties and seven nights, with no overlapping reservations."
        >
          {CALENDAR_GRID.map((row, r) => (
            <div key={r} className="grid grid-cols-7 gap-2">
              {row.map((booked, c) => (
                <span
                  key={c}
                  className={cn(
                    "h-[22px] rounded-[4px]",
                    booked
                      ? "bg-[rgb(109_40_217/0.55)] ring-1 ring-inset ring-[rgb(168_85_247/0.35)]"
                      : "bg-[rgb(255_255_255/0.04)]",
                  )}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 px-[21px] pb-[18px] pt-4">
          <ul className="flex flex-wrap gap-3">
            {CHANNELS.map((channel) => (
              <li
                key={channel}
                className="font-mono text-[9.5px] uppercase tracking-[0.9px] text-ink-600"
              >
                {channel}
              </li>
            ))}
          </ul>
          <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.9px] text-violet-soft">
            0 double-bookings
          </span>
        </div>
      </BrowserFrame>

      {/* Toast tucked under the panel's lower-right corner */}
      <span className="absolute -bottom-4 right-3 flex items-center gap-2 rounded-full border border-line bg-[rgb(10_11_14/0.92)] px-3 py-1.5 backdrop-blur-md sm:right-6">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
        />
        <span className="whitespace-nowrap font-mono text-[10.5px] text-ink-200">
          rate updated → all channels · 0.4s
        </span>
      </span>
    </div>
  );
}

/* ---------- Screenshot panels ---------- */

/**
 * Two of the panels are real product screenshots in the design, not markup.
 * They were extracted from the exported SVGs — each wraps the screenshot in a
 * vector browser chrome plus a 626 × 340 rect, so the raster was cropped to
 * exactly the band that rect exposes (aspect 1.841) and the chrome is drawn by
 * the existing BrowserFrame component instead.
 */
function ScreenshotPanel({
  url,
  src,
  alt,
  width,
  height,
}: {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <BrowserFrame url={url} className="bg-cinder">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1024px) 92vw, 46vw"
        className="h-auto w-full"
      />
    </BrowserFrame>
  );
}

export function ChannelSyncMock() {
  return (
    <ScreenshotPanel
      url="app.dexentech.com/hospitality/channels"
      src="/images/mock-channels.webp"
      alt="The HospitalityOS channel view: property listings with photos, price and bedroom filters, and a map of available units."
      width={3810}
      height={2070}
    />
  );
}

export function FinanceMock() {
  return (
    <ScreenshotPanel
      url="app.dexentech.com/hospitality/finance"
      src="/images/mock-finance.webp"
      alt="The HospitalityOS finance dashboard: total balance, monthly revenue chart, card details, and a monthly expense breakdown."
      width={1000}
      height={543}
    />
  );
}

/* ---------- 02 · Room status ---------- */

const ROOMS = [
  { id: "101", state: "Occupied" },
  { id: "102", state: "Clean" },
  { id: "103", state: "Dirty" },
  { id: "104", state: "Clean" },
  { id: "105", state: "Blocked" },
  { id: "106", state: "Occupied" },
  { id: "201", state: "Clean" },
  { id: "202", state: "Dirty" },
  { id: "203", state: "Occupied" },
  { id: "204", state: "Clean" },
  { id: "205", state: "Occupied" },
  { id: "206", state: "Clean" },
] as const;

const ROOM_TONE: Record<string, string> = {
  Occupied: "border-[rgb(168_85_247/0.35)] bg-[rgb(109_40_217/0.22)] text-violet-pale",
  Clean: "border-[rgb(255_255_255/0.08)] bg-[rgb(255_255_255/0.03)] text-ink-400",
  Dirty: "border-[rgb(234_179_8/0.28)] bg-[rgb(234_179_8/0.08)] text-[#d9b64b]",
  Blocked: "border-[rgb(255_255_255/0.06)] bg-[rgb(255_255_255/0.02)] text-ink-600",
};

export function RoomStatusMock() {
  return (
    <BrowserFrame url="app.dexentech.com/hospitality/rooms" className="bg-cinder">
      <PanelHeading left="Live room status · 3 properties" />

      <ul className="grid grid-cols-3 gap-2 px-[21px] sm:grid-cols-4 lg:grid-cols-6">
        {ROOMS.map((room) => (
          <li
            key={room.id}
            className={cn(
              "rounded-[8px] border px-2 py-2.5 text-center",
              ROOM_TONE[room.state],
            )}
          >
            <span className="block font-mono text-[12px]">{room.id}</span>
            <span className="mt-0.5 block font-mono text-[8.5px] uppercase tracking-[0.8px] opacity-80">
              {room.state}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-end px-[21px] pb-[18px] pt-4">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.9px] text-violet-soft">
          6 turnovers assigned
        </span>
      </div>
    </BrowserFrame>
  );
}

/* ---------- 03 · WhatsApp concierge ---------- */

const THREAD = [
  {
    from: "guest" as const,
    text: "Hola — ¿puedo hacer el check-in a las 22h? Llegamos tarde.",
  },
  {
    from: "system" as const,
    text: "¡Claro! El check-in digital está abierto hasta medianoche. Le envío su llave digital una hora antes. 🔑",
    meta: "replied in 8s · ES → EN transcript saved",
  },
  { from: "guest" as const, text: "Perfecto. ¿Y late checkout el domingo?" },
  {
    from: "system" as const,
    text: "Disponible hasta las 14h por 25€. ¿Lo confirmo?",
    meta: "upsell offered · awaiting guest",
  },
];

export function WhatsAppMock() {
  return (
    <BrowserFrame
      url="whatsapp · guest concierge"
      className="bg-cinder"
      chromeRight={<StatusDot label="Auto" />}
    >
      <ul className="flex flex-col gap-3 px-[21px] pb-[18px] pt-3">
        {THREAD.map((message, i) => (
          <li
            key={i}
            className={cn(
              "flex flex-col",
              message.from === "system" ? "items-end" : "items-start",
            )}
          >
            {/*
              The Spanish messages carry lang="es" so screen readers switch
              voice instead of reading Spanish with an English pronunciation.
            */}
            <p
              lang="es"
              className={cn(
                "max-w-[85%] rounded-[12px] px-3.5 py-2.5 text-[12.5px] leading-[19px]",
                message.from === "system"
                  ? "bg-[rgb(109_40_217/0.28)] text-ink-100 ring-1 ring-inset ring-[rgb(168_85_247/0.28)]"
                  : "bg-[rgb(255_255_255/0.05)] text-ink-200",
              )}
            >
              {message.text}
            </p>
            {message.meta && (
              <span className="mt-1.5 font-mono text-[9.5px] text-ink-600">
                {message.meta}
              </span>
            )}
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}

/* ---------- 05 · AI intelligence layer ---------- */

const AGENT_LINES = [
  { agent: "forecast/occupancy", result: "Aug demand +18%, repriced 240 nights" },
  { agent: "agent/pricing", result: "14 rate changes proposed · awaiting approval" },
  { agent: "agent/sentiment", result: "1 unhappy guest flagged, room 204" },
  { agent: "agent/housekeeping", result: "6 turnover routes optimized" },
  { agent: "copilot/frontdesk", result: '"late checkout policy?" answered' },
];

export function AgentsMock() {
  return (
    <BrowserFrame
      url="app.dexentech.com/hospitality/agents"
      className="bg-cinder"
      chromeRight={<StatusDot label="Live" />}
    >
      <ul className="px-[21px] pb-[21px] pt-3 font-mono text-[11.5px] leading-[23px]">
        {AGENT_LINES.map((line) => (
          <li key={line.agent}>
            <span className="text-ink-600">{line.agent}</span>
            <span className="text-ink-300"> → {line.result}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}
