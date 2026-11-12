export interface NutritionProfile {
  name: string;
  servingGrams: number;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  fiberGrams: number;
  sodiumMg: number;
  glycemicIndex: number;
  digestibilityRating: 'Very High' | 'High' | 'Moderate';
}

export const GRAIN_COMPARISON = {
  seeragaSamba: {
    grainName: 'Seeraga Samba (Small Grain, Tamil Heritage)',
    glycemicIndex: 56, // Low-medium GI compared to polished white grains
    amyloseContent: 'High (firm grain, retains aroma)',
    fiberPer100g: 2.8,
    aromaCompound: '2-Acetyl-1-pyrroline (natural spice note)',
    stomachComfortRating: 'Light on digestion, low bloating'
  },
  basmati: {
    grainName: 'Commercial Basmati (Long Grain)',
    glycemicIndex: 67,
    amyloseContent: 'Moderate',
    fiberPer100g: 1.2,
    aromaCompound: 'Standard Basmati Pandan aroma',
    stomachComfortRating: 'Heavier starch load'
  }
};

export const DISH_NUTRITION: Record<string, NutritionProfile> = {
  'chicken-biryani': {
    name: 'Seeraga Samba Chicken Dum Biryani',
    servingGrams: 450,
    calories: 680,
    proteinGrams: 36,
    carbsGrams: 78,
    fatsGrams: 24,
    fiberGrams: 4.5,
    sodiumMg: 790,
    glycemicIndex: 54,
    digestibilityRating: 'Very High'
  },
  'mutton-biryani': {
    name: 'Seeraga Samba Mutton Dum Biryani',
    servingGrams: 450,
    calories: 780,
    proteinGrams: 38,
    carbsGrams: 76,
    fatsGrams: 34,
    fiberGrams: 4.2,
    sodiumMg: 820,
    glycemicIndex: 53,
    digestibilityRating: 'High'
  },
  'onion-raitha': {
    name: 'Fresh Cow Curd Onion Raitha',
    servingGrams: 120,
    calories: 75,
    proteinGrams: 4.2,
    carbsGrams: 6.5,
    fatsGrams: 3.8,
    fiberGrams: 0.8,
    sodiumMg: 140,
    glycemicIndex: 25,
    digestibilityRating: 'Very High'
  },
  'brinjal-thalcha': {
    name: 'Dindigul Dal Brinjal Thalcha',
    servingGrams: 150,
    calories: 120,
    proteinGrams: 4.5,
    carbsGrams: 14.0,
    fatsGrams: 5.2,
    fiberGrams: 3.5,
    sodiumMg: 310,
    glycemicIndex: 35,
    digestibilityRating: 'Very High'
  }
};

/**
 * Calculates aggregate macronutrients for a given meal selection.
 */
export function calculateMealNutrition(
  items: Array<{ dishId: string; quantity: number }>
): {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  totalFiber: number;
} {
  return items.reduce(
    (acc, curr) => {
      const profile = DISH_NUTRITION[curr.dishId];
      if (!profile || curr.quantity <= 0) return acc;

      return {
        totalCalories: acc.totalCalories + profile.calories * curr.quantity,
        totalProtein: acc.totalProtein + profile.proteinGrams * curr.quantity,
        totalCarbs: acc.totalCarbs + profile.carbsGrams * curr.quantity,
        totalFats: acc.totalFats + profile.fatsGrams * curr.quantity,
        totalFiber: acc.totalFiber + profile.fiberGrams * curr.quantity
      };
    },
    {
      totalCalories: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalFats: 0,
      totalFiber: 0
    }
  );
}
