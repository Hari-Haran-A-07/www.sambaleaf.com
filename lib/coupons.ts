export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  description: string;
}

export const ACTIVE_COUPONS: Coupon[] = [
  {
    code: 'SAMBAFIRST',
    discountType: 'percentage',
    discountValue: 15,
    minOrderValue: 280,
    description: '15% Off Your First Authentic Dum Order'
  },
  {
    code: 'KARURFEAST',
    discountType: 'fixed',
    discountValue: 100,
    minOrderValue: 800,
    description: '₹100 Flat Savings on Family & Bulk Orders'
  },
  {
    code: 'DINDIGULDUM',
    discountType: 'fixed',
    discountValue: 50,
    minOrderValue: 500,
    description: '₹50 Off Pure Heritage Dum Handi'
  }
];

export function validateCoupon(code: string, currentTotal: number): { valid: boolean; discount: number; message: string } {
  const normalized = code.trim().toUpperCase();
  const coupon = ACTIVE_COUPONS.find(c => c.code === normalized);

  if (!coupon) {
    return { valid: false, discount: 0, message: 'Invalid coupon code. Try SAMBAFIRST or KARURFEAST.' };
  }

  if (currentTotal < coupon.minOrderValue) {
    return {
      valid: false,
      discount: 0,
      message: `Code ${coupon.code} requires a minimum order of ₹${coupon.minOrderValue}`
    };
  }

  let discount = 0;
  if (coupon.discountType === 'percentage') {
    discount = Math.round((currentTotal * coupon.discountValue) / 100);
  } else {
    discount = coupon.discountValue;
  }

  return {
    valid: true,
    discount,
    message: `${coupon.description} applied successfully!`
  };
}
