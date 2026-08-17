"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";
import { BaseSphere, ContinentPoints } from "./base-sphere";
import { Atmosphere } from "./atmosphere";
import { FlightArcs } from "./flight-arcs";

export type GlobeVariant = "amber" | "skyway" | "dual";

const palettes: Record<
  GlobeVariant,
  { continents: string; atmosphere: string; route: string; light: string }
> = {
  amber: { continents: "#f5be66", atmosphere: "#f0a93b", route: "#f5be66", light: "#f8d28a" },
  skyway: { continents: "#7ec1ee", atmosphere: "#4fa3e3", route: "#7ec1ee", light: "#a9d4f5" },
  dual: { continents: "#f5be66", atmosphere: "#4fa3e3", route: "#7ec1ee", light: "#f8d28a" },
};

function RotatingGroup({ spin, variant }: { spin: boolean; variant: GlobeVariant }) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (spin && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.055;
    }
  });

  const palette = palettes[variant];

  return (
    <group ref={groupRef} rotation={[0.15, -0.6, 0.12]}>
      <BaseSphere />
      <ContinentPoints color={palette.continents} />
      <Atmosphere color={palette.atmosphere} intensity={0.85} />
      <FlightArcs routeColor={palette.route} lightColor={palette.light} />
    </group>
  );
}

export function GlobeScene({
  variant = "dual",
  interactive = false,
  spin = true,
}: {
  variant?: GlobeVariant;
  interactive?: boolean;
  spin?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5.4], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 2, 3]} intensity={1.1} color="#eaf0fa" />
      <pointLight position={[-3, -2, -3]} intensity={0.3} color="#4fa3e3" />
      <RotatingGroup spin={spin} variant={variant} />
      {interactive && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.6}
          maxPolarAngle={Math.PI / 2 + 0.6}
        />
      )}
    </Canvas>
  );
}
