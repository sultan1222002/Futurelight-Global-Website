import { differentiators } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="bg-harbor-900/40 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">Why FutureLight</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
            Why Students Trust FutureLight Global
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <div key={item.title} className="flex gap-5">
              <span className="font-display text-2xl font-semibold text-harbor-600">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-mist-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
