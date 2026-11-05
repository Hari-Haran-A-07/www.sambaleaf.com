import React from 'react';
import { Metadata } from 'next';
import OrderTracker from '../../components/OrderTracker';

export const metadata: Metadata = {
  title: 'Track Your Live Dum Order | SAMBALEAF Karur',
  description: 'Live order tracking for Sambaleaf Dindigul-style Biryani in Karur. Follow your handi from woodfire embers to your door.'
};

export default function TrackPage() {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-charcoal-near text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <OrderTracker />
      </div>
    </div>
  );
}
