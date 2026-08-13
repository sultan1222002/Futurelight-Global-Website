"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-harbor-950/90 backdrop-blur-md border-b border-harbor-700/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg text-mist-50">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-beacon-500/15 ring-1 ring-beacon-400/40">
            <span className="h-2 w-2 rounded-full bg-beacon-400 shadow-[0_0_10px_2px_theme(colors.beacon.400)]" />
          </span>
          FutureLight <span className="text-beacon-400 font-normal">Global</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenSection(item.label)}
              onMouseLeave={() => item.children && setOpenSection(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-mist-300 transition-colors hover:text-mist-50"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && openSection === item.label && (
                <div className="absolute left-0 top-full grid w-64 grid-cols-1 gap-0.5 rounded-lg border border-harbor-700 bg-harbor-900/98 p-2 shadow-xl shadow-black/40">
                  {item.children.map((child) => (
                    <span
                      key={child}
                      className="cursor-default rounded-md px-3 py-1.5 text-sm text-mist-400 transition-colors hover:bg-harbor-800 hover:text-mist-50"
                    >
                      {child}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="#" className="text-sm text-mist-400 hover:text-mist-50 transition-colors">
            Student Login
          </Link>
          <Link
            href="/book-counselling"
            className="rounded-full bg-beacon-500 px-5 py-2.5 text-sm font-semibold text-harbor-950 transition-colors hover:bg-beacon-400"
          >
            Book Free Counselling
          </Link>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-mist-100"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-harbor-700 bg-harbor-950 px-5 py-4">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-mist-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/book-counselling"
            className="mt-4 block rounded-full bg-beacon-500 px-5 py-3 text-center text-sm font-semibold text-harbor-950"
            onClick={() => setMobileOpen(false)}
          >
            Book Free Counselling
          </Link>
        </div>
      )}
    </header>
  );
}
