import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Ready to Start Your Journey?",
  description = "Book a free counselling session and let's map out your path, step by step.",
  buttonLabel = "Book Free Counselling",
  href = "/book-counselling",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <div className="rounded-3xl border border-beacon-500/20 bg-gradient-to-br from-beacon-500/10 via-harbor-900 to-harbor-900 px-8 py-14 text-center sm:px-16">
        <h2 className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-mist-400">{description}</p>
        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-beacon-500 px-7 py-3.5 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
