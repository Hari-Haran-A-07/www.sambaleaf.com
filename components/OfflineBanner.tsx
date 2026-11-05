'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff, PhoneCall } from 'lucide-react';

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-600 text-charcoal-pure px-4 py-2 text-xs font-semibold flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <WifiOff className="w-4 h-4 shrink-0" />
        <span>You are currently offline. Cached menu is visible.</span>
      </div>
      <a
        href="tel:+919442188320"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-pure text-cream text-[11px] font-bold"
      >
        <PhoneCall className="w-3 h-3 text-gold" />
        <span>Call Kitchen (+91 94421 88320)</span>
      </a>
    </div>
  );
}
