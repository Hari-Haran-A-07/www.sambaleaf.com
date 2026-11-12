export interface ReheatingMethod {
  id: string;
  title: string;
  tamilTitle: string;
  durationMinutes: number;
  difficulty: 'Easiest' | 'Traditional Master' | 'Quick Urban';
  instructions: string[];
  ustadTip: string;
  recommendedVessel: string;
}

export const REHEATING_METHODS: ReheatingMethod[] = [
  {
    id: 'stovetop-tawa-dum',
    title: 'Double-Pan Indirect Tawa Dum (Master Recommended)',
    tamilTitle: 'தவா மறைமுக சூடேற்றும் முறை',
    durationMinutes: 8,
    difficulty: 'Traditional Master',
    recommendedVessel: 'Heavy flat iron tawa beneath handi / saucepan',
    instructions: [
      'Place a heavy iron dosa tawa over a medium flame for 3 minutes to store heat.',
      'Transfer the biryani into a flat-bottomed vessel, lightly sprinkle 1 teaspoon of water or milk on top.',
      'Cover with a tight-fitting lid or seal with aluminium foil to retain steam.',
      'Place the biryani vessel on top of the hot tawa and lower flame to simmer for 6–8 minutes.',
      'Turn off heat and let rest for 2 minutes before fluffing with a flat wooden spatula from edges inward.'
    ],
    ustadTip: 'Never stir vigorously. Seeraga Samba grains are tiny and delicate; fluffing gently from the side prevents breakage.'
  },
  {
    id: 'bamboo-steam-bath',
    title: 'Idli Steamer / Double Boiler Moisture Bath',
    tamilTitle: 'ஆவி குளியல் மறுசூடேற்றல்',
    durationMinutes: 6,
    difficulty: 'Traditional Master',
    recommendedVessel: 'Idli pot or steaming chamber',
    instructions: [
      'Bring 2 inches of water to a rolling boil in your idli steamer or dhokla pot.',
      'Place biryani into a heatproof steel bowl and place onto the steamer plate.',
      'Cover the pot and steam for 5–6 minutes.',
      'The direct rising steam softens the Kangeyam ghee and restores morning-fresh softness.'
    ],
    ustadTip: 'This method infuses zero oil while resurrecting 100% of the handi aroma.'
  },
  {
    id: 'microwave-damp-cloth',
    title: 'Damp Parchment / Microwave Protocol (Fastest)',
    tamilTitle: 'விரைவு மைக்ரோவேவ் முறை',
    durationMinutes: 2,
    difficulty: 'Quick Urban',
    recommendedVessel: 'Ceramic or glass microwave-safe container',
    instructions: [
      'Transfer biryani into a wide microwave-safe glass or ceramic dish.',
      'Dampen a paper towel or clean muslin cloth with a splash of water and drape it loosely over the rice.',
      'Microwave at 70% power (Medium-High) for 90 to 120 seconds.',
      'Remove damp cloth and drizzle 3 drops of pure ghee before serving hot.'
    ],
    ustadTip: 'Avoid high heat (100% power) as it extracts moisture from the meat fiber.'
  }
];

export function getReheatingMethodById(id: string): ReheatingMethod | undefined {
  return REHEATING_METHODS.find(m => m.id === id);
}
