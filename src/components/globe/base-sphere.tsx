"use client";

import { useMemo } from "react";
import { latLonToVector3 } from "@/lib/geo";
import continentOutlines from "@/lib/continent-outlines.json";

const RADIUS = 2;

export function BaseSphere({ color = "#0d1730" }: { color?: string }) {
  return (
    <mesh>
      <sphereGeometry args={[RADIUS - 0.004, 64, 64]} />
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.15}
        emissive={color}
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

export function ContinentPoints({ color = "#f5be66" }: { color?: string }) {
  const positions = useMemo(() => {
    const rings = continentOutlines as [number, number][][];
    const points: number[] = [];
    for (const ring of rings) {
      for (const [lon, lat] of ring) {
        const v = latLonToVector3(lat, lon, RADIUS);
        points.push(v.x, v.y, v.z);
      }
    }
    return new Float32Array(points);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.021}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

export const GLOBE_RADIUS = RADIUS;
