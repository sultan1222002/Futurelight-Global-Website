"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 2;
export const GLOBE_RADIUS = RADIUS;

const vertexShader = /* glsl */ `
  varying vec3 vWorldNormal;
  varying vec2 vUv;

  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D dayMap;
  uniform sampler2D nightMap;
  uniform vec3 sunDirection;
  uniform vec3 nightTint;
  varying vec3 vWorldNormal;
  varying vec2 vUv;

  void main() {
    vec3 day = texture2D(dayMap, vUv).rgb;
    vec3 night = texture2D(nightMap, vUv).rgb * nightTint;

    float sunFacing = dot(normalize(vWorldNormal), normalize(sunDirection));
    float mixAmount = smoothstep(-0.15, 0.2, sunFacing);

    vec3 color = mix(night * 1.4, day, mixAmount);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function BaseSphere({ nightTint = "#f5be66" }: { nightTint?: string }) {
  const [dayMap, nightMap] = useTexture(
    ["/textures/earth/day.jpg", "/textures/earth/night.png"],
    (textures) => {
      const list = Array.isArray(textures) ? textures : [textures];
      for (const tex of list) tex.colorSpace = THREE.SRGBColorSpace;
    }
  );

  const uniforms = useMemo(
    () => ({
      dayMap: { value: dayMap },
      nightMap: { value: nightMap },
      sunDirection: { value: new THREE.Vector3(4, 2, 3).normalize() },
      nightTint: { value: new THREE.Color(nightTint) },
    }),
    [dayMap, nightMap, nightTint]
  );

  return (
    <mesh>
      <sphereGeometry args={[RADIUS, 96, 96]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function CloudLayer() {
  const cloudsMap = useTexture("/textures/earth/clouds.png", (tex) => {
    const texture = Array.isArray(tex) ? tex[0] : tex;
    texture.colorSpace = THREE.SRGBColorSpace;
  });
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.014;
  });

  return (
    <mesh ref={ref} scale={1.008}>
      <sphereGeometry args={[RADIUS, 96, 96]} />
      <meshStandardMaterial
        map={cloudsMap}
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </mesh>
  );
}
