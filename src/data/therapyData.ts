import { Therapist, TeamMember } from '../types';

export const foundersList: TeamMember[] = [
  {
    id: 'sandeep-jagtap',
    name: 'Dr. Sandeep Jagtap',
    role: 'Co-Founder & Clinical Director',
    category: 'Founder',
    qualifications: 'MBBS, DPM (Psychiatry)',
    bio: 'Consultant psychiatrist with over two decades of psychiatric and clinical counseling experience. Dedicated to bridging clinical psychiatric rigor with accessible, stigma-free digital cognitive therapy.',
    initials: 'SJ',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    focus: ['Clinical Psychiatry', 'CBT Protocols', 'Crisis Prevention', 'Evidence-Based Care']
  },
  {
    id: 'swati-jagtap',
    name: 'Dr. Swati Jagtap',
    role: 'Co-Founder & Director of Clinical Wellbeing',
    category: 'Founder',
    qualifications: 'Medical Doctor & Wellbeing Strategist',
    bio: 'Pioneered the HerMind initiative at ThoughtHealer, focusing on women’s emotional balance, hormonal health, and compassionate clinical care through all life phases.',
    initials: 'SJ',
    imageUrl: 'https://images.unsplash.com/photo-1594824813501-4837e15e4c55?w=400&auto=format&fit=crop&q=80',
    focus: ['Women’s Emotional Health', 'HerMind Initiative', 'Integrative Care', 'Patient Advocacy']
  },
  {
    id: 'dipesh-walte',
    name: 'Dr. Dipesh Walte',
    role: 'Co-Founder & Chief Product Officer',
    category: 'Founder',
    qualifications: 'Knowledge Management Researcher & Ideapreneur',
    bio: 'Founder of the Edubuntu Initiative and digital wellness architect. Leads cognitive product design at Synept Labs, crafting mindful interfaces for neurodivergent and adult learners.',
    initials: 'DW',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    focus: ['Digital Health Architecture', 'Neurodiversity LES', 'Cognitive UX', 'Community Wellbeing']
  }
];

export const clinicalPsychologists: TeamMember[] = [
  {
    id: 'prajakta-gosavi',
    name: 'Prajakta Gosavi',
    role: 'Clinical Psychologist',
    category: 'Clinical Psychologist',
    qualifications: 'M.A., Clinical Psychology',
    bio: 'Specializes in Cognitive Behavioral Therapy (CBT), anxiety management, and cognitive restructuring for adults and adolescents facing chronic stress and rumination.',
    initials: 'PG',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    focus: ['CBT & REBT', 'Anxiety & Panic', 'Emotional Regulation', 'Mindful Reflection']
  },
  {
    id: 'madhuri-solanki',
    name: 'Madhuri Solanki',
    role: 'Counseling Psychologist',
    category: 'Clinical Psychologist',
    qualifications: 'M.Sc., Counseling Psychology',
    bio: 'Clinical focus on youth mental health, emotional literacy, and parent-child co-regulation within the MiniMinds and ThoughtPro programs.',
    initials: 'MS',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
    focus: ['Youth Wellness', 'MiniMinds Lead', 'Mindfulness Training', 'Relationship Support']
  },
  {
    id: 'smita-gosavi',
    name: 'Smita Gosavi',
    role: 'Senior Psychotherapist & Counselor',
    category: 'Clinical Psychologist',
    qualifications: 'Senior Psychological Counselor',
    bio: 'Extensive counseling experience guiding individuals and families through difficult life transitions, grief, and cognitive distortions with deep clinical empathy.',
    initials: 'SG',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80',
    focus: ['Family Counseling', 'Life Transitions', 'CBT Practices', 'Stress De-escalation']
  }
];

