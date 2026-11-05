export interface GiftVoucher {
  id: string;
  code: string;
  amount: number;
  title: string;
  recipientName: string;
  senderName: string;
  occasion: string;
  personalNote: string;
  validUntil: string;
}

export const VOUCHER_DENOMINATIONS = [
  { amount: 500, label: 'Biryani for Two', sublabel: '2x Chicken Biryani + Sides' },
  { amount: 1000, label: 'Family Feast Handi', sublabel: 'Serves 4–5 with Raitha & Thalcha' },
  { amount: 2500, label: 'Grand Royal Dum Feast', sublabel: 'Bulk party feast with Mutton Sukka' },
  { amount: 5000, label: 'Celebration Catering Pass', sublabel: 'For weddings & special occasions' }
];

export function generateVoucherCode(amount: number): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SAMBA-${amount}-${rand}`;
}
