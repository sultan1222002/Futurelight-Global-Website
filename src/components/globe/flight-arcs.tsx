"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { latLonToVector3, origin, destinations } from "@/lib/geo";
import { GLOBE_RADIUS } from "./base-sphere";

type ArcData = {
  curve: THREE.QuadraticBezierCurve3;
  tube: THREE.TubeGeometry;
  phase: number;
};

function buildArc(fromLat: number, fromLon: number, toLat: number, toLon: number): ArcData {
  const start = latLonToVector3(fromLat, fromLon, GLOBE_RADIUS);
  const end = latLonToVector3(toLat, toLon, GLOBE_RADIUS);
  const dist = start.distanceTo(end);

  const mid = start.clone().add(end).multiplyScalar(0.5);
  mid.normalize().multiplyScalar(GLOBE_RADIUS + dist * 0.45);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const tube = new THREE.TubeGeometry(curve, 64, 0.0035, 6, false);

  return { curve, tube, phase: Math.random() };
}

function TravelingLight({ curve, phase, color }: { curve: THREE.QuadraticBezierCurve3; phase: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = 0.09;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.elapsedTime * speed + phase) % 1;
    const point = curve.getPoint(t);
    ref.current.position.copy(point);
    const fade = Math.sin(t * Math.PI); // fade in/out at path ends
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.25 + fade * 0.75;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.014, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={1} />
    </mesh>
  );
}

export function FlightArcs({
  routeColor = "#f5be66",
  lightColor = "#f8d28a",
}: {
  routeColor?: string;
  lightColor?: string;
}) {
  const arcs = useMemo(
    () => destinations.map((d) => buildArc(origin.lat, origin.lon, d.lat, d.lon)),
    []
  );

  return (
    <group>
      {arcs.map((arc, i) => (
        <group key={i}>
          <mesh geometry={arc.tube}>
            <meshBasicMaterial color={routeColor} transparent opacity={0.22} />
          </mesh>
          <TravelingLight curve={arc.curve} phase={arc.phase} color={lightColor} />
        </group>
      ))}
    </group>
  );
}
