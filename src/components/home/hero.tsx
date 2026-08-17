import Link from "next/link";
import { ArrowDownRight, ArrowRight, Globe2, ScanLine } from "lucide-react";
import { Globe } from "@/components/globe/globe";
import { HudReadout } from "./hero-hud";

const cards = [
  { label: "GLOBAL DESTINATIONS", value: "20+", detail: "Europe · UK · USA · Asia-Pacific", position: "right-5 top-28 lg:right-24 lg:top-36" },
  { label: "GLOBAL SIGNAL", value: "GUIDANCE ACTIVE", detail: "Student-first planning from Cumilla", position: "bottom-32 left-5 lg:bottom-44 lg:left-20" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-harbor-800 bg-harbor-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_68%_42%,theme(colors.harbor.800/0.86),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(theme(colors.harbor.700/0.22)_1px,transparent_1px),linear-gradient(90deg,theme(colors.harbor.700/0.22)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full bg-gradient-to-r from-harbor-950 via-harbor-950/80 to-transparent lg:w-3/5" />
      <div className="pointer-events-none absolute right-[-9rem] top-20 size-[32rem] rounded-full border border-skyway-500/15 sm:size-[44rem]" />
      <div className="pointer-events-none absolute right-[-3rem] top-48 size-[23rem] rounded-full border border-beacon-500/10" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-7rem] z-0 size-[38rem] opacity-90 sm:size-[52rem] lg:right-[-9rem]">
        <Globe />
      </div>
      <HudReadout />

      {cards.map((card) => (
        <div key={card.label} className={`absolute z-20 hidden w-60 border border-skyway-400/20 bg-harbor-900/70 p-4 backdrop-blur-xl lg:block ${card.position}`}>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-skyway-300"><ScanLine className="h-3.5 w-3.5" /> {card.label}</div>
          <p className="mt-3 font-display text-xl font-semibold text-mist-50">{card.value}</p>
          <p className="mt-1 text-xs leading-5 text-mist-400">{card.detail}</p>
          <div className="mt-4 h-1 bg-harbor-700"><div className="h-full w-2/3 bg-skyway-400" /></div>
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-14 lg:px-10 lg:pb-12 lg:pt-20">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-skyway-300"><span className="size-2 animate-pulse rounded-full bg-skyway-400" /> Global education command center</div>
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="max-w-4xl">
            <p className="mb-5 max-w-xs text-sm leading-6 text-mist-400">Personalised, ethical, and transparent guidance for students building their future beyond borders.</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-mist-50">Your future,<span className="block text-skyway-400">our guidance.</span></h1>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-600">From Bangladesh to the world / coordinates locked</p>
          </div>
          <div className="border-l border-skyway-400/50 pl-5 lg:mb-2">
            <p className="text-pretty text-base leading-7 text-mist-300">We map the right destination, prepare your profile, and stay with you through the journey.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/book-counselling" className="group inline-flex items-center gap-2 bg-beacon-500 px-5 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-300">Book free counselling <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link><Link href="/study-destinations" className="inline-flex items-center gap-2 border border-harbor-600 px-4 py-3 text-sm text-mist-100 transition-colors hover:border-skyway-400 hover:text-skyway-300"><Globe2 className="h-4 w-4" /> Explore</Link></div>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-harbor-700/70 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist-600"><span>FutureLight Global / 2024</span><span className="hidden items-center gap-2 sm:flex"><ArrowDownRight className="h-4 w-4 text-skyway-400" /> Scroll to explore</span><span>01 / 04</span></div>
      </div>
    </section>
  );
}
