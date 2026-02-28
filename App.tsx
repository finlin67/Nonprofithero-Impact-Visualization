'use client';

import React from 'react';
import NGOTile from './components/NGOTile';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#f0f0f0] font-sans p-4">
       {/* Background for context */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FAF9F6]"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.4]" style={{
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
             backgroundSize: '40px 40px'
          }}></div>
       </div>

       {/* Main Centered Content */}
       <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-[#1a1a1a] tracking-tight">Dashboard Redesign</h1>
            <p className="text-gray-500 font-medium">Vertical Stack • 1:1 Aspect Ratio • High Fidelity</p>
          </div>
          
          {/* Expanded Container for 600x600 */}
          <div className="flex items-center justify-center w-full">
             <div className="w-full max-w-[600px] aspect-square shadow-2xl rounded-[32px]">
                <NGOTile />
             </div>
          </div>
       </div>
    </div>
  );
}