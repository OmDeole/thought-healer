import React from 'react';
import { motion } from 'motion/react';
import { foundersList, clinicalPsychologists } from '../data/therapyData';
import { HeartHandshake, ShieldCheck, Sparkles, BookOpen, Stethoscope, ArrowUpRight } from 'lucide-react';

interface AboutUsProps {
  onOpenMatcher: () => void;
  onOpenContact: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenMatcher, onOpenContact }) => {
  return (
    <div id="about-us-view" className="py-20 sm:py-28 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
            Our Founders & Clinical Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2 mb-4">
            Founded by doctors. Guided by compassionate science.
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            ThoughtHealer was founded by Dr. Sandeep Jagtap, Dr. Swati Jagtap, and Dr. Dipesh Walte in association with Synept Labs. We believe that mental healthcare should be accessible, grounded in evidence-based cognitive science, and free of social stigma.
          </p>
        </div>

        {/* Mission Statement Callout */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#F6F7F4] border border-[#E3E7E0] max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5A7363]">
            Our Core Mission
          </span>
          <h2 className="text-xl sm:text-2xl font-medium text-[#1D1D1F] mt-2 mb-4 font-serif-calm italic">
            "To deliver affordable, evidence-based cognitive therapy and mindful digital tools that empower individuals, mothers, children, and neurodivergent minds to heal their inner world."
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-[#525552]">
            <div className="flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-[#3D5E49]" />
              <span>Medical & Psychiatric Leadership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#3D5E49]" />
              <span>Evidence-Based CBT & REBT</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#3D5E49]" />
              <span>Synept Labs Cognitive Research</span>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5A7363]">
              Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
              The Founders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foundersList.map((founder) => (
              <div
                key={founder.id}
                className="rounded-3xl bg-white border border-[#E2E7E0] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:border-[#CAD8CE] transition-all"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#EBF0EC] overflow-hidden">
                    <img
                      src={founder.imageUrl}
                      alt={founder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      onError={(e) => {
                        // fallback to monogram
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#243F2E] border border-black/[0.04]">
                      {founder.role}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#1D1D1F]">
                      {founder.name}
                    </h4>
                    <p className="text-xs font-medium text-[#466652] mb-3">
                      {founder.qualifications}
                    </p>
                    <p className="text-xs sm:text-sm text-[#555855] leading-relaxed mb-4">
                      {founder.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {founder.focus.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4F6F3] text-[#4A4E4B] border border-[#E5E9E2]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Psychology & Counseling Team */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5A7363]">
              Clinical Care
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
              Professional Psychologists & Therapists
            </h3>
            <p className="text-xs sm:text-sm text-[#666] mt-1">
              Our clinical counseling team guides individuals through anxiety, stress, emotional literacy, and life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinicalPsychologists.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-white border border-[#E2E7E0] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:border-[#CAD8CE] transition-all"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-60 w-full bg-[#EFF3F0] overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#243F2E] border border-black/[0.04]">
                      {member.role}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#1D1D1F]">
                      {member.name}
                    </h4>
                    <p className="text-xs font-medium text-[#466652] mb-3">
                      {member.qualifications}
                    </p>
                    <p className="text-xs sm:text-sm text-[#555855] leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((f, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4F6F3] text-[#4A4E4B] border border-[#E5E9E2]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Meet or Match */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F6F3] border border-[#E1E6DE] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1D1D1F]">
              Ready to begin your therapeutic journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#666] mt-1">
              Connect with our clinical team or inquire about one-on-one counseling sessions.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenMatcher}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#16261D] transition-colors shadow-sm"
            >
              Consult with Our Team
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#294233] bg-white border border-[#D3DDD6] hover:bg-[#F0F5F1] transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
