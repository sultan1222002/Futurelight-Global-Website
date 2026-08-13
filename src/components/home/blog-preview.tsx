import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

const upcomingTopics = [
  { tag: "Study Destinations", title: "How to Study in Europe from Bangladesh in 2025–26" },
  { tag: "IELTS/PTE", title: "IELTS vs PTE: Which Should You Choose?" },
  { tag: "Scholarships", title: "Top Scholarships for Bangladeshi Students in 2026" },
];

export function BlogPreview() {
  return (
    <section className="bg-harbor-900/40 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">Knowledge Hub</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
            Stay Informed, Stay Ahead
          </h2>
          <p className="mt-3 text-sm text-mist-500">
            The blog launches with these first articles — check back soon.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {upcomingTopics.map((post) => (
            <div key={post.title} className="rounded-2xl border border-harbor-800 bg-harbor-950/60 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-skyway-500/10 text-skyway-300">
                <Newspaper className="h-4 w-4" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-skyway-400">{post.tag}</p>
              <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-mist-100">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-beacon-400 hover:text-beacon-300"
          >
            Visit the Blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
