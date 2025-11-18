'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import InfoPanel from '@/components/InfoPanel';
import LoadingScreen from '@/components/LoadingScreen';

const SolarSystem = dynamic(() => import('@/components/SolarSystem'), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <SolarSystem />
      </Suspense>
      <Navigation />
      <InfoPanel />
    </main>
  );
}
