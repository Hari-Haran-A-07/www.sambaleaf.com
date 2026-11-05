'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';

export default function StoreStatusBadge() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string; subtext: string }>({
    isOpen: true,
    text: 'DUM BATCH ACTIVE',
    subtext: 'Woodfire embers hot'
  });

  useEffect(() => {
    const checkTime = () => {
      // Calculate current IST hours (UTC + 5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentDecimal = hours + minutes / 60;

      if (currentDecimal >= 11.5 && currentDecimal <= 15.5) {
        setStatus({
          isOpen: true,
          text: 'LUNCH DUM ACTIVE',
          subtext: 'Fresh handis unsealed'
        });
      } else if (currentDecimal >= 18.5 && currentDecimal <= 22.5) {
        setStatus({
          isOpen: true,
          text: 'EVENING DUM ACTIVE',
          subtext: 'Hot dispatch across Karur'
        });
      } else {
        setStatus({
          isOpen: false,
          text: 'PRE-ORDERS ACCEPTED',
          subtext: 'Next batch: 11:30 AM'
        });
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono transition-all ${
        status.isOpen
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 shadow-sm'
          : 'bg-gold/10 border-gold/30 text-gold shadow-sm'
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? 'bg-emerald-400' : 'bg-gold'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-500' : 'bg-gold'
          }`}
        />
      </span>
      <span className="font-bold tracking-wider">{status.text}</span>
      <span className="hidden md:inline text-cream/40">• {status.subtext}</span>
    </div>
  );
}
