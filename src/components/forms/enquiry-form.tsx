"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-harbor-700 bg-harbor-950 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-600 focus:border-beacon-400 focus:outline-none";
const labelClass = "text-sm font-medium text-mist-300";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to a real endpoint (e.g. a Next.js API route that
    // sends email via Resend, or a form service like Formspree) before launch.
    // This currently only simulates a submission.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-beacon-500/30 bg-harbor-900/60 px-6 py-14 text-center">
        <CheckCircle2 className="h-8 w-8 text-beacon-400" />
        <h3 className="font-display text-lg font-semibold text-mist-50">Thank you!</h3>
        <p className="text-sm text-mist-400">We&rsquo;ll contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="name">Full Name</label>
        <input id="name" name="name" required className={`${inputClass} mt-1.5`} />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" required className={`${inputClass} mt-1.5`} />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" required className={`${inputClass} mt-1.5`} />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="role">I am a</label>
        <select id="role" name="role" className={`${inputClass} mt-1.5`}>
          <option>Student</option>
          <option>Parent</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="interest">Interested in</label>
        <select id="interest" name="interest" className={`${inputClass} mt-1.5`}>
          <option>Counselling</option>
          <option>IELTS</option>
          <option>PTE</option>
          <option>Visa</option>
          <option>SOP</option>
          <option>Scholarship</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="destination">Preferred Destination</label>
        <input id="destination" name="destination" placeholder="e.g. Sweden" className={`${inputClass} mt-1.5`} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">Message / Question (optional)</label>
        <textarea id="message" name="message" rows={4} className={`${inputClass} mt-1.5 resize-none`} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-beacon-500 px-7 py-3 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400 disabled:opacity-70"
        >
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}
