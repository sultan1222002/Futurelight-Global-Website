import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { FacebookGlyph, InstagramGlyph } from "@/components/icons/social";

const columns = [
  {
    title: "FutureLight Global",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/about-us#team" },
      { label: "Our Process", href: "/our-process" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Free Counselling", href: "/services/counselling" },
      { label: "University Selection", href: "/services/university-selection" },
      { label: "SOP & Profile Development", href: "/services/sop-profile" },
      { label: "Scholarship Guidance", href: "/services/scholarship" },
      { label: "Visa & Migration", href: "/services/visa" },
      { label: "Pre-Departure Support", href: "/services/pre-departure" },
    ],
  },
  {
    title: "Test Preparation",
    links: [
      { label: "IELTS Preparation", href: "/test-preparation/ielts" },
      { label: "PTE Preparation", href: "/test-preparation/pte" },
      { label: "Online Courses", href: "/online-courses" },
    ],
  },
  {
    title: "Study Destinations",
    links: [
      { label: "Study in Europe", href: "/study-destinations#europe" },
      { label: "Study in UK & Ireland", href: "/study-destinations#uk-ireland" },
      { label: "Study in USA", href: "/study-destinations#usa" },
      { label: "Study in Australia", href: "/study-destinations#australia" },
      { label: "Study in South Korea", href: "/study-destinations#south-korea" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-harbor-800 bg-harbor-900">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-mist-50">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-mist-400 transition-colors hover:text-beacon-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-mist-50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-mist-400">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-beacon-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-beacon-400" />
                <span>{siteConfig.phone1}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-beacon-400" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-harbor-700 text-mist-400 transition-colors hover:border-beacon-400 hover:text-beacon-400"
              >
                <FacebookGlyph className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-harbor-700 text-mist-400 transition-colors hover:border-beacon-400 hover:text-beacon-400"
              >
                <InstagramGlyph className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-harbor-800 pt-8 text-xs text-mist-600 sm:flex-row">
          <p>© {new Date().getFullYear()} FutureLight Global. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-mist-300">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-mist-300">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-mist-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
