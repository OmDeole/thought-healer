export type ActiveTab = 'home' | 'about' | 'programs' | 'approach' | 'sanctuary' | 'matcher' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Founder' | 'Clinical Psychologist' | 'Leadership';
  qualifications: string;
  bio: string;
  imageUrl?: string;
  initials: string;
  focus: string[];
}

export interface Therapist {
  id: string;
  name: string;
  credentials: string;
  specialties: string[];
  bio: string;
  modalities: string[];
  experienceYears?: number;
  availableNext: string;
  sessionTypes: string[];
  avatarInitial: string;
  avatarBg: string;
  imageUrl?: string;
}

export interface MatcherStepData {
  primaryConcern: string;
  desiredOutcome: string;
  therapyFormat: string;
  preferredStyle: string;
  genderPreference: string;
  urgency: string;
  userEmail: string;
  userName: string;
  userNote: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  inquiryType: 'Therapy Matching' | 'ThoughtPro App' | 'Corporate Wellness' | 'Clinical Partnership' | 'General Serenity Inquiry';
  preferredContactMethod: 'Email' | 'Phone' | 'Direct Consultation';
  message: string;
  mindfulStateAcknowledged: boolean;
}

export interface SoundAmbience {
  id: string;
  name: string;
  description: string;
  type: 'singing-bowl' | 'rain' | 'ocean' | 'breathe' | 'binaural-alpha' | 'binaural-theta' | 'binaural-delta';
  frequency?: number;
  beatFrequency?: number;
}
