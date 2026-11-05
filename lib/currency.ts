export type CurrencyCode = 'INR' | 'USD' | 'AED' | 'SGD' | 'EUR' | 'GBP' | 'SAR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  exchangeRateToINR: number; // 1 Unit of Currency = X INR
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', exchangeRateToINR: 1 },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', exchangeRateToINR: 84.5 },
  AED: { code: 'AED', symbol: 'AED ', name: 'UAE Dirham', exchangeRateToINR: 23.0 },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', exchangeRateToINR: 64.0 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', exchangeRateToINR: 91.5 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', exchangeRateToINR: 109.0 },
  SAR: { code: 'SAR', symbol: 'SAR ', name: 'Saudi Riyal', exchangeRateToINR: 22.5 }
};

export function convertFromINR(amountINR: number, targetCurrency: CurrencyCode): { formatted: string; raw: number } {
  const config = CURRENCIES[targetCurrency] || CURRENCIES.INR;
  if (targetCurrency === 'INR') {
    return { formatted: `₹${amountINR}`, raw: amountINR };
  }
  const converted = +(amountINR / config.exchangeRateToINR).toFixed(2);
  return { formatted: `${config.symbol}${converted}`, raw: converted };
}
