'use client';

import { useState, useEffect } from 'react';

export default function InfoPanel() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Bottom left info */}
      <div className="fixed bottom-6 left-6 z-40 space-y-4">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 glow-box max-w-xs">
          <div className="text-xs text-white/50 mb-2 font-mono">SYSTEM_STATUS</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">OBJECTS</span>
              <span className="text-xs text-white font-bold">8 PLANETS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">RENDERER</span>
              <span className="text-xs text-green-400 font-bold">◉ ACTIVE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">MODE</span>
              <span className="text-xs text-blue-400 font-bold">3D_RENDER</span>
            </div>
          </div>
        </div>

        {isVisible && (
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-white/20 glow-box max-w-xs animate-pulse">
            <div className="text-xs text-white/90 font-mono">
              <span className="text-green-400 mr-2">►</span>
              CLICK + DRAG to explore orbit
            </div>
            <div className="text-xs text-white/90 font-mono mt-2">
              <span className="text-blue-400 mr-2">►</span>
              SCROLL to zoom in/out
            </div>
            <div className="text-xs text-white/90 font-mono mt-2">
              <span className="text-purple-400 mr-2">►</span>
              HOVER planets for info
            </div>
          </div>
        )}
      </div>

      {/* Bottom right coordinates */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 glow-box">
          <div className="text-xs text-white/50 mb-2 font-mono">COORDINATES</div>
          <div className="text-xs text-white/70 font-mono space-y-1">
            <div>X: +0.000 AU</div>
            <div>Y: +0.000 AU</div>
            <div>Z: +0.000 AU</div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="text-xs text-white/50 mb-1">TIME_SCALE</div>
            <div className="text-xs text-white/90 font-bold">1.0x REAL_TIME</div>
          </div>
        </div>
      </div>

      {/* Top right mission brief */}
      <div className="fixed top-24 right-6 z-40 max-w-sm">
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 border border-white/20 glow-box">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-white/50 font-mono">MISSION_BRIEF</div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-xl font-bold text-white glow-text mb-2">
            EXPLORE THE COSMOS
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Navigate through an interactive 3D representation of our solar system.
            Each celestial body holds unique characteristics waiting to be discovered.
          </p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/50 mb-2">CURRENT_MISSION</div>
            <div className="text-xs text-white/90">
              ◉ Survey all planetary bodies
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
