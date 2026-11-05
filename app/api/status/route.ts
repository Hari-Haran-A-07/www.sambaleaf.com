import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const decimalHours = hours + minutes / 60;

  const isLunch = decimalHours >= 11.5 && decimalHours <= 15.5;
  const isDinner = decimalHours >= 18.5 && decimalHours <= 22.5;
  const isOpen = isLunch || isDinner;

  return NextResponse.json({
    success: true,
    isOpen,
    currentPhase: isLunch ? 'Lunch Dum' : isDinner ? 'Evening Dum' : 'Resting / Pre-order',
    activeBatch: isLunch ? 2 : isDinner ? 5 : 1,
    location: 'Karur, Tamil Nadu',
    halalCertified: true,
    woodfireSource: 'Tamarind & Mango Wood Charcoal',
    nextBatchEstimate: isOpen ? 'Current Batch Active' : 'Next Batch: 11:30 AM Tomorrow',
    timestamp: istTime.toISOString()
  });
}
