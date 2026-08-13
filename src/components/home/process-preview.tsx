import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";

export function ProcessPreview() {
  return (
    <section className="bg-harbor-900/40 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">The roadmap</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
            Your Journey Starts Here
          </h2>
        </div>

        <div className="relative mt-14 overflow-x-auto pb-4">
          <div className="flex min-w-[900px] gap-0 lg:min-w-0">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex-1 px-2 text-center">
                {i !== processSteps.length - 1 && (
                  <div className="absolute right-0 top-5 h-px w-full bg-harbor-700" />
                )}
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-beacon-500/50 bg-harbor-950 font-display text-sm font-semibold text-beacon-400">
                  {step.step}
                </div>
                <p className="mt-3 text-xs font-medium leading-snug text-mist-300">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/our-process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300"
          >
            See Full Process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
