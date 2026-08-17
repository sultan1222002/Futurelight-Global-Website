import { Check, CircleDot } from "lucide-react";
import { processSteps } from "@/lib/data";

const descriptions = [
  "Your journey starts with an expert consultation.",
  "Evaluate academic background, goals and eligibility.",
  "Find programs aligned with your profile.",
  "Build a compelling application package.",
  "Coaching and practice to reach target scores.",
  "Submit polished applications on time.",
  "Review offers and select your path.",
  "Explore funding and financial planning.",
  "Prepare documents and navigate the process.",
  "Travel, accommodation and final preparation.",
];

export function ProcessPreview() {
  return (
    <section className="relative overflow-hidden border-y border-harbor-700 bg-harbor-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(theme(colors.skyway-400/0.35)_1px,transparent_1px),linear-gradient(90deg,theme(colors.skyway-400/0.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[18vw] font-bold tracking-[-0.12em] text-mist-50/[0.025]">FLG</div>
      <div className="relative mx-auto max-w-6xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-skyway-400">Our 10-step student journey</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-mist-50 sm:text-6xl">The orbital path.</h2><p className="mt-5 text-sm leading-6 text-mist-400">A clear, guided roadmap from first consultation to your boarding pass.</p></div>
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-skyway-400 via-skyway-500/60 to-beacon-500" />
          <div className="flex flex-col gap-8 lg:gap-12">
            {processSteps.map((step, index) => { const active = index === 0; const left = index % 2 === 0; return <div key={step.step} className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-20"><div className={`relative ${left ? "lg:pr-10" : "lg:order-2 lg:pl-10"}`}><div className={`border bg-harbor-900/75 p-5 backdrop-blur-md transition-colors ${active ? "border-skyway-400/60 shadow-[0_0_28px_rgba(0,217,255,0.12)]" : "border-harbor-700"}`}><div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-skyway-400">Phase {String(step.step).padStart(2, "0")}</span>{active ? <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-beacon-300"><CircleDot className="h-3 w-3" /> Active</span> : <span className="text-[10px] uppercase tracking-widest text-mist-600">Queued</span>}</div><h3 className="mt-3 font-display text-xl font-semibold text-mist-50">{step.title}</h3><p className="mt-2 text-sm leading-6 text-mist-400">{descriptions[index]}</p><div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mist-600"><Check className="h-3 w-3 text-skyway-400" /> FutureLight guided</div></div></div><div className="absolute left-1/2 top-7 z-10 hidden size-4 -translate-x-1/2 rounded-full border-2 border-harbor-950 bg-skyway-400 shadow-[0_0_16px_rgba(0,217,255,0.85)] lg:block" /></div> })}
          </div>
        </div>
      </div>
    </section>
  );
}
