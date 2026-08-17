export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fixed backdrop — always visible in the margin around the frame */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-harbor-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,theme(colors.harbor.700),theme(colors.harbor.950)_65%)]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-skyway-600/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-beacon-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20px 30px, white, transparent), radial-gradient(1px 1px at 90px 80px, white, transparent), radial-gradient(1.5px 1.5px at 160px 40px, white, transparent), radial-gradient(1px 1px at 230px 120px, white, transparent), radial-gradient(1.5px 1.5px at 310px 60px, white, transparent), radial-gradient(1px 1px at 380px 20px, white, transparent)",
            backgroundSize: "420px 160px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* The floating window that holds the entire site */}
      <div className="relative mx-2 my-2 h-[calc(100dvh-1rem)] overflow-y-auto overflow-x-hidden rounded-[22px] border border-harbor-700/70 bg-harbor-950 shadow-2xl shadow-black/60 sm:mx-4 sm:my-4 sm:h-[calc(100dvh-2rem)] sm:rounded-[28px] lg:mx-6 lg:my-6 lg:h-[calc(100dvh-3rem)]">
        {children}
      </div>
    </>
  );
}
