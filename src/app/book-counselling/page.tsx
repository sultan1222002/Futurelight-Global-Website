import type { Metadata } from "next";
import { CheckCircle2, User } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BookingForm } from "@/components/forms/booking-form";

export const metadata: Metadata = {
  title: "Book Free Counselling | FutureLight Global",
  description: "Book a free, no-obligation study-abroad counselling session with FutureLight Global.",
};

const valueProps = [
  "We review your academic profile and goals",
  "We suggest realistic country and university options",
  "We explain the full process and timeline",
  "We answer all your questions — at no cost",
];

export default function BookCounsellingPage() {
  return (
    <>
      <PageHero
        eyebrow="Free · No obligation"
        title="Book Your Free Counselling Session"
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-mist-50">
            What happens in a counselling session
          </h2>
          <ul className="mt-5 space-y-3">
            {valueProps.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-mist-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-beacon-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-harbor-800 text-mist-500">
              <User className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-sm font-semibold text-mist-50">
              Saad Mahamudur Rahman
            </h3>
            <p className="text-sm text-beacon-400">CEO & Senior Counsellor</p>
            <p className="mt-3 text-sm text-mist-400">
              You&rsquo;ll typically be paired with our senior counsellor for your first session.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
