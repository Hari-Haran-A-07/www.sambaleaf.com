export interface AllergenProfile {
  dishId: string;
  dishName: string;
  isHalal: boolean;
  isGlutenFree: boolean;
  isNutFree: boolean;
  dairyPresent: boolean;
  containsEgg: boolean;
  spiceIntensity: 'Mild' | 'Medium' | 'Rich Warmth';
  keyAllergens: string[];
  kitchenSafetyNotes: string;
}

export const ALLERGEN_PROFILES: AllergenProfile[] = [
  {
    dishId: 'chicken-biryani',
    dishName: 'Chicken Biryani',
    isHalal: true,
    isGlutenFree: true,
    isNutFree: true,
    dairyPresent: true,
    containsEgg: false,
    spiceIntensity: 'Medium',
    keyAllergens: ['A2 Cow Ghee', 'Cultured Buffalo Curd (Marinade)'],
    kitchenSafetyNotes: 'Cooked with pure Seeraga Samba grain. 100% naturally gluten-free with zero wheat flour or thickeners.'
  },
  {
    dishId: 'mutton-biryani',
    dishName: 'Mutton Biryani',
    isHalal: true,
    isGlutenFree: true,
    isNutFree: true,
    dairyPresent: true,
    containsEgg: false,
    spiceIntensity: 'Rich Warmth',
    keyAllergens: ['A2 Cow Ghee', 'Cultured Buffalo Curd (Marinade)'],
    kitchenSafetyNotes: 'Prepared with bone-in tender goat cuts. Slow woodfire dum prevents oil oxidation.'
  },
  {
    dishId: 'onion-raitha',
    dishName: 'Onion Raitha',
    isHalal: true,
    isGlutenFree: true,
    isNutFree: true,
    dairyPresent: true,
    containsEgg: false,
    spiceIntensity: 'Mild',
    keyAllergens: ['Dairy (Fresh Curd)', 'Raw Shallots', 'Green Chillies'],
    kitchenSafetyNotes: 'Prepared in small refrigerated batches right before delivery. Probiotic rich.'
  },
  {
    dishId: 'dindigul-thalcha',
    dishName: 'Dindigul Thalcha',
    isHalal: true,
    isGlutenFree: true,
    isNutFree: true,
    dairyPresent: false,
    containsEgg: false,
    spiceIntensity: 'Medium',
    keyAllergens: ['Legumes (Chana & Toor Dal)', 'Brinjal / Eggplant'],
    kitchenSafetyNotes: 'Slow-simmered with natural tamarind extract and country herbs.'
  }
];
