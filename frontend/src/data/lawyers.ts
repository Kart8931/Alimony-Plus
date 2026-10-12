import { Lawyer } from '../types';

export const MOCK_LAWYERS: Lawyer[] = [
  {
    id: 'lawyer-1',
    name: 'Adv. Rajesh Sharma',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    barCouncilId: 'UP/1998/4412',
    courts: ['Supreme Court', 'High Court'],
    experienceYears: 22,
    languages: ['English', 'Hindi'],
    consultationFee: 1500,
    rating: 4.9,
    totalReviews: 128,
    bio: 'Specialized in family law, maintenance under Section 125 CrPC, and Hindu Marriage Act disputes with over two decades of experience.',
    isBarCouncilVerified: true,
  },
  {
    id: 'lawyer-2',
    name: 'Adv. Priya Sundaram',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    barCouncilId: 'DL/2012/8891',
    courts: ['Family Court', 'High Court'],
    experienceYears: 14,
    languages: ['English', 'Hindi', 'Tamil'],
    consultationFee: 1200,
    rating: 4.8,
    totalReviews: 94,
    bio: 'Expert in DV Act cases, women rights advocacy, financial maintenance recovery, and structured pre-litigation counseling.',
    isBarCouncilVerified: true,
  }
];