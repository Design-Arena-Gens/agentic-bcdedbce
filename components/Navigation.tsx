'use client';

import { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'SOLAR.SYS', icon: '◉' },
    { id: 'about', label: 'ABOUT', icon: '◎' },
    { id: 'projects', label: 'PROJECTS', icon: '◈' },
    { id: 'contact', label: 'CONTACT', icon: '◇' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold glow-text tracking-wider">
          STELLAR_PORTFOLIO
        </div>

        <div className="flex gap-1 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 glow-box">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white text-black glow-text'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all glow-box">
            <span className="text-lg">↺</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all glow-box">
            <span className="text-lg">⊕</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
