import type { Metadata } from "next";
import { Globe } from "@/components/globe/globe";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Globe Preview | FutureLight Global",
  robots: { index: false, follow: false },
};

const variants = [
  { key: "dual" as const, label: "Dual (default)", description: "Amber continents, skyway atmosphere — used on the homepage hero." },
  { key: "amber" as const, label: "Amber", description: "All-beacon warm tone." },
  { key: "skyway" as const, label: "Skyway", description: "All-blue cool tone." },
];

export default function GlobePreviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Design review"
        title="Globe Variants"
        description="Flight paths trace from Cumilla to FutureLight's core European destinations. Drag to orbit."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {variants.map((v) => (
            <div key={v.key}>
              <div className="aspect-square overflow-hidden rounded-2xl border border-harbor-800 bg-harbor-900/40">
                <Globe variant={v.key} interactive className="h-full w-full" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-mist-50">{v.label}</h3>
              <p className="mt-1 text-sm text-mist-400">{v.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
