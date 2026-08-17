const coordLabels = [
  { label: "CUMILLA · 23.46°N", top: "18%", left: "8%" },
  { label: "STOCKHOLM · 59.33°N", top: "12%", left: "78%" },
  { label: "DUBLIN · 53.35°N", top: "82%", left: "12%" },
  { label: "6 DESTINATIONS TRACKED", top: "88%", left: "72%" },
];

export function OrbitRings() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
      >
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
          className="text-skyway-400"
          transform="rotate(-8 50 50)"
        />
        <ellipse
          cx="50"
          cy="52"
          rx="38"
          ry="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.12"
          className="text-beacon-400"
          transform="rotate(6 50 50)"
        />
      </svg>

      {coordLabels.map((c) => (
        <span
          key={c.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tracking-wider text-mist-400/70"
          style={{ top: c.top, left: c.left }}
        >
          {c.label}
        </span>
      ))}
    </div>
  );
}

export function HudReadout() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-5 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 font-mono text-[10px] tracking-wider text-beacon-300/70 sm:justify-start sm:pl-8">
      <span>ORIGIN: CUMILLA, BD</span>
      <span className="hidden sm:inline text-mist-600">/</span>
      <span>STATUS: GUIDANCE ACTIVE</span>
    </div>
  );
}
