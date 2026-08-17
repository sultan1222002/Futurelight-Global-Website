import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello FutureLight Global! I want to enquire about studying abroad."
  );
  const href = `https://wa.me/${siteConfig.phone1.replace("+", "")}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FutureLight Global on WhatsApp"
      className="fixed bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 sm:bottom-10 sm:right-10"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </a>
  );
}
