import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle2, ArrowRight, Smartphone, Sparkles, BookOpen, Heart, Users, Activity } from 'lucide-react';

interface ProgramsShowcaseProps {
  onOpenDownload: () => void;
  onOpenMatcher: () => void;
}

export const ProgramsShowcase: React.FC<ProgramsShowcaseProps> = ({
  onOpenDownload,
  onOpenMatcher,
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState(siteConfig.programs[0].id);

  const activeProgram = siteConfig.programs.find((p) => p.id === selectedProgramId) || siteConfig.programs[0];

  const getIconForProgram = (id: string) => {
    switch (id) {
      case 'thoughtpro':
        return <Activity className="w-4 h-4 text-[#3F5849]" />;
      case 'hermind':
        return <Heart className="w-4 h-4 text-[#6A584A]" />;
      case 'miniminds':
        return <Users className="w-4 h-4 text-[#4B6172]" />;
      case 'les':
        return <Sparkles className="w-4 h-4 text-[#566453]" />;
      case 'b2b':
        return <BookOpen className="w-4 h-4 text-[#3A4D59]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#3F5849]" />;
    }
  };

  return (
    <section id="programs-showcase" className="py-20 sm:py-28 bg-[#F5F6F3]/60 border-y border-[#EAECE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
            Tailored Psychological Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2 mb-4">
            Designed for every stage of healing.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Mental health is never one-size-fits-all. ThoughtHealer develops specialized clinical platforms crafted for specific emotional landscapes and cognitive needs.
          </p>
        </div>

        {/* Apple-style Segmented Control Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex p-1.5 rounded-full bg-[#EAECE7] border border-[#DEE2DB] shadow-inner gap-1">
            {siteConfig.programs.map((program) => {
              const isSelected = program.id === selectedProgramId;
              return (
                <button
                  key={program.id}
                  id={`program-tab-${program.id}`}
                  onClick={() => setSelectedProgramId(program.id)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'text-[#1D1D1F]'
                      : 'text-[#616560] hover:text-[#1D1D1F]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProgramPill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {getIconForProgram(program.id)}
                    {program.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Program Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E6DF] shadow-[0_8px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EDF3EF] text-[#2F4738] border border-[#D5E1D9]">
                    {activeProgram.badge}
                  </span>
                  <span className="text-xs text-[#737373]">
                    Focus: {activeProgram.targetAudience}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                    {activeProgram.name}
                  </h3>
                  <p className="text-sm font-medium text-[#4D6756] mt-1">
                    Anchored in {activeProgram.evidenceBase}
                  </p>
                </div>

                <p className="text-base text-[#4F5350] leading-relaxed">
                  {activeProgram.description}
                </p>

                {/* Key feature bullets */}
                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-3">
                    Core Clinical Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProgram.keyFeatures.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] text-xs sm:text-sm text-[#2D332F]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3E5C49] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenDownload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#22352A] text-white hover:bg-[#16241C] transition-all shadow-sm"
                  >
                    <Smartphone className="w-4 h-4 text-[#A8C8B6]" />
                    <span>Get {activeProgram.name}</span>
                  </button>

                  <button
                    onClick={onOpenMatcher}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#384F40] hover:text-[#18281F] bg-[#EFF4F0] hover:bg-[#E2EBE4] transition-colors"
                  >
                    <span>Match with a {activeProgram.name} Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Visual Representation (Apple-style clean mockup container) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-[32px] p-4 bg-[#F2F4F0] border border-[#DEE4DC] shadow-inner">
                  {/* Phone frame simulation */}
                  <div className="rounded-[26px] bg-[#FAFBF9] border border-[#D5DCD2] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] space-y-4">
                    {/* Status bar */}
                    <div className="flex items-center justify-between text-[11px] text-[#888] pb-1 border-b border-neutral-100">
                      <span>9:41 AM</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#466953]"></span>
                        <span className="font-mono text-[10px]">Private & Encrypted</span>
                      </div>
                    </div>

                    {/* App mini view */}
                    <div className="space-y-3">
                      <div className="p-3 rounded-2xl bg-[#EDF3EE] border border-[#DAE5DC]">
                        <span className="text-[10px] uppercase font-semibold text-[#446250]">
                          Morning Reflection
                        </span>
                        <p className="text-xs font-medium text-[#1E2E24] mt-0.5">
                          "Notice what you are holding. You have permission to put it down."
                        </p>
                      </div>

                      {/* Interactive thought reframe preview */}
                      <div className="p-3 rounded-2xl bg-white border border-[#E4EAE2] space-y-2">
                        <div className="text-[11px] font-medium text-[#333] flex justify-between">
                          <span>Cognitive Reframing</span>
                          <span className="text-[10px] text-[#698B75]">CBT Step 2 of 4</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#F8F9F7] text-[11px] text-[#666] italic">
                          "I will never finish everything on time today..."
                        </div>
                        <div className="p-2 rounded-xl bg-[#EAF2ED] text-[11px] text-[#22382A] font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3F614C] shrink-0" />
                          <span>"I am taking one measured step right now."</span>
                        </div>
                      </div>

                      {/* Session indicator */}
                      <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EDECE4] flex items-center justify-between text-xs">
                        <div>
                          <p className="font-medium text-[#32312D]">Therapist Telehealth</p>
                          <p className="text-[10px] text-[#88867E]">Today • 4:00 PM PST</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#E7E5DA] text-[#444238]">
                          Confirmed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
