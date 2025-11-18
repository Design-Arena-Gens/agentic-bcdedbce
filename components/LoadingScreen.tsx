'use client';

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-b-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="text-white/90 text-xl font-bold tracking-wider glow-text mb-2">
          INITIALIZING SYSTEM
        </div>
        <div className="text-white/50 text-sm font-mono">
          Loading celestial bodies...
        </div>
        <div className="flex justify-center gap-1 mt-4">
          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
