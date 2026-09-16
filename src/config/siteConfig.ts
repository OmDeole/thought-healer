/**
 * ThoughtHealer — Site Configuration & Content Center
 * 
 * Authentic configuration aligned with ThoughtHealer & Synept Labs
 */

export interface SiteConfig {
  siteName: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  
  contactEmail: string;
  secondaryEmail: string;
  phoneDisplay: string;
  phoneDirect: string;
  headquartersAddress: string;

  socialLinks: {
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    threads: string;
    spotifyPodcast: string;
  };

  appStore: {
    iosUrl: string;
    androidUrl: string;
    iosRating: string;
    androidRating: string;
    totalDownloads: string;
  };

  programs: Array<{
    id: string;
    name: string;
    targetAudience: string;
    badge: string;
    description: string;
    keyFeatures: string[];
    evidenceBase: string;
    accentColor: string;
  }>;

  therapyFocusAreas: string[];
}

export const siteConfig: SiteConfig = {
  siteName: "ThoughtHealer",
  shortName: "ThoughtHealer",
  tagline: "Serene Minds. Evidence-Based Healing.",
  heroHeadline: "Calm your thoughts. Heal your inner world.",
  heroSubheadline: "Experience a quiet sanctuary for mental clarity. ThoughtHealer unites licensed clinical psychologists, mindful neuroscience, and personalized cognitive tools designed for lasting tranquility.",
  
  contactEmail: "connect@thoughthealer.org",
  secondaryEmail: "care@thoughthealer.org",
  phoneDisplay: "+91 (020) 2567-8890",
  phoneDirect: "tel:+912025678890",
  headquartersAddress: "ThoughtHealer & Synept Labs, Pune, Maharashtra, India",

  socialLinks: {
    instagram: "https://instagram.com/thoughthealer",
    twitter: "https://x.com/thoughthealer",
    linkedin: "https://linkedin.com/company/thoughthealer",
    youtube: "https://youtube.com/@thoughthealer",
    threads: "https://threads.net/@thoughthealer",
    spotifyPodcast: "https://open.spotify.com/show/thoughthealer",
  },

  appStore: {
    iosUrl: "https://apps.apple.com/app/thoughtpro/id1640000000",
    androidUrl: "https://play.google.com/store/apps/details?id=com.syneptlab.thoughtpro",
    iosRating: "ThoughtPro for iOS",
    androidRating: "ThoughtPro for Android",
    totalDownloads: "Synept Labs Digital Care",
  },

  programs: [
    {
      id: "thoughtpro",
      name: "ThoughtPro",
      targetAudience: "Adults & Working Minds",
      badge: "Flagship App",
      description: "Structured cognitive restructuring grounded in CBT and REBT. Unravel cycles of anxiety, overthinking, and burn-out through quiet, step-by-step reflection.",
      keyFeatures: [
        "Interactive CBT Thought Record & Reframing",
        "Mindful Screen Time & Scroll-Intervention",
        "Somatic Breathwork & Binaural Audio Grounding",
        "Private Confidential Reflection Journal"
      ],
      evidenceBase: "Cognitive Behavioral Therapy (CBT) & REBT",
      accentColor: "#3F5849"
    },
    {
      id: "hermind",
      name: "HerMind",
      targetAudience: "Women's Health & Hormonal Balance",
      badge: "Specialized Care",
      description: "A tailored sanctuary supporting emotional well-being across life transitions — including postpartum mood support, hormonal fluctuations, PCOS/PCOD, and deep restorative sleep.",
      keyFeatures: [
        "Hormone-aligned mindful pacing",
        "Postpartum anxiety & identity support",
        "Pelvic somatic releases & restorative meditations",
        "Compassionate clinical check-ins"
      ],
      evidenceBase: "Trauma-Informed CBT & Mind-Body Endocrinology",
      accentColor: "#6A584A"
    },
    {
      id: "miniminds",
      name: "MiniMinds",
      targetAudience: "Children & Teens (Ages 6-17)",
      badge: "Youth Wellness",
      description: "Gentle emotional literacy, neurodivergent emotional co-regulation, and compassionate parental guidance crafted by developmental child psychologists.",
      keyFeatures: [
        "Play-based cognitive games & feelings wheel",
        "Safe digital boundary guidance",
        "Parent co-regulation dashboards",
        "Calming bedtime soundscapes"
      ],
      evidenceBase: "Developmental Psychology & Play Therapy",
      accentColor: "#4B6172"
    },
    {
      id: "les",
      name: "Learning Enhancement (LES)",
      targetAudience: "Neurodivergent Minds",
      badge: "Neurodiversity Support",
      description: "Bespoke cognitive solutions for ADHD, Dyslexia, Dyscalculia, and executive function overwhelm, focusing on strengths rather than deficits.",
      keyFeatures: [
        "Sensory-friendly low stimulation pacing",
        "Executive functioning micro-habits",
        "Visual task chunking without timer pressure",
        "Specialist coach integration"
      ],
      evidenceBase: "Applied Neuroscience & Neurodiversity Affirming Care",
      accentColor: "#566453"
    },
    {
      id: "b2b",
      name: "ThoughtPro Workplace",
      targetAudience: "Teams & Organizations",
      badge: "Enterprise Care",
      description: "Confidential, stigma-free organizational wellness designed to mitigate employee exhaustion and foster psychological safety across remote and hybrid teams.",
      keyFeatures: [
        "Confidential therapist consultation credits",
        "Proactive burnout prevention analytics",
        "Live asynchronous micro-workshops",
        "Dedicated corporate wellness concierge"
      ],
      evidenceBase: "Organizational Psychology & Preventative Mental Health",
      accentColor: "#3A4D59"
    }
  ],

  therapyFocusAreas: [
    "Anxiety & Panic Relief",
    "Overthinking & Racing Mind",
    "Depression & Low Energy",
    "Sleep Restoration & Insomnia",
    "Life Transitions & Emotional Balance",
    "ADHD & Executive Focus",
    "Women's Emotional Health",
    "Relationship & Attachment Therapy",
    "Mindfulness & Stress Resilience"
  ]
};
