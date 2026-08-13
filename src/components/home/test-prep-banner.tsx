import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

export function TestPrepBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-skyway-500/20 bg-gradient-to-br from-skyway-600/10 via-harbor-900 to-harbor-900 px-8 py-14 text-center sm:px-16">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-skyway-500/15 text-skyway-300">
          <BookOpenCheck className="h-6 w-6" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
          Prepare for IELTS & PTE with Expert Trainers
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-mist-400">
          Online and offline classes available. Enrol now and start your journey
          with certified, experienced trainers.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/online-courses"
            className="rounded-full bg-skyway-500 px-6 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-skyway-400"
          >
            Enrol in Online Course
          </Link>
          <Link
            href="/contact?intent=demo-class"
            className="rounded-full border border-harbor-600 px-6 py-3 text-sm font-semibold text-mist-100 transition-colors hover:border-skyway-400"
          >
            Book a Demo Class
          </Link>
        </div>
      </div>
    </section>
  );
}
