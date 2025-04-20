'use client';

import { useEffect, useRef } from 'react';
import { drawContributions } from 'github-contributions-canvas';
import { mockData } from './mockdata/mockData';
// Mock data that matches the exact format required by github-contributions-canvas

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawContributions(canvasRef.current, {
        data: mockData,
        username: 'your-username',
        themeName: 'standard',
        footerText: 'Made with github-contributions-canvas'
      });
    }
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">GitHub Contributions Graph</h1>
      <canvas 
        ref={canvasRef} 
        className="w-full"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </main>
  );
}
