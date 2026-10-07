'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Flame, Eye, Sparkles, RefreshCw, Info, ShieldCheck } from 'lucide-react';

export default function DumHandiSimulation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isAudioPlayingRef = useRef(false);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [viewMode, setViewMode] = useState<'sealed' | 'xray'>('sealed');
  const [heatLevel, setHeatLevel] = useState<'low' | 'medium' | 'high'>('low');
  const [autoPhase, setAutoPhase] = useState<string>('Sealing Handi with Atta Dough...');
  const [autoProgress, setAutoProgress] = useState(0);

  // 5-Second Automated Initial Sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const interval = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAutoPhase('Dum Maturation Achieved • 100% Halal Dum');
          return 100;
        }
        const next = prev + 2;
        if (next < 25) {
          setAutoPhase('1. Sealing heavy copper Handi with dough (Atta)...');
        } else if (next < 50) {
          setAutoPhase('2. Placing glowing charcoal embers on brass lid...');
        } else if (next < 80) {
          setAutoPhase('3. Aromatic steam circulating through Seeraga Samba grains...');
        } else {
          setAutoPhase('4. Meat juices & saffron ghee marrying in sealed dum...');
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Web Audio API Procedural Dum Simmer Sound Synthesis
  const initAudio = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Simmer Hiss / Steam (Filtered White Noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const steamFilter = ctx.createBiquadFilter();
      steamFilter.type = 'bandpass';
      steamFilter.frequency.setValueAtTime(1400, ctx.currentTime);
      steamFilter.Q.setValueAtTime(3.0, ctx.currentTime);

      const steamGain = ctx.createGain();
      steamGain.gain.setValueAtTime(0.12, ctx.currentTime);

      whiteNoise.connect(steamFilter);
      steamFilter.connect(steamGain);
      steamGain.connect(masterGain);
      whiteNoise.start();

      // 2. Gravy Bubble Generator (Random low frequency pop pulses)
      const createBubble = () => {
        if (!isAudioPlayingRef.current || !audioCtxRef.current) return;
        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const bGain = audioCtxRef.current.createGain();

        const baseFreq = 180 + Math.random() * 220;
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.08);

        bGain.gain.setValueAtTime(0.08 + Math.random() * 0.07, now);
        bGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

        osc.connect(bGain);
        bGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.1);

        const nextBubble = 120 + Math.random() * 280;
        setTimeout(createBubble, nextBubble);
      };

      setTimeout(createBubble, 200);
    } catch (e) {
      console.error('Web Audio API not supported or blocked:', e);
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      if (isPlayingAudio) {
        gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.2);
        setIsPlayingAudio(false);
        isAudioPlayingRef.current = false;
      } else {
        gainNodeRef.current.gain.setTargetAtTime(0.28, audioCtxRef.current.currentTime, 0.2);
        setIsPlayingAudio(true);
        isAudioPlayingRef.current = true;
      }
    }
  };

  // Canvas Particle Physics: Rising Steam, Charcoal Embers, Gravy Bubbles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
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
      type: 'steam' | 'ember' | 'bubble' | 'saffron';
    }

    const particles: Particle[] = [];
    const maxParticles = 60;

    const spawnParticle = (type?: 'steam' | 'ember' | 'bubble' | 'saffron'): Particle => {
      const pType = type || (Math.random() > 0.4 ? 'steam' : Math.random() > 0.5 ? 'ember' : 'saffron');
      const centerX = width * 0.5;
      const handiBaseY = height * 0.72;
      const lidY = height * 0.38;

      if (pType === 'steam') {
        return {
          x: centerX + (Math.random() - 0.5) * (width * 0.35),
          y: lidY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -1.2 - Math.random() * 1.5,
          radius: 12 + Math.random() * 25,
          alpha: 0,
          maxAlpha: 0.18 + Math.random() * 0.12,
          life: 0,
          maxLife: 90 + Math.random() * 60,
          type: 'steam',
        };
      } else if (pType === 'ember') {
        return {
          x: centerX + (Math.random() - 0.5) * (width * 0.3),
          y: lidY - 10 + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -0.6 - Math.random() * 1.2,
          radius: 1.5 + Math.random() * 2.5,
          alpha: 1,
          maxAlpha: 1,
          life: 0,
          maxLife: 40 + Math.random() * 40,
          type: 'ember',
        };
      } else if (pType === 'bubble') {
        return {
          x: centerX + (Math.random() - 0.5) * (width * 0.3),
          y: handiBaseY - 30 + Math.random() * 30,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -0.4 - Math.random() * 0.4,
          radius: 3 + Math.random() * 6,
          alpha: 0.8,
          maxAlpha: 0.9,
          life: 0,
          maxLife: 30 + Math.random() * 20,
          type: 'bubble',
        };
      } else {
        // Saffron spice sparkle
        return {
          x: centerX + (Math.random() - 0.5) * (width * 0.32),
          y: height * 0.5 + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -0.3 - Math.random() * 0.5,
          radius: 2 + Math.random() * 2,
          alpha: 0,
          maxAlpha: 0.7,
          life: 0,
          maxLife: 50 + Math.random() * 30,
          type: 'saffron',
        };
      }
    };

    for (let i = 0; i < maxParticles; i++) {
      particles.push(spawnParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.04) * 0.3;
        p.y += p.vy;

        if (p.type === 'steam') {
          p.radius += 0.25;
          const half = p.maxLife / 2;
          p.alpha = p.life < half ? (p.life / half) * p.maxAlpha : ((p.maxLife - p.life) / half) * p.maxAlpha;

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          grad.addColorStop(0, `rgba(255, 245, 230, ${p.alpha})`);
          grad.addColorStop(0.6, `rgba(255, 230, 200, ${p.alpha * 0.4})`);
          grad.addColorStop(1, 'rgba(255, 245, 230, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ember') {
          p.alpha = (p.maxLife - p.life) / p.maxLife;
          ctx.fillStyle = `rgba(255, ${Math.floor(120 + Math.random() * 100)}, 40, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'bubble') {
          p.alpha = (p.maxLife - p.life) / p.maxLife;
          ctx.strokeStyle = `rgba(214, 181, 106, ${p.alpha * 0.8})`;
          ctx.fillStyle = `rgba(169, 83, 50, ${p.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (p.type === 'saffron') {
          const half = p.maxLife / 2;
          p.alpha = p.life < half ? (p.life / half) * p.maxAlpha : ((p.maxLife - p.life) / half) * p.maxAlpha;
          ctx.fillStyle = `rgba(201, 154, 58, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.life >= p.maxLife) {
          particles[idx] = spawnParticle();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [viewMode, heatLevel]);

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-deep text-cream overflow-hidden border-t border-cream/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-charcoal-near border border-gold-soft/30 text-gold-soft text-xs font-mono mb-4">
            <Flame className="w-3.5 h-3.5 text-gold-soft animate-pulse" />
            <span className="uppercase tracking-widest">Interactive Dum Simulation</span>
            <span className="text-cream/30">•</span>
            <span>Web Audio Synthesized</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-cream mb-4">
            THE ANATOMY OF <span className="italic text-gold-soft font-normal">DUM COOKING</span>
          </h2>

          <p className="font-body text-base text-cream/75 font-light leading-relaxed">
            Witness how aromatic Seeraga Samba rice, marinated meat, country ghee, and golden shallots cook inside the dough-sealed copper handi under convective charcoal heat.
          </p>
        </div>

        {/* 5-Second Automated Live Telemetry Bar */}
        <div className="mb-8 p-4 rounded-sm bg-charcoal-warm/70 border border-cream/15 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-gold-soft">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold uppercase tracking-wider">{autoPhase}</span>
            </div>
            <span className="font-mono text-xs text-cream/60">
              Dum Pressure: {autoProgress}%
            </span>
          </div>

          <div className="w-full bg-charcoal-deep h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-brass via-terracotta to-emerald-500 transition-all duration-300"
              style={{ width: `${autoProgress}%` }}
            />
          </div>
        </div>

        {/* The Interactive Simulation Stage */}
        <div className="relative rounded-sm bg-charcoal-near border border-cream/15 overflow-hidden shadow-2xl p-6 sm:p-10 min-h-[560px] flex flex-col justify-between">
          {/* Controls Ribbon (Top Bar) */}
          <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-cream/10">
            {/* View Switcher: Sealed Handi vs X-Ray Layer View */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('sealed')}
                className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                  viewMode === 'sealed'
                    ? 'bg-gold-soft text-charcoal-near font-semibold shadow-md'
                    : 'bg-cream/5 text-cream/70 hover:text-cream border border-cream/10'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sealed Copper Handi</span>
              </button>

              <button
                onClick={() => setViewMode('xray')}
                className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                  viewMode === 'xray'
                    ? 'bg-gold-soft text-charcoal-near font-semibold shadow-md'
                    : 'bg-cream/5 text-cream/70 hover:text-cream border border-cream/10'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Internal Dum Layers (X-Ray)</span>
              </button>
            </div>

            {/* Audio Synthesis Toggle & Sound State */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleSound}
                className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2 border ${
                  isPlayingAudio
                    ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-lg shadow-emerald-500/10'
                    : 'bg-cream/10 border-cream/20 text-cream/80 hover:text-gold-soft'
                }`}
                aria-label={isPlayingAudio ? 'Mute Simmer Sound' : 'Play Simmer Sound'}
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse text-emerald-400" />
                    <span>Simmer Audio: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-cream/50" />
                    <span>Enable Dum Sound</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Visual Graphic Area with Canvas Steam Overlay */}
          <div className="relative flex-1 flex items-center justify-center my-6 min-h-[380px]">
            {/* Particle Canvas for Steam, Charcoal Embers, and Gravy Micro-bubbles */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
            />

            {/* Visual Mode 1: Authentic Sealed Copper Deg with Charcoal Embers & Atta Dough Seal */}
            {viewMode === 'sealed' ? (
              <div className="relative flex flex-col items-center justify-center animate-fadeIn select-none">
                {/* 1. Top Heat Charcoal Embers on Brass Lid */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Glowing Charcoal Pieces */}
                  <div className="flex items-center justify-center space-x-1 mb-[-8px] z-10">
                    <div className="w-6 h-4 rounded-sm bg-gradient-to-t from-red-600 via-amber-500 to-yellow-300 animate-pulseGlow shadow-lg shadow-orange-500/50" />
                    <div className="w-8 h-5 rounded-sm bg-gradient-to-t from-red-700 via-amber-600 to-orange-400 shadow-lg shadow-red-500/50" />
                    <div className="w-7 h-4 rounded-sm bg-gradient-to-t from-red-600 via-yellow-500 to-amber-300 animate-pulseGlow shadow-lg shadow-amber-500/50" />
                    <div className="w-6 h-4 rounded-sm bg-gradient-to-t from-red-700 via-amber-500 to-yellow-400 shadow-md" />
                  </div>

                  {/* Brass Lid */}
                  <div className="w-64 sm:w-80 h-10 bg-gradient-to-r from-gold-brass via-gold-soft to-gold-turmeric rounded-t-full border-t border-gold-soft shadow-xl relative flex items-center justify-center">
                    <div className="w-8 h-3 bg-gold-brass rounded-t-sm border border-gold-soft/60" />
                    <span className="absolute font-mono text-[9px] tracking-widest text-charcoal-near font-bold uppercase opacity-75">
                      BRASS DUM LID • CHARCOAL TOP HEAT
                    </span>
                  </div>

                  {/* Dough (Atta) Hermetic Seal */}
                  <div className="w-68 sm:w-84 h-5 bg-gradient-to-r from-[#D8C7A5] via-[#EADBBE] to-[#C9B793] rounded-sm shadow-md border-y border-[#B8A37A] flex items-center justify-center">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-charcoal-near/80 uppercase font-semibold">
                      ATTA DOUGH SEAL (LOCKS MOISTURE &amp; AROMA)
                    </span>
                  </div>
                </div>

                {/* 2. Copper Handi Body */}
                <div className="w-72 sm:w-96 h-48 sm:h-56 bg-gradient-to-b from-terracotta-burnt via-gold-copper to-charcoal-deep rounded-b-[60px] sm:rounded-b-[80px] border-x-2 border-b-2 border-terracotta/80 shadow-2xl relative overflow-hidden flex flex-col justify-end p-6">
                  {/* Hammered Copper Metallic Texture Lines */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream/5 to-transparent opacity-60 pointer-events-none" />

                  {/* Centered Brand Stamp on Copper Vessel */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-40">
                    <span className="font-display text-2xl tracking-[0.25em] text-gold-soft block uppercase">
                      SAMBALEAF
                    </span>
                    <span className="font-mono text-[8px] tracking-widest text-cream uppercase">
                      KARUR • DINDIGUL DUM
                    </span>
                  </div>

                  {/* Gentle Bottom Heat Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-600/30 via-orange-500/10 to-transparent" />
                </div>

                {/* 3. Base Slow Flame */}
                <div className="flex items-center justify-center space-x-3 mt-2">
                  <div className="w-4 h-6 rounded-full bg-gradient-to-t from-blue-500 via-amber-400 to-transparent animate-pulse filter blur-[1px]" />
                  <div className="w-6 h-8 rounded-full bg-gradient-to-t from-blue-600 via-orange-400 to-amber-300 animate-float filter blur-[1px]" />
                  <div className="w-5 h-7 rounded-full bg-gradient-to-t from-blue-500 via-yellow-400 to-transparent animate-pulse filter blur-[1px]" />
                  <span className="font-mono text-[10px] tracking-widest text-gold-soft/80 uppercase ml-2">
                    LOW WOODFIRE HEAT
                  </span>
                </div>
              </div>
            ) : (
              /* Visual Mode 2: Layered Internal X-Ray View */
              <div className="w-full max-w-xl bg-charcoal-warm/90 border border-gold-soft/40 rounded-sm p-6 space-y-4 shadow-2xl animate-fadeIn text-xs font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-cream/10">
                  <span className="text-gold-soft font-semibold uppercase tracking-wider">
                    INTERNAL DUM MATRIX (CROSS-SECTION)
                  </span>
                  <span className="text-cream/50 text-[10px]">100% HERMETIC SEAL</span>
                </div>

                {/* Layer 1: Ghee, Saffron, Fried Shallots (Birista) */}
                <div className="p-3.5 rounded-sm bg-gold-turmeric/15 border border-gold-turmeric/40 flex items-start justify-between">
                  <div>
                    <span className="text-gold-soft font-bold block mb-1">
                      TOP LAYER: Saffron Milk, Pure Ghee &amp; Birista Shallots
                    </span>
                    <p className="text-cream/80 font-body text-[11px] font-light">
                      Infuses delicate aroma and rich golden sheen downward into the steamed grains.
                    </p>
                  </div>
                  <span className="text-gold-soft text-[10px] bg-gold-turmeric/20 px-2 py-0.5 rounded-sm">
                    AROMA INFUSION
                  </span>
                </div>

                {/* Layer 2: Seeraga Samba Rice */}
                <div className="p-3.5 rounded-sm bg-cream/10 border border-cream/20 flex items-start justify-between">
                  <div>
                    <span className="text-cream font-bold block mb-1">
                      MIDDLE LAYER: Tender Seeraga Samba Rice Grains
                    </span>
                    <p className="text-cream/80 font-body text-[11px] font-light">
                      Small-grain rice steamed in convective heat, absorbing meat jus without breaking or clumping.
                    </p>
                  </div>
                  <span className="text-cream/80 text-[10px] bg-cream/10 px-2 py-0.5 rounded-sm">
                    STEAM EXPANSION
                  </span>
                </div>

                {/* Layer 3: 100% Halal Meat & Dindigul Masala Gravy */}
                <div className="p-3.5 rounded-sm bg-terracotta/20 border border-terracotta/50 flex items-start justify-between">
                  <div>
                    <span className="text-terracotta-warm font-bold block mb-1">
                      BOTTOM LAYER: 100% Halal Meat in Simmering Masala Broth
                    </span>
                    <p className="text-cream/80 font-body text-[11px] font-light">
                      Gentle bubbling at bottom creates pressurized steam that cycles upward through the grains.
                    </p>
                  </div>
                  <span className="text-terracotta-warm text-[10px] bg-terracotta/20 px-2 py-0.5 rounded-sm">
                    BUBBLING GRAVY
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footnote Specs */}
          <div className="relative z-30 pt-4 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cream/60 gap-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold-soft" />
              <span>Authentic Dum Technique • Woodfire Embers &amp; Atta Seal</span>
            </div>
            <div className="flex items-center space-x-3 text-gold-soft text-[11px]">
              <span>KARUR CLOUD KITCHEN</span>
              <span>•</span>
              <span>100% HALAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
