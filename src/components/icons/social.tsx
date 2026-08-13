export function FacebookGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.19h-3.16V7.6c0-.92.26-1.55 1.57-1.55h1.68V3.19C16.44 3.13 15.4 3 14.2 3c-2.5 0-4.22 1.53-4.22 4.34v2.27H7.22v3.19h2.76V21h3.52Z" />
    </svg>
  );
}

export function InstagramGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
