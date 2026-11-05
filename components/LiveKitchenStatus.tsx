'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Clock, CheckCircle2, RotateCw, Sparkles, ChefHat } from 'lucide-react';

interface BatchInfo {
  batchNumber: number;
  batchName: string;
  status: 'slow_dum' | 'resting' | 'serving' | 'preparing_next';
  sealedTime: string;
  liftTime: string;
  portionsLeft: number;
  totalPortions: number;
  woodType: string;
  ustadNote: string;
}

export default function LiveKitchenStatus() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState('Just now');
  const [batch] = useState<BatchInfo>({
    batchNumber: 2,
    batchName: 'Prime Afternoon Handi',
    status: 'serving',
    sealedTime: '11:45 AM',
    liftTime: '12:35 PM',
    portionsLeft: 18,
    totalPortions: 60,
    woodType: 'Tamarind & Mango Wood Charcoal',
    ustadNote: 'Ghee aroma is rich and mutton juices have completely saturated the samba grain.'
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastChecked('Updated a few seconds ago');
    }, 600);
  };

  return (
    <div className="bg-gradient-to-r from-charcoal-deep via-charcoal-near to-charcoal-deep border border-gold/30 rounded-2xl p-6 sm:p-8 my-8 shadow-2xl relative overflow-hidden">
      {/* Decorative Warm Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-cream/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
              Live Hearth & Dum Monitor
            </span>
            <span className="text-xs text-cream/40">• {lastChecked}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-cream font-bold">
            Kitchen Batch #{batch.batchNumber}: {batch.batchName}
          </h3>
        </div>

        <button
          onClick={handleRefresh}
          className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-pure border border-cream/20 text-cream/80 hover:text-gold text-xs font-medium transition"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-gold' : ''}`} />
          <span>Refresh Live Status</span>
        </button>
      </div>

      {/* Grid of Status Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Status Card */}
        <div className="bg-charcoal-pure/60 border border-cream/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-cream/60 text-xs mb-1">
            <span>Handi State</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-lg font-bold text-cream">Freshly Lifted</div>
          <div className="text-xs text-emerald-400/90 mt-1">Lid unsealed at {batch.liftTime}</div>
        </div>

        {/* Portions Remaining */}
        <div className="bg-charcoal-pure/60 border border-cream/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-cream/60 text-xs mb-1">
            <span>Current Batch Yield</span>
            <Flame className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-lg font-bold text-gold">
            {batch.portionsLeft} of {batch.totalPortions} Portions
          </div>
          <div className="w-full bg-charcoal-deep rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-gold h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(batch.portionsLeft / batch.totalPortions) * 100}%` }}
            />
          </div>
        </div>

        {/* Slow Dum Woodfire */}
        <div className="bg-charcoal-pure/60 border border-cream/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-cream/60 text-xs mb-1">
            <span>Fire Bed Sourcing</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-sm font-semibold text-cream truncate">{batch.woodType}</div>
          <div className="text-xs text-cream/50 mt-1">Steady 120°C ambient dum</div>
        </div>

        {/* Master Chef Guarantee */}
        <div className="bg-charcoal-pure/60 border border-cream/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-cream/60 text-xs mb-1">
            <span>Quality Inspection</span>
            <ChefHat className="w-4 h-4 text-gold" />
          </div>
          <div className="text-xs text-cream/80 italic line-clamp-2">
            "{batch.ustadNote}"
          </div>
        </div>
      </div>
    </div>
  );
}
