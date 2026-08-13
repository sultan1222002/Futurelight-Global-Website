import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { team } from "@/lib/data";

export function TeamTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">The people</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
          Guided by Experts Who Care
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-harbor-800 text-mist-500">
              <User className="h-7 w-7" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-mist-50">{member.name}</h3>
            <p className="mt-1 text-sm text-mist-400">{member.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about-us#team"
          className="inline-flex items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300"
        >
          Meet the Full Team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
