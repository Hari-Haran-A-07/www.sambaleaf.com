'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

export default function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.connect(ctx.destination);
    audioCtxRef.current = ctx;
    gainNodeRef.current = gainNode;
  };

  const playChime = () => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Gentle harmonic chime (warm veena/bowl resonance simulation)
    const freqs = [261.63, 329.63, 392.00, 523.25]; // C major gentle warm triad
    const chosenFreq = freqs[Math.floor(Math.random() * freqs.length)];

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(chosenFreq, ctx.currentTime);

    noteGain.gain.setValueAtTime(0.01, ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

    osc.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc.start();
    osc.stop(ctx.currentTime + 2.6);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      initAudio();
      setIsPlaying(true);
      playChime();
      intervalRef.current = setInterval(() => {
        playChime();
      }, 4500);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      // Keep context open or suspend
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex items-center gap-2 bg-charcoal-deep/90 backdrop-blur-md border border-gold/30 rounded-full px-4 py-2.5 shadow-2xl transition-all hover:border-gold">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 text-cream hover:text-gold text-xs font-semibold"
          aria-label={isPlaying ? 'Mute Culinary Soundscape' : 'Enable Culinary Soundscape'}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-gold animate-pulse" />
              <span className="hidden sm:inline text-gold">Dining Ambience: ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-cream/50" />
              <span className="hidden sm:inline text-cream/60">Culinary Ambience</span>
            </>
          )}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-cream/20">
            <input
              type="range"
              min="0.05"
              max="0.8"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-16 accent-gold h-1 bg-charcoal-near rounded cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
}
