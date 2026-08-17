import type { Metadata } from "next";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "FutureLight Global — Your Future, Our Guidance.",
  description:
    "Ethical, transparent, and personalised study-abroad counselling from Cumilla, Bangladesh to the world, with deep expertise in European destinations.",
  metadataBase: new URL("https://futurelightglobal.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-beacon-500 focus:px-4 focus:py-2 focus:text-harbor-950 focus:font-semibold"
        >
          Skip to main content
        </a>
        <SiteFrame>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SiteFrame>
        <WhatsAppButton />
      </body>
    </html>
  );
}
