"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-harbor-700 bg-harbor-950 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-600 focus:border-beacon-400 focus:outline-none";
const labelClass = "text-sm font-medium text-mist-300";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: connect to a real submission endpoint before launch.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-beacon-500/30 bg-harbor-900/60 px-6 py-16 text-center">
        <CheckCircle2 className="h-9 w-9 text-beacon-400" />
        <h3 className="font-display text-xl font-semibold text-mist-50">Session Requested!</h3>
        <p className="max-w-sm text-sm text-mist-400">
          We&rsquo;ll confirm your session within 24 hours by phone or email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">Full Name</label>
        <input id="name" name="name" required className={`${inputClass} mt-1.5`} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={`${inputClass} mt-1.5`} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required className={`${inputClass} mt-1.5`} />
      </div>
      <div>
        <label className={labelClass} htmlFor="education">Education Level</label>
        <select id="education" name="education" className={`${inputClass} mt-1.5`}>
          <option>SSC/HSC</option>
          <option>Bachelor&rsquo;s</option>
          <option>Master&rsquo;s</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="degree">Target Degree</label>
        <select id="degree" name="degree" className={`${inputClass} mt-1.5`}>
          <option>Bachelor&rsquo;s</option>
          <option>Master&rsquo;s</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="destination">Preferred Destination</label>
        <input id="destination" name="destination" placeholder="e.g. Finland, Sweden" className={`${inputClass} mt-1.5`} />
      </div>
      <div>
        <label className={labelClass} htmlFor="mode">Preferred Session Mode</label>
        <select id="mode" name="mode" className={`${inputClass} mt-1.5`}>
          <option>In-Person (Cumilla)</option>
          <option>Online (Video Call)</option>
          <option>Phone Call</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="heard">How did you hear about us?</label>
        <select id="heard" name="heard" className={`${inputClass} mt-1.5`}>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Friend</option>
          <option>Google</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="notes">Any specific questions or concerns?</label>
        <textarea id="notes" name="notes" rows={4} className={`${inputClass} mt-1.5 resize-none`} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-beacon-500 px-7 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400 disabled:opacity-70"
        >
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          Book My Free Session
        </button>
      </div>
    </form>
  );
}
