import { NextResponse } from 'next/server';
import { isValidPhone, isValidAddress } from '../../../lib/validation';
import { validateCoupon } from '../../../lib/coupons';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phone, address, items, couponCode } = body;

    if (!customerName || !phone || !address || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ success: false, error: 'Missing required order fields' }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid 10-digit Indian phone number' }, { status: 400 });
    }

    if (!isValidAddress(address)) {
      return NextResponse.json({ success: false, error: 'Please enter a complete Karur delivery address' }, { status: 400 });
    }

    let subtotal = 0;
    for (const it of items) {
      subtotal += (it.priceNumeric || 0) * (it.quantity || 1);
    }

    let discount = 0;
    if (couponCode) {
      const couponCheck = validateCoupon(couponCode, subtotal);
      if (couponCheck.valid) {
        discount = couponCheck.discount;
      }
    }

    const total = Math.max(0, subtotal - discount);
    const orderId = `SL-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      orderId,
      subtotal,
      discount,
      total,
      estDeliveryMinutes: 28,
      status: 'Handi Sealed & Cooking',
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
