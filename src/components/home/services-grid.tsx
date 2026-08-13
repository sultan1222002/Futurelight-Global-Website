import Link from "next/link";
import {
  Target,
  FileEdit,
  Landmark,
  HandCoins,
  FileStack,
  PlaneTakeoff,
  BookOpenCheck,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Target,
  FileEdit,
  Landmark,
  HandCoins,
  FileStack,
  PlaneTakeoff,
  BookOpenCheck,
  Rocket,
};

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">What we do</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
          End-to-End Support, Every Step of the Way
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6 transition-colors hover:border-beacon-500/50 hover:bg-harbor-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-beacon-500/10 text-beacon-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-mist-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-skyway-400 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300"
        >
          See All Our Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
