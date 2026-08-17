import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { Globe } from "@/components/globe/globe";
import { OrbitRings, HudReadout } from "./hero-hud";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Starfield / nebula backdrop, local to the hero content area */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,theme(colors.harbor.800),theme(colors.harbor.950)_70%)]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20px 30px, white, transparent), radial-gradient(1px 1px at 90px 80px, white, transparent), radial-gradient(1.5px 1.5px at 160px 40px, white, transparent), radial-gradient(1px 1px at 230px 120px, white, transparent), radial-gradient(1.5px 1.5px at 310px 60px, white, transparent), radial-gradient(1px 1px at 380px 20px, white, transparent)",
            backgroundSize: "420px 160px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <HudReadout />

      {/* Globe */}
      <div className="pointer-events-none absolute left-1/2 top-[54%] aspect-square w-[150vw] max-w-[1200px] -translate-x-1/2 sm:w-[120vw] lg:w-[980px]">
        <Globe />
      </div>

      <OrbitRings />

      {/* Legibility scrim behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-[36%] h-[340px] w-[110%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,theme(colors.harbor.950/0.75),transparent_72%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-harbor-950 via-harbor-950/40 to-transparent" />

      {/* Content */}
      <div className="relative flex min-h-[85vh] flex-col items-center justify-between px-5 pb-10 pt-16 text-center sm:pt-20">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-mist-50 drop-shadow-[0_4px_30px_rgba(4,7,14,0.9)] sm:text-6xl lg:text-7xl">
            Your Future,
            <span className="block bg-gradient-to-b from-beacon-300 to-beacon-500 bg-clip-text text-transparent">
              Our Guidance.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base text-mist-300 drop-shadow-[0_2px_12px_rgba(4,7,14,0.9)] sm:text-lg">
            Personalised, ethical, and transparent study-abroad counselling —
            charting the course from Bangladesh to your European future.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="hidden items-center gap-2 rounded-full border border-harbor-600/80 bg-harbor-900/70 px-4 py-2.5 backdrop-blur-sm sm:flex">
            <Globe2 className="h-4 w-4 text-beacon-400" />
            <span className="text-xs font-medium text-mist-300">20+ Countries</span>
          </div>

          <Link
            href="/book-counselling"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-beacon-500 px-7 py-3.5 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400"
          >
            Book Free Counselling
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/study-destinations"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-harbor-600/80 bg-harbor-900/70 px-7 py-3.5 text-sm font-semibold text-mist-100 backdrop-blur-sm transition-colors hover:border-skyway-400 hover:text-skyway-300"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
