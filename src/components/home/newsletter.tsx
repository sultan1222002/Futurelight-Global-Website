import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="border-y border-harbor-800 bg-harbor-900/50">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-16 text-center lg:px-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-beacon-500/10 text-beacon-400">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-semibold text-mist-50">
            Stay Updated with Study Abroad News
          </h2>
          <p className="mt-2 text-sm text-mist-400">
            Get the latest scholarship alerts, country updates, and visa news straight to your inbox.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-harbor-700 bg-harbor-950 px-5 py-3 text-sm text-mist-100 placeholder:text-mist-600 focus:border-beacon-400 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-beacon-500 px-6 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
