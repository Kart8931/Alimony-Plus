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

export interface LawyerReview {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TimeSlot {
  id: string;
  time: string; // e.g., "10:00 AM - 10:30 AM"
  isAvailable: boolean;
}

export interface BookingRequest {
  lawyerId: string;
  date: string;
  slotId: string;
  consultationType: 'Video' | 'Audio' | 'In-Person';
  clientNotes: string;
}