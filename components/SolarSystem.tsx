'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';
import { Environment, Stars } from '@react-three/drei';

export default function SolarSystem() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 20, 50], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />

          <Stars
            radius={300}
            depth={60}
            count={8000}
            factor={7}
            saturation={0}
            fade
            speed={1}
          />

          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />

          <Scene />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
