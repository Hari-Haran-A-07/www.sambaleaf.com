export interface LoyaltyTier {
  id: string;
  name: string;
  tamilName: string;
  minPoints: number;
  perks: string[];
  discountRate: number;
}

export const LOYALTY_TIERS: LoyaltyTier[] = [
  {
    id: 'bronze',
    name: 'Samba Bronze',
    tamilName: 'சம்பா வெண்கலம்',
    minPoints: 0,
    perks: ['Free accompaniments upgrade', 'Standard WhatsApp order priority'],
    discountRate: 0
  },
  {
    id: 'silver',
    name: 'Silver Dum Circle',
    tamilName: 'வெள்ளி தம் வட்டம்',
    minPoints: 200,
    perks: ['5% off on all weekend orders', '15-min early batch notification', 'Complimentary extra boiled egg'],
    discountRate: 5
  },
  {
    id: 'gold',
    name: 'Gold Ustad Guild',
    tamilName: 'தங்க உஸ்தாத் கழகம்',
    minPoints: 500,
    perks: ['10% off all orders', 'Guaranteed Sunday Handi allocation', 'Exclusive invitation to Ramadan Sehri feasts', 'Free Elaneer Payasam with every order'],
    discountRate: 10
  }
];

export function calculatePointsEarned(totalSpentINR: number): number {
  return Math.floor(totalSpentINR / 10);
}

export function getUserTier(points: number): LoyaltyTier {
  if (points >= 500) return LOYALTY_TIERS[2];
  if (points >= 200) return LOYALTY_TIERS[1];
  return LOYALTY_TIERS[0];
}
