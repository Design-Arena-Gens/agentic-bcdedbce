'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring, Html } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  name: string;
  size: number;
  distance: number;
  color: string;
  speed: number;
  info: string;
  hasRings?: boolean;
}

export default function Planet({ name, size, distance, color, speed, info, hasRings }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += speed;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {/* Orbit ring */}
      <Ring args={[distance - 0.05, distance + 0.05, 128]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent />
      </Ring>

      {/* Planet orbit group */}
      <group ref={orbitRef}>
        <group position={[distance, 0, 0]}>
          <Sphere
            ref={planetRef}
            args={[size, 32, 32]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setClicked(!clicked)}
            scale={hovered ? 1.1 : 1}
          >
            <meshStandardMaterial
              color={color}
              roughness={0.7}
              metalness={0.3}
              emissive={color}
              emissiveIntensity={hovered ? 0.3 : 0.1}
            />
          </Sphere>

          {/* Saturn rings */}
          {hasRings && (
            <>
              <Ring
                args={[size * 1.5, size * 2.2, 64]}
                rotation={[-Math.PI / 2.5, 0, 0]}
              >
                <meshStandardMaterial
                  color="#C9A77D"
                  opacity={0.7}
                  transparent
                  side={THREE.DoubleSide}
                />
              </Ring>
              <Ring
                args={[size * 2.3, size * 2.8, 64]}
                rotation={[-Math.PI / 2.5, 0, 0]}
              >
                <meshStandardMaterial
                  color="#A88A68"
                  opacity={0.5}
                  transparent
                  side={THREE.DoubleSide}
                />
              </Ring>
            </>
          )}

          {/* Label */}
          {(hovered || clicked) && (
            <Html
              position={[0, size + 1, 0]}
              center
              distanceFactor={10}
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 glow-box">
                <div className="text-white font-bold text-sm mb-1 glow-text">{name}</div>
                <div className="text-white/70 text-xs">{info}</div>
              </div>
            </Html>
          )}
        </group>
      </group>
    </>
  );
}
