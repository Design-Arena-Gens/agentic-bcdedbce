'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';
import Planet from './Planet';

export default function Scene() {
  const sunRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  const planets = useMemo(() => [
    {
      name: 'Mercury',
      size: 0.8,
      distance: 8,
      color: '#8C7853',
      speed: 0.04,
      info: 'Closest to the Sun'
    },
    {
      name: 'Venus',
      size: 1.2,
      distance: 12,
      color: '#FFC649',
      speed: 0.03,
      info: 'Hottest planet'
    },
    {
      name: 'Earth',
      size: 1.3,
      distance: 16,
      color: '#4A90E2',
      speed: 0.025,
      info: 'Our home world'
    },
    {
      name: 'Mars',
      size: 1.0,
      distance: 20,
      color: '#E27B58',
      speed: 0.02,
      info: 'The Red Planet'
    },
    {
      name: 'Jupiter',
      size: 3.5,
      distance: 28,
      color: '#C88B3A',
      speed: 0.012,
      info: 'Largest gas giant'
    },
    {
      name: 'Saturn',
      size: 3.0,
      distance: 36,
      color: '#FAD5A5',
      speed: 0.009,
      info: 'Lord of the Rings',
      hasRings: true
    },
    {
      name: 'Uranus',
      size: 2.0,
      distance: 43,
      color: '#4FD0E7',
      speed: 0.006,
      info: 'Ice giant'
    },
    {
      name: 'Neptune',
      size: 1.9,
      distance: 49,
      color: '#4166F5',
      speed: 0.005,
      info: 'Windy blue world'
    },
  ], []);

  return (
    <group ref={groupRef}>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={100}
        autoRotate={true}
        autoRotateSpeed={0.3}
      />

      {/* Sun */}
      <Sphere ref={sunRef} args={[5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          emissive="#FDB813"
          emissiveIntensity={2}
          color="#FDB813"
        />
      </Sphere>

      {/* Sun glow */}
      <Sphere args={[5.5, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.2}
        />
      </Sphere>

      {/* Planets */}
      {planets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </group>
  );
}
