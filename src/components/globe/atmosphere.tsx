"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { GLOBE_RADIUS } from "./base-sphere";

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 glowColor;
  uniform float intensity;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.4);
    gl_FragColor = vec4(glowColor, fresnel * intensity);
  }
`;

export function Atmosphere({
  color = "#4fa3e3",
  intensity = 0.9,
}: {
  color?: string;
  intensity?: number;
}) {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color(color) },
      intensity: { value: intensity },
    }),
    [color, intensity]
  );

  return (
    <mesh scale={1.14}>
      <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
