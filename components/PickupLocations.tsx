'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, CheckCircle, Car } from 'lucide-react';

interface LocationHub {
  id: string;
  name: string;
  tamilName: string;
  address: string;
  phone: string;
  timing: string;
  badge: string;
  hasParking: boolean;
  coordinates: string;
}

const HUBS: LocationHub[] = [
  {
    id: 'kovai-road',
    name: 'Kovai Road Hearth & Central Kitchen',
    tamilName: 'கோவை ரோடு முதன்மை சமையலகம்',
    address: '42/1 Kovai Road, Near Light House Corner, Karur 639002',
    phone: '+91 94421 88320',
    timing: '11:30 AM – 3:30 PM | 6:30 PM – 10:30 PM',
    badge: 'Main Woodfire Hearth',
    hasParking: true,
    coordinates: '10.9574,78.0805'
  },
  {
    id: 'bus-stand',
    name: 'Karur Bus Stand Express Counter',
    tamilName: 'பேருந்து நிலையம் விரைவு விநியோகம்',
    address: 'Near Old Bus Stand Arch, Jawahar Bazaar, Karur 639001',
    phone: '+91 98422 12904',
    timing: '12:00 PM – 3:30 PM | 7:00 PM – 10:30 PM',
    badge: 'Express Hot Dispatch',
    hasParking: false,
    coordinates: '10.9601,78.0766'
  },
  {
    id: 'thanthoni',
    name: 'Thanthonimalai Southern Cloud Hub',
    tamilName: 'தாந்தோணிமலை தென் மண்டல நிலையம்',
    address: 'Opposite Govt Arts College Road, Thanthonimalai, Karur 639005',
    phone: '+91 97880 44219',
    timing: '12:15 PM – 3:30 PM | 7:00 PM – 10:00 PM',
    badge: 'Drive-Thru Pickup',
    hasParking: true,
    coordinates: '10.9328,78.0831'
  }
];

export default function PickupLocations() {
  const [activeHub, setActiveHub] = useState<string>('kovai-road');

  return (
    <section className="py-20 bg-charcoal-deep border-t border-cream/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Karur Neighborhood Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-4">
            Fresh From the Hearth to Your Neighborhood
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed">
            Whether you choose prompt doorstep delivery or warm takeaway, our three strategically located hubs ensure biryani reaches you within minutes of the handi seal being broken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUBS.map((hub) => (
            <div
              key={hub.id}
              onClick={() => setActiveHub(hub.id)}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                activeHub === hub.id
                  ? 'bg-charcoal-near border-gold shadow-2xl ring-1 ring-gold/40 -translate-y-1'
                  : 'bg-charcoal-pure/50 border-cream/10 hover:border-cream/20'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                    {hub.badge}
                  </span>
                  {hub.hasParking && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      Parking Available
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-cream mb-1">{hub.name}</h3>
                <div className="text-xs font-tamil text-gold mb-4">{hub.tamilName}</div>

                <div className="space-y-3 text-xs text-cream/70 my-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span>{hub.timing}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <span>{hub.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${hub.coordinates}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-xs font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${hub.phone}`}
                  className="text-xs text-cream/50 hover:text-cream"
                >
                  Call Hub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
