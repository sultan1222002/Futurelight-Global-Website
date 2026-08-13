import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="border-y border-harbor-800 bg-harbor-900/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl font-semibold text-beacon-400 sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1.5 text-sm text-mist-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
