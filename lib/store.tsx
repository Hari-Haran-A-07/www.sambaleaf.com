'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, KitchenSettings } from './types';
import { MENU_ITEMS } from './data';

interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  quantity: number;
  includeRaitha: boolean;
  includeThalcha: boolean;
  priceNumeric: number;
}

interface StoreContextType {
  menuItems: MenuItem[];
  updateMenuItem: (id: string, updates: Partial<MenuItem>) => void;
  cart: CartItem[];
  addToCart: (item: { menuItemId: string; quantity: number; includeRaitha: boolean; includeThalcha: boolean }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  kitchenSettings: KitchenSettings;
  updateKitchenSettings: (updates: Partial<KitchenSettings>) => void;
  cartTotal: number;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [kitchenSettings, setKitchenSettings] = useState<KitchenSettings>({
    isOpen: true,
    statusText: 'SERVING KARUR',
    location: 'Karur, Tamil Nadu, India',
    phonePlaceholder: '+91 [Client to Provide]',
    whatsappPlaceholder: '919876543210',
    deliveryAreaNotice: 'Karur City, Pasupathipalem, Vengamedu, Thanthonimalai & surrounding areas [Exact radius client to confirm]',
  });

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const updateKitchenSettings = (updates: Partial<KitchenSettings>) => {
    setKitchenSettings((prev) => ({ ...prev, ...updates }));
  };

  const addToCart = ({
    menuItemId,
    quantity,
    includeRaitha,
    includeThalcha,
  }: {
    menuItemId: string;
    quantity: number;
    includeRaitha: boolean;
    includeThalcha: boolean;
  }) => {
    const item = menuItems.find((m) => m.id === menuItemId);
    if (!item) return;

    const cartItemId = `${menuItemId}-${includeRaitha ? 'r' : ''}-${includeThalcha ? 't' : ''}`;
    const price = item.priceNumeric || 0;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId,
          name: item.name,
          quantity,
          includeRaitha,
          includeThalcha,
          priceNumeric: price,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.priceNumeric * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        menuItems,
        updateMenuItem,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isAdminOpen,
        setIsAdminOpen,
        kitchenSettings,
        updateKitchenSettings,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
