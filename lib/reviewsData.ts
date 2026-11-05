export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tamilComment?: string;
  orderItem: string;
  verifiedBuyer: boolean;
  avatarSeed: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Karthik Subramanian',
    location: 'Kovai Road, Karur',
    rating: 5,
    date: 'Yesterday',
    comment: 'The Seeraga Samba mutton biryani is incomparable. Each tiny grain separates cleanly yet holds the rich mutton jus. Reminds me of traditional home weddings in Dindigul.',
    tamilComment: 'சீரக சம்பா மட்டன் பிரியாணி அபாரம். திண்டுக்கல் பாரம்பரிய ருசி அப்படியே இருக்கிறது.',
    orderItem: 'Mutton Biryani + Thalcha',
    verifiedBuyer: true,
    avatarSeed: 'karthik'
  },
  {
    id: 'rev-2',
    author: 'Dr. Priya Ramachandran',
    location: 'Gandhigram, Karur',
    rating: 5,
    date: '3 days ago',
    comment: 'Authentic 100% Halal preparation and zero artificial colours or aginomoto. You can eat the chicken biryani without that heavy, oily feeling afterwards. The fresh shallot raitha is divine!',
    tamilComment: 'எந்தவித செயற்கை நிறமும் இல்லாமல் இயற்கையான மசாலா மணம்.',
    orderItem: 'Chicken Biryani',
    verifiedBuyer: true,
    avatarSeed: 'priya'
  },
  {
    id: 'rev-3',
    author: 'M. Mohammed Aslam',
    location: 'Thanthonimalai, Karur',
    rating: 5,
    date: 'Last week',
    comment: 'Ordered 15 portions for our family gathering. The food arrived steaming hot in sealed food-grade containers with whole banana leaves. Thalcha was spot on with tender brinjal and dal.',
    tamilComment: 'குடும்ப விருந்துக்கு 15 பார்சல் வாங்கினோம். மிக அருமையான தால்ச்சா மற்றும் சூடான பிரியாணி.',
    orderItem: 'Family Dum Box (Chicken & Mutton)',
    verifiedBuyer: true,
    avatarSeed: 'aslam'
  },
  {
    id: 'rev-4',
    author: 'Venkatesh S.',
    location: 'Bus Stand Area, Karur',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Finally someone in Karur doing justice to true Dindigul heritage without mixing basmati. The aroma when you open the foil packet fills the entire dining room.',
    orderItem: 'Mutton Biryani',
    verifiedBuyer: true,
    avatarSeed: 'venkatesh'
  },
  {
    id: 'rev-5',
    author: 'Ananya Sreedharan',
    location: 'Vengamedu, Karur',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ordered through WhatsApp - super fast response and dispatched within 20 mins of the afternoon dum batch being opened. Best biryani experience in town.',
    orderItem: 'Chicken Biryani + Onion Raitha',
    verifiedBuyer: true,
    avatarSeed: 'ananya'
  }
];

export function getAverageRating(): { score: number; totalCount: number; satisfactionRate: number } {
  const total = REVIEWS_DATA.length;
  const sum = REVIEWS_DATA.reduce((acc, r) => acc + r.rating, 0);
  return {
    score: +(sum / total).toFixed(1),
    totalCount: total,
    satisfactionRate: 98.4
  };
}
