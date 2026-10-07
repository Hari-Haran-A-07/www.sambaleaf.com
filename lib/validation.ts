export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10 && cleaned.length <= 13;
}

export function isValidAddress(address: string): boolean {
  return address.trim().length >= 3;
}
