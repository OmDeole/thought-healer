import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Download, ChevronRight, Sparkles, Activity, Shield, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenMatcher: () => void;
  onOpenDownload: () => void;
  onExplorePrograms: () => void;
  onExploreSanctuary: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMatcher,
  onOpenDownload,
  onExplorePrograms,
  onExploreSanctuary,
}) => {
  return (
    <section id="hero-section" className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle organic ambient backlight (soft natural sage/stone, strictly zero purple gradients) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[460px] bg-gradient-to-b from-[#EBF2EE]/60 via-[#F3F5F1]/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF3F0] border border-[#DCE4DF] text-xs text-[#2A4032] font-medium shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3F5849]"></span>
            <span>Evidence-Based Cognitive Health</span>
            <span className="text-[#889B8F] hidden sm:inline">•</span>
            <span className="text-[#4E6758] hidden sm:inline">ThoughtPro by Synept Labs</span>
          </motion.div>
        </div>

        {/* Main Title & Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]"
          >
            Calm your thoughts.{' '}
            <span className="font-serif-calm italic font-normal text-[#384F41]">
              Heal your inner world.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#5A5A5C] max-w-2xl mx-auto font-normal leading-relaxed"
          >
            A quiet sanctuary for mental clarity. ThoughtHealer brings together licensed psychological counseling, evidence-based cognitive therapy (CBT & REBT), and mindful self-care tools.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4"
          >
            {/* Primary CTA: Get Matched */}
            <button
              id="hero-get-matched-cta"
              onClick={onOpenMatcher}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-[#22352A] hover:bg-[#18281F] shadow-[0_4px_16px_rgba(34,53,42,0.18)] hover:shadow-[0_6px_20px_rgba(34,53,42,0.25)] transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <HeartHandshake className="w-4 h-4 text-[#A8C8B6]" />
              <span>Get Matched with a Therapist</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            {/* Secondary CTA: Download App */}
            <button
              id="hero-download-app-cta"
              onClick={onOpenDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#222224] bg-white hover:bg-[#F5F5F2] border border-[#DFDFD9] shadow-sm transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#444]" />
              <span>Download the App</span>
            </button>
          </motion.div>

          {/* Genuine Grounded Badges (All fake claims completely removed) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#666]"
          >
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#3F5849]" />
              <span>Founded by Dr. Sandeep Jagtap, Dr. Swati Jagtap & Dipesh Walte</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#3F5849]" />
              <span>Evidence-Based CBT & REBT Interventions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#3F5849]" />
              <span>Private & Respectful Clinical Sanctuary</span>
            </div>
          </motion.div>
        </div>

        {/* Clean Apple-style Highlights Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 sm:mt-18 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Card 1: One-on-One Counseling */}
          <div className="p-6 rounded-3xl bg-white border border-[#E3E8E0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-2xl bg-[#EBF1ED] text-[#284232] flex items-center justify-center font-medium">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F]">
                Personalized Therapy
              </h3>
              <p className="text-xs sm:text-sm text-[#5B605C] leading-relaxed">
                Connect directly with qualified clinical psychologists for structured, compassionate one-on-one sessions.
              </p>
            </div>
            <button
              onClick={onOpenMatcher}
              className="mt-4 text-xs font-medium text-[#2E4A38] hover:text-[#18281F] flex items-center gap-1 text-left"
            >
              <span>Consult therapist directory</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: ThoughtPro App */}
          <div className="p-6 rounded-3xl bg-white border border-[#E3E8E0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-2xl bg-[#EBF1ED] text-[#284232] flex items-center justify-center font-medium">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F]">
                ThoughtPro Digital Tools
              </h3>
              <p className="text-xs sm:text-sm text-[#5B605C] leading-relaxed">
                Evidence-based self-care tools: CBT thought records, mindful scroll intervention, and quiet daily reflection.
              </p>
            </div>
            <button
              onClick={onOpenDownload}
              className="mt-4 text-xs font-medium text-[#2E4A38] hover:text-[#18281F] flex items-center gap-1 text-left"
            >
              <span>Explore mobile app</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Interactive Browser Sanctuary */}
          <div className="p-6 rounded-3xl bg-white border border-[#E3E8E0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-2xl bg-[#EBF1ED] text-[#284232] flex items-center justify-center font-medium">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F]">
                Interactive Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[#5B605C] leading-relaxed">
                Synthesized binaural beats (Alpha/Theta/Delta), diaphragmatic breathwork, and interactive cognitive reframing.
              </p>
            </div>
            <button
              onClick={onExploreSanctuary}
              className="mt-4 text-xs font-medium text-[#2E4A38] hover:text-[#18281F] flex items-center gap-1 text-left"
            >
              <span>Open in-browser sanctuary</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
