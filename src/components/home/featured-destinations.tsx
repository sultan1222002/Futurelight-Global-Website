import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/data";

export function FeaturedDestinations() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="flex flex-col justify-between gap-5 border-b border-harbor-700 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-beacon-400">02 / Destinations</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-mist-50 sm:text-6xl">A world of options.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-mist-400">The right destination is more than a pin on a map. It is where your next chapter can take shape.</p>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden border border-harbor-700 bg-harbor-700 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination, index) => (
          <Link key={destination.country} href={`/study-destinations/${destination.slug}`} className="group flex min-h-64 flex-col justify-between bg-harbor-950 p-6 transition-colors hover:bg-harbor-800">
            <div className="flex items-start justify-between"><span className="font-mono text-xs text-mist-600">0{index + 1}</span><span className="text-3xl grayscale transition-all group-hover:grayscale-0">{destination.flag}</span></div>
            <div><h3 className="font-display text-2xl font-semibold text-mist-50">{destination.country}</h3><p className="mt-3 text-sm leading-6 text-mist-400">{destination.fact1}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-beacon-400">Explore <ArrowUpRight className="h-4 w-4" /></span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
