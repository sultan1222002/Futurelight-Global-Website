import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | FutureLight Global",
  description: "Reach FutureLight Global in Cumilla, Bangladesh — by phone, email, WhatsApp, or our enquiry form.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We're Here to Help. Reach Out Anytime."
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-mist-50">Contact Details</h2>
          <ul className="mt-6 space-y-5 text-sm text-mist-300">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-beacon-400" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-beacon-400" />
              <span>{siteConfig.phone1} · {siteConfig.phone2}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-beacon-400" />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-beacon-400" />
              <span>{siteConfig.officeHours}</span>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-harbor-800">
            <iframe
              title="FutureLight Global office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="260"
              loading="lazy"
              className="border-0 grayscale invert-[92%] contrast-[90%]"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-lg font-semibold text-mist-50">Send an Enquiry</h2>
          <p className="mt-2 text-sm text-mist-400">We&rsquo;ll get back to you within 24 hours.</p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