export const therapistsDirectory: Therapist[] = [
  {
    id: 'therapist-prajakta',
    name: 'Prajakta Gosavi',
    credentials: 'Consultant Clinical Psychologist',
    specialties: ['Anxiety & Panic', 'Cognitive Restructuring', 'Overthinking', 'Stress Relief'],
    bio: 'Clinical psychologist focusing on structured CBT and emotional regulation. Guides clients to identify irrational thought patterns and build calm mental resilience.',
    modalities: ['CBT', 'REBT', 'Somatic Mindfulness'],
    availableNext: 'Available this week',
    sessionTypes: ['Online Consultation', 'One-on-One Session', 'Thought Record Review'],
    avatarInitial: 'PG',
    avatarBg: 'bg-[#E3ECE7] text-[#243E30]',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'therapist-madhuri',
    name: 'Madhuri Solanki',
    credentials: 'Counseling Psychologist & Therapist',
    specialties: ['Youth Mental Wellness', 'Mindfulness', 'Emotional Literacy', 'Burnout'],
    bio: 'Specialist in adolescent and adult emotional guidance, blending compassionate listening with practical behavioral tools for sustainable inner calm.',
    modalities: ['Mindfulness-Based Counseling', 'Behavioral Therapy', 'MiniMinds Method'],
    availableNext: 'Available this week',
    sessionTypes: ['Individual Consultation', 'Parent-Youth Guidance'],
    avatarInitial: 'MS',
    avatarBg: 'bg-[#EFE9E2] text-[#4A3B2C]',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'therapist-smita',
    name: 'Smita Gosavi',
    credentials: 'Senior Psychological Counselor',
    specialties: ['Cognitive Reframing', 'Women’s Health', 'Life Transitions', 'Relationship Dynamics'],
    bio: 'Senior counselor supporting individuals through life stress, emotional exhaustion, and cognitive distortions using personalized therapeutic dialogues.',
    modalities: ['CBT Approaches', 'Rational Emotive Therapy', 'Compassionate Inquiry'],
    availableNext: 'Available this week',
    sessionTypes: ['Online Consultation', 'Follow-up Check-in'],
    avatarInitial: 'SG',
    avatarBg: 'bg-[#E4EAEF] text-[#243A4B]',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'therapist-sandeep',
    name: 'Dr. Sandeep Jagtap',
    credentials: 'MBBS, DPM (Psychiatry) • Clinical Director',
    specialties: ['Clinical Evaluation', 'Severe Stress & Rumination', 'Mood Disorders', 'Holistic Care'],
    bio: 'Founder and clinical director guiding comprehensive diagnostic consultations and evidence-based mental wellness protocols.',
    modalities: ['Clinical Psychiatry', 'Cognitive Restructuring', 'Integrated Medical Care'],
    availableNext: 'By Clinical Referral & Schedule',
    sessionTypes: ['Clinical Consultation', 'Diagnostic Assessment'],
    avatarInitial: 'SJ',
    avatarBg: 'bg-[#E9EAE3] text-[#3B3F26]',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80'
  }
];

export const clientReflections = [
  {
    quote: "ThoughtHealer gives you a dedicated space where your thoughts can finally slow down. The combination of thought restructuring and clinical guidance is genuinely grounded.",
    author: "Aditi S.",
    role: "Working Professional",
    tag: "ThoughtPro & Counseling",
    duration: "Therapy with Prajakta Gosavi"
  },
  {
    quote: "HerMind provided a gentle, culturally sensitive sanctuary for postpartum emotional balance. Dr. Swati and the counseling team bring true empathy.",
    author: "Neha R.",
    role: "Educator",
    tag: "HerMind Program",
    duration: "Therapy with Smita Gosavi"
  },
  {
    quote: "The Learning Enhancement approach helped me understand executive overwhelm without self-blame. It works with your brain rather than fighting it.",
    author: "Karan M.",
    role: "Engineering Researcher",
    tag: "Neurodiversity LES",
    duration: "Cognitive Program"
  }
];

export const clinicalStandards = [
  {
    title: "Qualified Clinical Specialists",
    desc: "Every practitioner on our team holds verified clinical qualifications in psychiatry, clinical psychology, or counseling.",
    metric: "Licensed",
    unit: "Mental Health Specialists"
  },
  {
    title: "Evidence-Based Modalities",
    desc: "Our interventions are rooted in proven Cognitive Behavioral Therapy (CBT) and Rational Emotive Behavior Therapy (REBT).",
    metric: "CBT & REBT",
    unit: "Structured Interventions"
  },
  {
    title: "Pure Focus on Well-Being",
    desc: "ThoughtHealer products are built for personal healing without invasive tracking, ads, or artificial engagement traps.",
    metric: "Ad-Free",
    unit: "Distraction-Free Environment"
  },
  {
    title: "Confidentiality & Privacy",
    desc: "Your consultations and personal reflections remain strictly confidential between you and your licensed professional.",
    metric: "Private",
    unit: "Safe Sanctuary"
  }
];

export const faqItems = [
  {
    q: "How does ThoughtHealer support my mental wellness?",
    a: "ThoughtHealer offers both professional one-on-one psychological counseling and self-guided cognitive tools (ThoughtPro, MiniMinds, HerMind). We focus on cognitive restructuring (CBT & REBT) to help you understand and reframe unhelpful thought cycles."
  },
  {
    q: "How does the therapist matching process work?",
    a: "You share your primary area of focus and preferred style through our matching form. Our clinical team reviews your preferences and pairs you with an appropriate psychologist from our team."
  },
  {
    q: "Can I use the ThoughtPro app independently?",
    a: "Yes. ThoughtPro, HerMind, and MiniMinds offer self-guided exercises, thought reframing tools, and mindful practices that can be used on your own or alongside professional sessions."
  },
  {
    q: "Who are the professionals behind ThoughtHealer?",
    a: "ThoughtHealer was founded by Dr. Sandeep Jagtap (Psychiatrist), Dr. Swati Jagtap (Doctor & Wellbeing Director), and Dr. Dipesh Walte (Product & Knowledge Management Researcher), supported by qualified clinical psychologists including Prajakta Gosavi, Madhuri Solanki, and Smita Gosavi."
  }
];
