'use client';

import React, { useEffect, useRef } from 'react';

interface SteamEffectProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'rich';
  tint?: string;
}

export default function SteamEffect({
  className = '',
  intensity = 'subtle',
  tint = 'rgba(255, 245, 230, ',
}: SteamEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = intensity === 'rich' ? 24 : intensity === 'medium' ? 16 : 10;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      maxAlpha: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];

    const createParticle = (): Particle => {
      const maxLife = 180 + Math.random() * 120;
      return {
        x: width * 0.35 + Math.random() * (width * 0.3),
        y: height * 0.75 + Math.random() * (height * 0.2),
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.4 - Math.random() * 0.6,
        radius: 20 + Math.random() * 30,
        alpha: 0,
        maxAlpha: 0.04 + Math.random() * 0.06,
        life: 0,
        maxLife,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife; // stagger initial state
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.02) * 0.2;
        p.y += p.vy;
        p.radius += 0.15;

        // Fade in and out
        const halfLife = p.maxLife / 2;
        if (p.life < halfLife) {
          p.alpha = (p.life / halfLife) * p.maxAlpha;
        } else {
          p.alpha = ((p.maxLife - p.life) / halfLife) * p.maxAlpha;
        }

        if (p.life >= p.maxLife || p.y < 0) {
          particles[index] = createParticle();
          return;
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        gradient.addColorStop(0, `${tint}${p.alpha})`);
        gradient.addColorStop(0.5, `${tint}${p.alpha * 0.5})`);
        gradient.addColorStop(1, `${tint}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, tint]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
