export function generateWhatsAppOrderUrl(phone: string, orderDetails: {
  dish: string;
  qty: number;
  accompaniments: string;
  name?: string;
  address?: string;
}): string {
  const msg = encodeURIComponent(
    `*SAMBALEAF â€” NEW ORDER INQUIRY (KARUR)*\n\n` +
    `*Dish:* ${orderDetails.dish}\n` +
    `*Quantity:* ${orderDetails.qty} Portion(s)\n` +
    `*Accompaniments:* ${orderDetails.accompaniments}\n` +
    (orderDetails.name ? `*Customer:* ${orderDetails.name}\n` : "") +
    (orderDetails.address ? `*Karur Delivery Location:* ${orderDetails.address}\n` : "") +
    `*Dietary:* 100% Halal Verified\n\n` +
    `Please confirm order preparation time. Thank you!`
  );
  return `https://wa.me/${phone}?text=${msg}`;
}
