import Link from "next/link";
import { ArrowDownRight, ArrowRight, Globe2 } from "lucide-react";
import { Globe } from "@/components/globe/globe";
import { HudReadout } from "./hero-hud";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-harbor-800 bg-harbor-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_70%_0%,theme(colors.harbor.800/0.8),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[linear-gradient(90deg,theme(colors.harbor.950),transparent_60%)] lg:w-2/3" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[30rem] w-[30rem] rounded-full border border-beacon-500/10 blur-[1px]" />
      <div className="pointer-events-none absolute -right-8 top-52 h-[20rem] w-[20rem] rounded-full border border-skyway-500/10" />

      <div className="pointer-events-none absolute bottom-[-18rem] right-[-6rem] z-0 size-[42rem] opacity-80 sm:size-[52rem] lg:right-[-10rem]">
        <Globe />
      </div>
      <HudReadout />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-14 lg:px-10 lg:pb-12 lg:pt-20">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-beacon-400">
          <span className="size-2 rounded-full bg-beacon-400" />
          Bangladesh / Europe / The world
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="max-w-4xl">
            <p className="mb-5 max-w-xs text-sm leading-6 text-mist-400">The distance between where you are and where you&apos;re going is a plan.</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.07em] text-mist-50">
              Your future
              <span className="block text-beacon-400">starts here.</span>
            </h1>
          </div>
          <div className="border-l border-beacon-500/50 pl-5 lg:mb-2">
            <p className="text-pretty text-base leading-7 text-mist-300">Personalised, ethical guidance for students building a life beyond borders.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-counselling" className="group inline-flex items-center gap-2 bg-beacon-500 px-5 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-300">
                Book counselling <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/study-destinations" aria-label="Explore study destinations" className="inline-flex items-center justify-center border border-harbor-600 px-4 py-3 text-mist-100 transition-colors hover:border-beacon-400 hover:text-beacon-300">
                <Globe2 className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-harbor-700/70 pt-5 text-xs uppercase tracking-[0.18em] text-mist-600">
          <span>FutureLight Global</span>
          <span className="hidden items-center gap-2 sm:flex"><ArrowDownRight className="h-4 w-4 text-beacon-400" /> Scroll to explore</span>
          <span>01 / 04</span>
        </div>
      </div>
    </section>
  );
}
