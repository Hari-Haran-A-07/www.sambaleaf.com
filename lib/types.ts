export interface MenuItem {
  id: string;
  name: string;
  tamilName: string;
  subtitle: string;
  tagline: string;
  description: string;
  pricePlaceholder: string;
  priceNumeric?: number;
  image: string;
  badge: string;
  isHalal: boolean;
  category: 'biryani' | 'accompaniment';
  servingInfo: string;
  availability: boolean;
  pairWith?: string;
  details: {
    riceType: string;
    cookingMethod: string;
    spiceProfile: string;
    keyNote: string;
  };
}

export interface CartItem {
  dishId: string;
  dishName: string;
  quantity: number;
  accompaniments: {
    raitha: boolean;
    thalcha: boolean;
  };
  notes?: string;
}

export interface KitchenSettings {
  isOpen: boolean;
  statusText: string;
  location: string;
  phonePlaceholder: string;
  whatsappPlaceholder: string;
  deliveryAreaNotice: string;
}
