export const siteConfig = {
  name: "FutureLight Global",
  tagline: "Your Future, Our Guidance.",
  founded: "2025",
  location: "Cumilla, Bangladesh",
  address: "Sunam Monjil, Court Road, Fouzdari Chowmuhani, Cumilla - 3500, Bangladesh",
  phone1: "+8801410800048",
  phone2: "+8801410169960",
  email: "futurelightglobal@gmail.com",
  website: "futurelightglobal.com",
  facebook: "https://facebook.com/futurelightglobal",
  instagram: "https://instagram.com/futurelight_global",
  officeHours: "Saturday – Thursday: 10:00 AM – 7:00 PM · Friday: Closed",
};

export const primaryNav = [
  { label: "Home", href: "/" },
  {
    label: "Study Destinations",
    href: "/study-destinations",
    children: [
      "Sweden", "Finland", "Belgium", "Netherlands", "Poland", "Portugal",
      "Italy", "France", "Spain", "Malta", "Switzerland", "Hungary",
      "Lithuania", "Cyprus", "Georgia",
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    children: [
      "Free Counselling", "Country & University Selection", "SOP & Profile Development",
      "Application & Admission", "Scholarship & Financial Guidance",
      "Visa & Migration Guidance", "Pre-Departure & Career Counselling",
    ],
  },
  {
    label: "Test Preparation",
    href: "/test-preparation",
    children: ["IELTS Preparation", "PTE Preparation"],
  },
  { label: "Our Process", href: "/our-process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  { icon: "Target", title: "Free Counselling", description: "Individual career and study-abroad guidance sessions.", href: "/services/counselling" },
  { icon: "FileEdit", title: "SOP & Profile Development", description: "Crafting standout statements and academic profiles.", href: "/services/sop-profile" },
  { icon: "Landmark", title: "Country & University Selection", description: "Matching you to the right institution and program.", href: "/services/university-selection" },
  { icon: "HandCoins", title: "Scholarship Guidance", description: "Identifying and applying for scholarships you deserve.", href: "/services/scholarship" },
  { icon: "FileStack", title: "Application & Documentation", description: "End-to-end application and paperwork support.", href: "/services/application" },
  { icon: "PlaneTakeoff", title: "Visa & Migration", description: "Expert guidance for successful visa outcomes.", href: "/services/visa" },
  { icon: "BookOpenCheck", title: "IELTS & PTE Preparation", description: "Online and offline coaching with certified trainers.", href: "/test-preparation" },
  { icon: "Rocket", title: "Pre-Departure Support", description: "Getting you fully ready before you fly.", href: "/services/pre-departure" },
] as const;

export const differentiators = [
  { title: "Student-First Philosophy", description: "Every decision we make is guided by your best interests, not commissions." },
  { title: "Specialised in Europe", description: "Deep expertise in European pathways, visa processes, and scholarship landscapes." },
  { title: "Transparent & Ethical", description: "No hidden fees, no false promises. We tell you exactly what to expect." },
  { title: "Process-Driven Excellence", description: "Our structured 10-step roadmap ensures nothing falls through the cracks." },
];

export const stats = [
  { value: "20+", label: "Countries We Cover" },
  { value: "1:1", label: "Personalised Guidance" },
  { value: "2025", label: "Founded in Cumilla" },
  { value: "10", label: "Steps, Start to Arrival" },
];

export const destinations = [
  { country: "Sweden", flag: "🇸🇪", fact1: "0–4 yr post-study visa", fact2: "€80–150k tuition/yr", slug: "sweden" },
  { country: "Finland", flag: "🇫🇮", fact1: "2 yr post-study visa", fact2: "Low-cost living", slug: "finland" },
  { country: "Netherlands", flag: "🇳🇱", fact1: "1 yr orientation visa", fact2: "English-taught programs", slug: "netherlands" },
  { country: "Ireland", flag: "🇮🇪", fact1: "2 yr stay-back visa", fact2: "EU gateway", slug: "ireland" },
  { country: "UK", flag: "🇬🇧", fact1: "2 yr Graduate Route", fact2: "World-ranked universities", slug: "uk" },
  { country: "Germany", flag: "🇩🇪", fact1: "18-month job search", fact2: "Low/no tuition (public)", slug: "germany" },
  { country: "Australia", flag: "🇦🇺", fact1: "2–4 yr post-study visa", fact2: "Strong PR pathways", slug: "australia" },
  { country: "South Korea", flag: "🇰🇷", fact1: "D-10 job-seeking visa", fact2: "Tech & innovation hubs", slug: "south-korea" },
] as const;

export const processSteps = [
  { step: "01", title: "Initial Student Assessment", description: "Evaluate academic background, goals, finances, and target countries." },
  { step: "02", title: "Profile & Eligibility Review", description: "Assess profile gaps and determine realistic options." },
  { step: "03", title: "IELTS / PTE Preparation", description: "Guide or enrol the student in appropriate test prep." },
  { step: "04", title: "Country & University Selection", description: "Match the student to the right program, institution, and country." },
  { step: "05", title: "SOP & Profile Development", description: "Write and review Statement of Purpose, CV, and LORs." },
  { step: "06", title: "Application & Submission", description: "Prepare, verify, and submit all application documents." },
  { step: "07", title: "Offer Letter & Acceptance", description: "Evaluate offer letters and guide on acceptance." },
  { step: "08", title: "Scholarship & Financial Planning", description: "Apply for scholarships and plan education finances." },
  { step: "09", title: "Visa & Migration Guidance", description: "Prepare visa documents and attend mock interviews." },
  { step: "10", title: "Pre-Departure & Post-Arrival Support", description: "Briefing, logistics, accommodation, and ongoing support." },
] as const;

export const team = [
  { name: "Saad Mahamudur Rahman", title: "CEO & Senior Counsellor" },
  { name: "Tarikul Islam", title: "Founder & Brand Head" },
  { name: "Ikbalur Rahim Jisan", title: "Language Trainer" },
] as const;

export const testimonials = [
  { name: "Nusrat J.", destination: "Sweden", quote: "FutureLight walked me through every step of my Swedish university application, including the scholarship essay I almost gave up on." },
  { name: "Rakibul H.", destination: "Finland", quote: "The visa mock interview prep made the real one feel easy. I knew exactly what to expect." },
  { name: "Tania A.", destination: "Netherlands", quote: "Honest advice from day one, they told me when a program wasn't the right fit instead of just pushing me to apply." },
] as const;
