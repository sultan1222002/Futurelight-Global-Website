"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe2, Menu, User, X } from "lucide-react";
import { primaryNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = headerRef.current?.parentElement;
    if (!scrollContainer) return;
    const onScroll = () => setScrolled(scrollContainer.scrollTop > 12);
    onScroll();
    scrollContainer.addEventListener("scroll", onScroll);
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-harbor-700/60 bg-harbor-950/90 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display font-semibold text-mist-50">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-beacon-400/30 bg-beacon-500/15">
            <Globe2 className="h-4 w-4 text-beacon-400" />
          </span>
          <span className="hidden sm:inline">
            FutureLight <span className="font-normal text-beacon-400">Global</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-harbor-700/70 bg-harbor-900/60 p-1 backdrop-blur-sm lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenSection(item.label)}
              onMouseLeave={() => item.children && setOpenSection(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-mist-300 transition-colors hover:bg-harbor-800/80 hover:text-mist-50"
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

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <Link
            href="#"
            aria-label="Student Login"
            title="Student Login"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-harbor-700/70 bg-harbor-900/60 text-mist-300 backdrop-blur-sm transition-colors hover:border-skyway-400/50 hover:text-skyway-300"
          >
            <User className="h-4 w-4" />
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
          className="text-mist-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-harbor-700 bg-harbor-950 px-5 py-4 lg:hidden">
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
