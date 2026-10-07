import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    tamilName: 'சிக்கன் பிரியாணி',
    subtitle: 'THE CLASSIC',
    tagline: 'Fragrant Seeraga Samba rice layered with tender chicken and a deeply seasoned masala.',
    description: 'Fragrant Seeraga Samba rice layered with tender chicken and a deeply seasoned masala, prepared in the spirit of Dindigul-style biryani. Cooked in sealed copper handis to lock in every nuance of spice and aroma.',
    pricePlaceholder: '₹ [Price on Request]',
    priceNumeric: 280,
    image: '/images/chicken-biryani.jpg',
    badge: 'SIGNATURE CLASSIC',
    isHalal: true,
    category: 'biryani',
    servingInfo: 'Serves 1–2 (With Raitha & Thalcha)',
    availability: true,
    details: {
      riceType: 'Authentic Seeraga Samba (Small Grain)',
      cookingMethod: 'Traditional Dum in Sealed Handi',
      spiceProfile: 'Warm, Balanced Dindigul Masala',
      keyNote: 'Tender chicken steeped in slow-cooked essence'
    }
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    tamilName: 'மட்டன் பிரியாணி',
    subtitle: 'THE RICHER TRADITION',
    tagline: 'Seeraga Samba rice and carefully prepared mutton in a slow, aromatic dum.',
    description: 'Seeraga Samba rice and carefully prepared mutton come together in a slow, aromatic biryani designed for deep flavour. The natural juices of the meat meld into the tiny grains, creating an unforgettable depth.',
    pricePlaceholder: '₹ [Price on Request]',
    priceNumeric: 360,
    image: '/images/mutton-biryani.jpg',
    badge: 'TIME-HONOURED',
    isHalal: true,
    category: 'biryani',
    servingInfo: 'Serves 1–2 (With Raitha & Thalcha)',
    availability: true,
    details: {
      riceType: 'Selected Seeraga Samba Grains',
      cookingMethod: 'Slow Woodfire & Charcoal Dum',
      spiceProfile: 'Robust, Peppery & Fragrant',
      keyNote: 'Tender mutton cooked on the bone for rich jus'
    }
  },
  {
    id: 'onion-raitha',
    name: 'Onion Raitha',
    tamilName: 'வெங்காய தயிர் பச்சடி',
    subtitle: 'THE QUIET COMPANION',
    tagline: 'Cool, creamy and refreshing — the quiet companion that balances the warmth of biryani.',
    description: 'Cool, creamy and refreshing — the quiet companion that balances the warmth of biryani. Made with thick freshly set curd, finely sliced crisp shallots, gentle green chillies, and fresh coriander.',
    pricePlaceholder: '₹ [Included / À la carte]',
    priceNumeric: 40,
    image: '/images/onion-raitha.jpg',
    badge: 'ESSENTIAL COMPANION',
    isHalal: true,
    category: 'accompaniment',
    servingInfo: 'Prepared Fresh with Every Dum Batch',
    availability: true,
    details: {
      riceType: 'Accompaniment',
      cookingMethod: 'Hand-whipped fresh curd & crisp shallots',
      spiceProfile: 'Cooling, subtle tang & crisp bite',
      keyNote: 'The palate-cleansing contrast to deep spice'
    }
  },
  {
    id: 'thalcha',
    name: 'Thalcha',
    tamilName: 'தால்ச்சா',
    subtitle: 'THE TRADITIONAL GRAVY',
    tagline: 'A comforting accompaniment that completes the biryani experience.',
    description: 'A comforting accompaniment that completes the biryani experience. Slow-simmered lentils infused with brinjal, subtle spices, and a gentle tangy tamarind finish that pairs seamlessly with Seeraga Samba biryani.',
    pricePlaceholder: '₹ [Included / À la carte]',
    priceNumeric: 50,
    image: '/images/thalcha.jpg',
    badge: 'TRADITIONAL GRAVY',
    isHalal: true,
    category: 'accompaniment',
    servingInfo: 'Slow-simmered aromatic gravy',
    availability: true,
    details: {
      riceType: 'Accompaniment',
      cookingMethod: 'Slow simmered lentils & braised brinjal',
      spiceProfile: 'Warm, savory with mild tamarind note',
      keyNote: 'Unites the grain and meat into total harmony'
    }
  }
];

export const RICE_COMPARISON = [
  {
    attribute: 'Grain Size & Shape',
    seeragaSamba: 'Tiny, oval grains reminiscent of cumin seeds (Seeragam). Dense and delicate.',
    basmati: 'Long, slender, elongated grains that double in length when boiled.'
  },
  {
    attribute: 'Flavour Absorption',
    seeragaSamba: 'Exceptional. Absorbs meat jus and spices right into the grain core without breaking.',
    basmati: 'Surface absorption; tends to keep grains individually separate and drier.'
  },
  {
    attribute: 'Aroma Profile',
    seeragaSamba: 'Earthy, nutty, sweet indigenous fragrance unique to Southern Tamil Nadu paddy fields.',
    basmati: 'Floral, pandan-like, perfumed aroma typical of Northern Himalayan foothills.'
  },
  {
    attribute: 'Texture on Palate',
    seeragaSamba: 'Tender, juicy, melt-in-mouth bite that holds intense richness and ghee.',
    basmati: 'Fluffy, dry, elongated individual starch strands.'
  },
  {
    attribute: 'Regional Identity',
    seeragaSamba: 'The undisputed soul of Dindigul, Ambur, and classical Tamil Nadu biryani heritage.',
    basmati: 'Synonymous with Awadhi, Lucknowi, and Mughlai biryani traditions.'
  }
];

