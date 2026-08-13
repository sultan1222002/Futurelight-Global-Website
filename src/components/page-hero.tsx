export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-harbor-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-20%,theme(colors.harbor.700),theme(colors.harbor.950)_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-mist-50 sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-mist-300">{description}</p>
        )}
      </div>
    </section>
  );
}
