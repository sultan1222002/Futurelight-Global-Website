"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import type { GlobeVariant } from "./globe-scene";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

const GlobeScene = dynamic(() => import("./globe-scene").then((m) => m.GlobeScene), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-[70%] aspect-square rounded-full bg-[radial-gradient(circle_at_35%_35%,theme(colors.harbor.600),theme(colors.harbor.900)_70%)] opacity-60 animate-pulse" />
    </div>
  );
}

export function Globe({
  variant = "dual",
  interactive = false,
  className = "",
}: {
  variant?: GlobeVariant;
  interactive?: boolean;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={className}>
      <GlobeScene variant={variant} interactive={interactive} spin={!reducedMotion} />
    </div>
  );
}
