export interface ZoneDetail {
  pincode: string;
  area: string;
  timeEstimate: string;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  hub: string;
}

export const KARUR_ZONES: Record<string, ZoneDetail> = {
  '639001': {
    pincode: '639001',
    area: 'Jawahar Bazaar, Old Bus Stand, Light House, Karur Town',
    timeEstimate: '15–20 Mins',
    deliveryFee: 0,
    freeDeliveryThreshold: 280,
    hub: 'Central Express Counter'
  },
  '639002': {
    pincode: '639002',
    area: 'Kovai Road, Sengunthapuram, Gandhigramam',
    timeEstimate: '15–25 Mins',
    deliveryFee: 0,
    freeDeliveryThreshold: 280,
    hub: 'Kovai Road Woodfire Hearth'
  },
  '639004': {
    pincode: '639004',
    area: 'Vengamedu, Pasupathipalem, Ramakrishnapuram',
    timeEstimate: '20–30 Mins',
    deliveryFee: 25,
    freeDeliveryThreshold: 500,
    hub: 'Northern Express Fleet'
  },
  '639005': {
    pincode: '639005',
    area: 'Thanthonimalai, Govt Arts College Road, Chettipalayam',
    timeEstimate: '25–35 Mins',
    deliveryFee: 30,
    freeDeliveryThreshold: 600,
    hub: 'Thanthonimalai Southern Cloud Hub'
  },
  '639006': {
    pincode: '639006',
    area: 'Sanapiratti, Rayanur, Athur bypass',
    timeEstimate: '30–40 Mins',
    deliveryFee: 40,
    freeDeliveryThreshold: 700,
    hub: 'Suburban Dispatch Partner'
  }
};

/**
 * Returns zone detail if pincode is serviced, otherwise null.
 */
export function getDeliveryZone(pincode: string): ZoneDetail | null {
  const cleaned = pincode.trim();
  return KARUR_ZONES[cleaned] || null;
}

/**
 * Checks whether a given pincode is within our active delivery perimeter.
 */
export function isWithinDeliveryCoverage(pincode: string): boolean {
  return Boolean(getDeliveryZone(pincode));
}

/**
 * Calculates delivery fee based on order total and pincode.
 * Returns { fee: number, isFree: boolean, remainingForFree: number }
 */
export function calculateDeliveryFee(pincode: string, orderTotal: number): {
  fee: number;
  isFree: boolean;
  remainingForFree: number;
  zone: ZoneDetail | null;
} {
  const zone = getDeliveryZone(pincode);
  if (!zone) {
    return { fee: 0, isFree: false, remainingForFree: 0, zone: null };
  }

  if (orderTotal >= zone.freeDeliveryThreshold) {
    return { fee: 0, isFree: true, remainingForFree: 0, zone };
  }

  return {
    fee: zone.deliveryFee,
    isFree: zone.deliveryFee === 0,
    remainingForFree: Math.max(0, zone.freeDeliveryThreshold - orderTotal),
    zone
  };
}
