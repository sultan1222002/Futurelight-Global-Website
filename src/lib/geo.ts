import * as THREE from "three";

/** Converts latitude/longitude (degrees) to a position on a sphere of given radius. */
export function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

export type City = {
  name: string;
  lat: number;
  lon: number;
};

export const origin: City = { name: "Cumilla", lat: 23.4607, lon: 91.1809 };

export const destinations: City[] = [
  { name: "Stockholm", lat: 59.3293, lon: 18.0686 },
  { name: "Helsinki", lat: 60.1699, lon: 24.9384 },
  { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
  { name: "Dublin", lat: 53.3498, lon: -6.2603 },
  { name: "Berlin", lat: 52.52, lon: 13.405 },
  { name: "London", lat: 51.5072, lon: -0.1276 },
];