export const COOKING_STAGES = [
  {
    step: '01',
    title: 'SELECT',
    tamilTitle: 'தேர்வு',
    subtitle: 'The Heritage Grain & Cut',
    description: 'We source pure aged Seeraga Samba grains—tiny, fragrant, and revered for centuries across Tamil Nadu. Meats are strictly 100% Halal certified and prepared fresh daily.',
    highlight: 'Pure Small Grain'
  },
  {
    step: '02',
    title: 'PREPARE',
    tamilTitle: 'தயாரிப்பு',
    subtitle: 'Fresh Handcrafted Masalas',
    description: 'Shallots, country garlic, fresh green chillies, and hand-ground whole spices are sauteed slowly in pure ghee to create the deep base of Dindigul flavour.',
    highlight: 'Hand-Ground Base'
  },
  {
    step: '03',
    title: 'SEASON',
    tamilTitle: 'மசாலா',
    subtitle: 'The Meat & Spice Infusion',
    description: 'The meat is gently browned in the spice-rich gravy until tender, releasing its natural marrow and broth that will eventually cook the rice.',
    highlight: 'Natural Meat Jus'
  },
  {
    step: '04',
    title: 'COOK',
    tamilTitle: 'சமையல்',
    subtitle: 'The Perfect Water-Grain Ratio',
    description: 'Seeraga Samba rice is introduced into the simmering aromatic meat broth, absorbing the seasoned liquid until the exact hydration threshold is achieved.',
    highlight: 'Broth Absorption'
  },
  {
    step: '05',
    title: 'DUM',
    tamilTitle: 'தம்',
    subtitle: 'Woodfire & Charcoal Embers',
    description: 'The heavy copper handi is tightly sealed with dough. Glowing embers are placed on the brass lid, slow-steaming the biryani under balanced top and bottom heat.',
    highlight: 'Sealed Slow Steam'
  },
  {
    step: '06',
    title: 'SERVE',
    tamilTitle: 'பரிமாறுதல்',
    subtitle: 'Fresh on Banana Leaf',
    description: 'Unsealed only when your order is placed. Served piping hot with chilled Onion Raitha and velvety Thalcha, bringing the pure spirit of Dindigul to Karur.',
    highlight: 'Hot & Fresh'
  }
];

export const KITCHEN_JOURNEY = [
  {
    stage: 'PREPARE',
    title: 'Handcrafted Mise en Place',
    detail: 'Every morning in Karur, fresh shallots are peeled, pure ghee is measured, and whole spices are crushed.',
    image: '/images/seeraga-samba-rice.jpg'
  },
  {
    stage: 'COOK',
    title: 'Slow Copper Pot Alchemy',
    detail: 'Traditional heavy-bottomed vessels allow uniform caramelization and deep extraction of flavour.',
    image: '/images/kitchen-dum.jpg'
  },
  {
    stage: 'REST',
    title: 'Dum Maturation',
    detail: 'The sealed handi rests in its own steam, letting the Seeraga Samba grains plump up with meat essence.',
    image: '/images/chicken-biryani.jpg'
  },
  {
    stage: 'PACK',
    title: 'Eco-Luxury Thermal Packaging',
    detail: 'Packed inside eco-friendly insulated boxes lined with fresh banana leaves to preserve moisture and aroma.',
    image: '/images/packaging.jpg'
  },
  {
    stage: 'DELIVER',
    title: 'Dispatched Across Karur',
    detail: 'Delivered directly from our cloud kitchen to your doorstep at peak eating temperature.',
    image: '/images/mutton-biryani.jpg'
  }
];

export const BRAND_VALUES = [
  {
    num: '01',
    title: 'SEERAGA SAMBA',
    tamil: 'சீரக சம்பா',
    text: 'We never compromise with long-grain rice. Authentic Dindigul biryani belongs exclusively to the tiny, aromatic Seeraga Samba grain.'
  },
  {
    num: '02',
    title: 'DINDIGUL-STYLE',
    tamil: 'திண்டுக்கல் முறை',
    text: 'Inspired by the historic slow-cooking traditions of Dindigul—peppery, tang-kissed, and steeped in rich country flavours.'
  },
  {
    num: '03',
    title: 'FRESHLY PREPARED',
    tamil: 'புதிய சமையல்',
    text: 'No reheated batches. Prepared in timed dum handis each day to ensure every serving reaches you fragrant and piping hot.'
  },
  {
    num: '04',
    title: '100% HALAL',
    tamil: '100% ஹலால்',
    text: 'Our kitchen maintains a strict 100% Halal commitment. Clean sourcing, pure ingredients, and absolute culinary integrity.'
  }
];
