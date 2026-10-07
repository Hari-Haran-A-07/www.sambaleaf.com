export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatPortion(qty: number): string {
  return qty === 1 ? "1 Portion" : `${qty} Portions`;
}
