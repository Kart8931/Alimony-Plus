export type CourtSpecialization = 'Supreme Court' | 'High Court' | 'District Court' | 'Family Court';

export interface Lawyer {
  id: string;
  name: string;
  avatarUrl: string;
  barCouncilId: string;
  courts: CourtSpecialization[];
  experienceYears: number;
  languages: string[];
  consultationFee: number;
  rating: number;
  totalReviews: number;
  bio: string;
  isBarCouncilVerified: boolean;
}

export interface LawyerFilterState {
  searchQuery: string;
  selectedCourt: CourtSpecialization | 'All';
  minExperience: number;
  maxFee: number;
  language: string;
}