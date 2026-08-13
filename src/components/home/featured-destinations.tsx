import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data";

export function FeaturedDestinations() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">Where you could go</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
            Popular Study Destinations
          </h2>
        </div>
        <Link
          href="/study-destinations"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300"
        >
          See All Destinations <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {destinations.map((d) => (
          <Link
            key={d.country}
            href={`/study-destinations/${d.slug}`}
            className="group w-64 shrink-0 rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6 transition-colors hover:border-beacon-500/50 lg:w-auto"
          >
            <span className="text-3xl">{d.flag}</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-mist-50">{d.country}</h3>
            <ul className="mt-3 space-y-1 text-sm text-mist-400">
              <li>{d.fact1}</li>
              <li>{d.fact2}</li>
            </ul>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-skyway-400 opacity-0 transition-opacity group-hover:opacity-100">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
