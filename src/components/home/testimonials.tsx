import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">Sample layout</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
          Students We&rsquo;ve Guided
        </h2>
        <p className="mt-3 text-sm text-mist-500">
          Placeholder quotes shown for layout — swap in real, permissioned student testimonials before launch.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6">
            <div className="flex gap-0.5 text-beacon-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm italic leading-relaxed text-mist-300">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-5 text-sm font-semibold text-mist-50">
              {t.name} <span className="font-normal text-mist-500">— bound for {t.destination}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
