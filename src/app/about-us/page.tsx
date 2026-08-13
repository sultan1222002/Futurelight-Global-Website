import type { Metadata } from "next";
import {
  ShieldCheck,
  Heart,
  Eye,
  Trophy,
  UserCheck,
  CheckCircle2,
  User,
  Globe2,
  ListChecks,
  HandHeart,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | FutureLight Global",
  description:
    "FutureLight Global is a student-first study-abroad consultancy founded in 2025 in Cumilla, Bangladesh, specialising in ethical, transparent guidance for European pathways.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Heart, title: "Student-First" },
  { icon: Eye, title: "Transparency" },
  { icon: Trophy, title: "Excellence" },
  { icon: UserCheck, title: "Personalisation" },
  { icon: CheckCircle2, title: "Accountability" },
];

const strengths = [
  { icon: Globe2, title: "Deep European Expertise", description: "Focused knowledge of visa processes, scholarship landscapes, and university pathways across 15+ European countries." },
  { icon: HandHeart, title: "Commission-Free Advice", description: "We recommend what fits you, not what pays us the most." },
  { icon: ListChecks, title: "A Structured 10-Step Process", description: "From first assessment to post-arrival support, nothing falls through the cracks." },
  { icon: UserCheck, title: "Real 1-on-1 Attention", description: "Every student works directly with a senior counsellor, not a call centre queue." },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About FutureLight Global"
        title="Guidance you can actually trust."
        description="A student-first study-abroad consultancy, built in Cumilla to help Bangladeshi students reach Europe and beyond — honestly, and one step at a time."
      />

      {/* Who we are */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-mist-300 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-mist-50">Who We Are</h2>
        <div className="mt-5 space-y-4 leading-relaxed">
          <p>
            FutureLight Global was founded in 2025 in Cumilla, Bangladesh, with a simple
            premise: students deserve study-abroad advice that puts their interests first,
            not a consultancy&rsquo;s commission structure.
          </p>
          <p>
            We work primarily with students pursuing undergraduate and postgraduate study in
            Europe, while also supporting applications to the UK, USA, Australia, South Korea,
            China, and New Zealand. Every recommendation we make — from country choice to
            university shortlist — is grounded in what&rsquo;s realistic and right for that
            student&rsquo;s profile, finances, and goals.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-harbor-900/40 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-harbor-800 bg-harbor-950/60 p-8">
            <h3 className="font-display text-lg font-semibold text-beacon-400">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-300">
              To make high-quality international education accessible to every aspiring
              student in Bangladesh.
            </p>
          </div>
          <div className="rounded-2xl border border-harbor-800 bg-harbor-950/60 p-8">
            <h3 className="font-display text-lg font-semibold text-skyway-400">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-300">
              To provide ethical, transparent, and personalised guidance that empowers
              students to confidently pursue their global academic and career aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <h2 className="text-center font-display text-2xl font-semibold text-mist-50">Our Values</h2>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-3 rounded-2xl border border-harbor-800 bg-harbor-900/40 px-4 py-6 text-center">
              <v.icon className="h-5 w-5 text-beacon-400" />
              <span className="text-sm font-medium text-mist-200">{v.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key facts */}
      <section className="border-y border-harbor-800 bg-harbor-900/50">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 px-5 py-12 text-center lg:px-8">
          <div>
            <div className="font-display text-3xl font-semibold text-beacon-400">2025</div>
            <div className="mt-1 text-sm text-mist-400">Founded</div>
          </div>
          <div>
            <div className="font-display text-3xl font-semibold text-beacon-400">20+</div>
            <div className="mt-1 text-sm text-mist-400">Countries Covered</div>
          </div>
          <div>
            <div className="font-display text-3xl font-semibold text-beacon-400">Europe</div>
            <div className="mt-1 text-sm text-mist-400">Primary Focus</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-skyway-400">Leadership</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
            Meet the Team
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-harbor-800 bg-harbor-900/40 p-6 text-center">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-harbor-800 text-mist-500">
                <User className="h-9 w-9" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-mist-50">{member.name}</h3>
              <p className="mt-1 text-sm text-beacon-400">{member.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">
                Photo and bio to be added — reach out with a short 2–3 sentence
                introduction and headshot.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-harbor-900/40 py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-mist-50">Our Strengths</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <div key={s.title} className="rounded-2xl border border-harbor-800 bg-harbor-950/60 p-6">
                <s.icon className="h-5 w-5 text-beacon-400" />
                <h3 className="mt-4 font-display text-sm font-semibold text-mist-50">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
