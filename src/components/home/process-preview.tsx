import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";

export function ProcessPreview() {
  return (
    <section className="border-b border-harbor-800 bg-harbor-900/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="relative min-h-80 overflow-hidden border border-harbor-700 bg-harbor-800">
          <Image src="/images/futurelight-student.png" alt="Student preparing for study abroad" fill className="object-cover object-[62%_center] opacity-90" sizes="(max-width: 1024px) 100vw, 40vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-harbor-950 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-beacon-300">A clearer way forward</div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-beacon-400">The 10-step student</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-mist-50 sm:text-5xl">From first question to first day abroad.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-mist-400">One dedicated team, one transparent process, and no guesswork hidden between the steps.</p>
          <div className="mt-10 grid gap-0 border-t border-harbor-700 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4 border-b border-harbor-700 py-4">
                <span className="font-mono text-sm text-beacon-400">{String(step.step).padStart(2, "0")}</span>
                <span className="text-sm text-mist-200">{step.title}</span>
              </div>
            ))}
          </div>
          <Link href="/our-process" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300">See the full process <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
