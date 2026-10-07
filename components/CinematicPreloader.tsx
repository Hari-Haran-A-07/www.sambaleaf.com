'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

export default function CinematicPreloader({ onComplete }: { onComplete?: () => void }) {
  const [elapsed, setElapsed] = useState(0); // 0 to 5000 ms
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Audio Synthesizer for 5-Second Cinematic Soundscape
  const initAudio = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Warm Ambient Drone
      const droneOsc = ctx.createOscillator();
      droneOsc.type = 'sine';
      droneOsc.frequency.setValueAtTime(108, ctx.currentTime); // Low harmonic
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.12, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();

      // 2. Filtered Steam Simmer (Pink/White noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      const steamGain = ctx.createGain();
      steamGain.gain.setValueAtTime(0.15, ctx.currentTime);
      noise.connect(filter);
      filter.connect(steamGain);
      steamGain.connect(masterGain);
      noise.start();

      // Fade in master
      masterGain.gain.setTargetAtTime(0.3, ctx.currentTime, 0.4);
      setSoundEnabled(true);
    } catch {
      // Audio autoplay policy handled
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    } else if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
      setSoundEnabled(true);
    } else if (gainNodeRef.current && audioCtxRef.current) {
      if (soundEnabled) {
        gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.1);
        setSoundEnabled(false);
      } else {
        gainNodeRef.current.gain.setTargetAtTime(0.3, audioCtxRef.current.currentTime, 0.1);
        setSoundEnabled(true);
      }
    }
  };

  // 5.0 Second High-Precision Animation Loop
  useEffect(() => {
    const TOTAL_DURATION = 5000; // 5 seconds exact

    const updateTimeline = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const currentElapsed = timestamp - startTimeRef.current;

      if (currentElapsed >= TOTAL_DURATION) {
        setElapsed(TOTAL_DURATION);
        setIsFadingOut(true);

        // Resolve audio gracefully
        if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.4);
        }

        setTimeout(() => {
          setIsCompleted(true);
          if (onComplete) onComplete();
        }, 550);
        return;
      }

      setElapsed(currentElapsed);
      requestRef.current = requestAnimationFrame(updateTimeline);
    };

    requestRef.current = requestAnimationFrame(updateTimeline);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, [onComplete]);

  // Canvas Steam & Falling Grains Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

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
      type: 'steam' | 'grain';
    }

    const particles: Particle[] = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      const isGrain = Math.random() > 0.65;
      particles.push({
        x: width * 0.45 + (Math.random() - 0.5) * (width * 0.35),
        y: isGrain ? height * 0.25 + Math.random() * (height * 0.4) : height * 0.5 + Math.random() * (height * 0.3),
        vx: (Math.random() - 0.5) * (isGrain ? 0.4 : 0.8),
        vy: isGrain ? 1.8 + Math.random() * 2.2 : -1.2 - Math.random() * 1.6,
        radius: isGrain ? 1.5 + Math.random() * 1.5 : 15 + Math.random() * 30,
        alpha: 0,
        maxAlpha: isGrain ? 0.8 : 0.2,
        life: Math.random() * 80,
        maxLife: isGrain ? 60 + Math.random() * 40 : 100 + Math.random() * 60,
        type: isGrain ? 'grain' : 'steam',
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.05) * 0.4;
        p.y += p.vy;

        const half = p.maxLife / 2;
        p.alpha = p.life < half ? (p.life / half) * p.maxAlpha : ((p.maxLife - p.life) / half) * p.maxAlpha;

        if (p.type === 'steam') {
          p.radius += 0.35;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          grad.addColorStop(0, `rgba(255, 245, 230, ${p.alpha * 0.7})`);
          grad.addColorStop(0.5, `rgba(255, 230, 200, ${p.alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(255, 245, 230, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Falling golden Seeraga Samba rice grain
          ctx.fillStyle = `rgba(235, 200, 130, ${p.alpha})`;
          ctx.beginPath();
          ctx.ellipse(p.x, p.y, p.radius * 1.6, p.radius * 0.8, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.life >= p.maxLife || p.y < 0 || p.y > height) {
          p.life = 0;
          p.x = width * 0.45 + (Math.random() - 0.5) * (width * 0.35);
          p.y = p.type === 'grain' ? height * 0.22 : height * 0.65;
          p.radius = p.type === 'grain' ? 1.5 + Math.random() * 1.5 : 15 + Math.random() * 20;
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 300);
  };

  if (isCompleted) return null;

  // Timeline Progress Calculations
  const progressPercent = Math.min(100, Math.round((elapsed / 5000) * 100));
  const seconds = Math.min(5, Math.floor(elapsed / 1000) + 1);

  // Phase Determination
  const isPhase1 = elapsed < 1000; // 0.0 - 1.0s: Warm center glow, title tease
  const isPhase2 = elapsed >= 1000 && elapsed < 2000; // 1.0 - 2.0s: Banana leaf & biryani mound reveal
  const isPhase3 = elapsed >= 2000 && elapsed < 3000; // 2.0 - 3.0s: The Signature Serve moment
  const isPhase4 = elapsed >= 3000 && elapsed < 4000; // 3.0 - 4.0s: Macro rack focus & 100% Halal
  const isPhase5 = elapsed >= 4000; // 4.0 - 5.0s: Pullback & full brand reveal

  return (
    <div
      className={`fixed inset-0 z-[100] w-screen h-screen bg-charcoal-near overflow-hidden flex flex-col justify-between select-none transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 blur-sm pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Background Food Cinematic Layers */}
      <div className="absolute inset-0 z-0">
        {/* Desktop 16:9 Cinematic Ladle Serving View */}
        <div
          className={`hidden md:block absolute inset-0 transition-all duration-1000 ease-out ${
            isPhase1
              ? 'opacity-25 scale-100 brightness-[0.25]'
              : isPhase2
              ? 'opacity-85 scale-105 brightness-[0.75]'
              : isPhase3
              ? 'opacity-100 scale-108 brightness-[0.95]'
              : isPhase4
              ? 'opacity-95 scale-112 brightness-[1.0] filter contrast-[1.1]'
              : 'opacity-100 scale-100 brightness-[0.85]'
          }`}
        >
          <Image
            src="/images/biryani-ladle-serve.jpg"
            alt="SAMBALEAF Authentic Dindigul Biryani Ladle Serve"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Mobile 9:16 Vertical Composition View */}
        <div
          className={`md:hidden absolute inset-0 transition-all duration-1000 ease-out ${
            isPhase1
              ? 'opacity-25 scale-100 brightness-[0.25]'
              : isPhase2
              ? 'opacity-85 scale-105 brightness-[0.75]'
              : isPhase3
              ? 'opacity-100 scale-108 brightness-[0.95]'
              : isPhase4
              ? 'opacity-95 scale-112 brightness-[1.0] filter contrast-[1.1]'
              : 'opacity-100 scale-100 brightness-[0.85]'
          }`}
        >
          <Image
            src="/images/biryani-ladle-serve-mobile.jpg"
            alt="SAMBALEAF Authentic Dindigul Biryani Ladle Serve Mobile"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Vignettes & Volumetric Spotlight Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near via-transparent to-charcoal-near/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-near/90 via-transparent to-charcoal-near/90" />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 bg-radial-vignette ${
            isPhase1 ? 'opacity-95' : 'opacity-60'
          }`}
        />
      </div>

      {/* Physics Particle Canvas: Rising Steam & Falling Golden Rice Grains */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Top Header Bar: Culinary Sound & Skip Controls */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between text-cream">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-gold-soft animate-ping" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-gold-soft uppercase">
            {isPhase1 && '01 / FLAME IGNITION'}
            {isPhase2 && '02 / SEERAGA SAMBA STEAM'}
            {isPhase3 && '03 / THE SIGNATURE SERVE'}
            {isPhase4 && '04 / 100% HALAL PURITY'}
            {isPhase5 && '05 / READY TO TASTE'}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border text-xs font-mono transition-colors flex items-center space-x-1.5 ${
              soundEnabled
                ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                : 'bg-cream/10 border-cream/20 text-cream/70 hover:text-gold-soft'
            }`}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[10px] tracking-wider uppercase">
              {soundEnabled ? 'SOUND ON' : 'ENABLE SOUND'}
            </span>
          </button>

          {/* Quick Skip Button */}
          <button
            onClick={handleSkip}
            className="px-3.5 py-1.5 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 text-cream/80 hover:text-gold-soft text-[10px] font-mono tracking-[0.18em] uppercase transition-all flex items-center space-x-1"
          >
            <span>ENTER</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Center Cinematic Typography Orchestration */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center my-auto">
        {/* Phase 1 (0-1s): Subtle Warm Bloom & Location Tease */}
        {isPhase1 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="font-mono text-xs tracking-[0.3em] text-gold-soft uppercase block">
              KARUR • TAMIL NADU
            </span>
            <h1 className="font-display text-4xl sm:text-6xl text-cream font-light tracking-[0.2em] uppercase">
              SAMBALEAF
            </h1>
            <p className="font-tamil text-sm text-cream/60 font-light">
              பாரம்பரிய திண்டுக்கல் சீரக சம்பா பிரியாணி
            </p>
          </div>
        )}

        {/* Phase 2 (1-2s): Steaming Banana Leaf & Grain Identity */}
        {isPhase2 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block">
              AUTHENTIC DINDIGUL DUM
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-cream font-medium tracking-wide">
              Slow Cooked. Deeply Tamil.
            </h2>
            <p className="font-body text-xs sm:text-sm text-cream/80 font-light max-w-md mx-auto">
              Aged small-grain Seeraga Samba rice absorbing rich spiced meat juices on fresh banana leaf.
            </p>
          </div>
        )}

        {/* Phase 3 (2-3s): The Signature Serve Moment */}
        {isPhase3 && (
          <div className="space-y-2 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-charcoal-deep/80 border border-gold-soft/40 backdrop-blur-md text-gold-soft text-[11px] font-mono tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SIGNATURE SERVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-cream font-normal">
              Hot from the Handi to Your Table
            </h2>
          </div>
        )}

        {/* Phase 4 (3-4s): 100% Halal Purity Reveal */}
        {isPhase4 && (
          <div className="space-y-3 animate-fadeIn">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-charcoal-deep/90 border border-gold-soft flex flex-col items-center justify-center p-2 shadow-2xl shadow-gold-soft/20 mb-3">
              <ShieldCheck className="w-6 h-6 text-gold-soft mb-0.5" />
              <span className="font-display text-[11px] tracking-widest text-gold-soft font-bold">100%</span>
              <span className="font-mono text-[8px] tracking-widest text-cream uppercase">HALAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-cream font-medium tracking-wide">
              Pure Ingredients. Uncompromised Integrity.
            </h2>
          </div>
        )}

        {/* Phase 5 (4-5s): Full Climax & Homepage Entry Reveal */}
        {isPhase5 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block">
              MADE FOR KARUR
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-cream font-medium tracking-[0.1em] uppercase">
              SAMBALEAF
            </h1>
            <p className="font-display text-xl sm:text-2xl text-gold-soft italic font-normal">
              Dindigul-Style Seeraga Samba Biryani
            </p>
            <span className="font-mono text-[10px] tracking-[0.3em] text-cream/70 uppercase block pt-2">
              SERVING TRADITION.
            </span>
          </div>
        )}
      </div>

      {/* Bottom Progress Bar: "PREPARING YOUR BRIYANI... [───] 01/05" */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 pb-8">
        <div className="flex items-center justify-between text-[11px] font-mono text-cream/75 mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-gold-soft">PREPARING YOUR BRIYANI...</span>
          </div>
          <span className="text-gold-soft font-bold">
            0{seconds} / 05 &bull; {progressPercent}%
          </span>
        </div>

        <div className="w-full bg-charcoal-deep/90 h-1.5 rounded-full overflow-hidden border border-cream/10 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric rounded-full transition-all duration-100 shadow-lg shadow-gold-brass/50"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
