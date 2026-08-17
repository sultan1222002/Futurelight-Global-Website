import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Globe } from "@/components/globe/globe";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Starfield */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,theme(colors.harbor.700),theme(colors.harbor.950)_65%)]" />
        <div
          className="absolute inset-0 opacity-70 animate-drift"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20px 30px, white, transparent), radial-gradient(1px 1px at 90px 80px, white, transparent), radial-gradient(1.5px 1.5px at 160px 40px, white, transparent), radial-gradient(1px 1px at 230px 120px, white, transparent), radial-gradient(1.5px 1.5px at 310px 60px, white, transparent), radial-gradient(1px 1px at 380px 20px, white, transparent)",
            backgroundSize: "420px 160px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Globe — anchored low, partially cropped by the section edge */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[140vw] max-w-[1100px] -translate-x-1/2 sm:w-[110vw] lg:w-[900px]">
        <Globe />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-harbor-950 to-transparent" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-28 pt-20 text-center lg:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-harbor-600 bg-harbor-900/60 px-4 py-1.5 text-xs font-medium text-beacon-300">
          <Compass className="h-3.5 w-3.5" />
          Cumilla, Bangladesh — Guiding students to Europe & beyond
        </span>

        <h1 className="mt-7 font-display text-4xl font-semibold leading-tight text-mist-50 sm:text-5xl lg:text-6xl">
          Your Future,
          <span className="block text-beacon-400">Our Guidance.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-mist-300">
          Personalised, ethical, and transparent study-abroad counselling —
          charting the course from Bangladesh to your European future, one
          honest step at a time.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book-counselling"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-beacon-500 px-7 py-3.5 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400"
          >
            Book Free Counselling
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/study-destinations"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-harbor-600 px-7 py-3.5 text-sm font-semibold text-mist-100 transition-colors hover:border-skyway-400 hover:text-skyway-300"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
