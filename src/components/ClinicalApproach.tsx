import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clinicalStandards, clientReflections, faqItems } from '../data/therapyData';
import { ShieldCheck, Brain, HeartPulse, Sparkles, ChevronDown, Check, X } from 'lucide-react';

export const ClinicalApproach: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="clinical-approach" className="py-20 sm:py-28 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
            Scientific Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2 mb-4">
            Evidence-based rigor. Natural human warmth.
          </h2>
          <p className="text-base sm:text-lg text-[#616560] leading-relaxed">
            ThoughtHealer is built upon decades of peer-reviewed clinical psychology. We combine proven cognitive interventions with serene, distraction-free technology.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clinicalStandards.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F7F8F5] border border-[#E7EAE3] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-semibold text-[#25392D] tracking-tight">
                    {item.metric}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-[#6B8475] font-semibold mt-0.5">
                    {item.unit}
                  </p>
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B5E5A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: ThoughtHealer vs Typical Wellness Apps */}
        <div className="mb-24 rounded-3xl bg-white border border-[#E3E8E1] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
              How ThoughtHealer differs by design
            </h3>
            <p className="text-xs sm:text-sm text-[#666] mt-2">
              We eliminated the addictive gamification and algorithmic pressure common in consumer apps.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80">
                  <th className="pb-4 font-semibold text-[#222] pl-2">Experience Dimension</th>
                  <th className="pb-4 font-semibold text-[#243E30] bg-[#EFF4F0] px-4 rounded-t-xl">
                    ThoughtHealer Sanctuary
                  </th>
                  <th className="pb-4 font-semibold text-[#888] px-4">Typical Consumer Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="py-4 pl-2 font-medium text-[#333]">Clinical Foundation</td>
                  <td className="py-4 px-4 bg-[#EFF4F0] text-[#1E3326] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3C644B]" />
                    Licensed Ph.D./Psy.D. CBT & REBT Protocols
                  </td>
                  <td className="py-4 px-4 text-[#777]">Generic AI chat or unqualified life tips</td>
                </tr>
                <tr>
                  <td className="py-4 pl-2 font-medium text-[#333]">User Engagement Design</td>
                  <td className="py-4 px-4 bg-[#EFF4F0] text-[#1E3326] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3C644B]" />
                    Zero pressure: Quiet, calm, asynchronous
                  </td>
                  <td className="py-4 px-4 text-[#777]">Guilt-inducing streak badges & push alarms</td>
                </tr>
                <tr>
                  <td className="py-4 pl-2 font-medium text-[#333]">Privacy & Advertising</td>
                  <td className="py-4 px-4 bg-[#EFF4F0] text-[#1E3326] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3C644B]" />
                    100% Ad-Free, Private & Secure Healthcare Standards
                  </td>
                  <td className="py-4 px-4 text-[#777]">Third-party advertising & behavioral tracking</td>
                </tr>
                <tr>
                  <td className="py-4 pl-2 font-medium text-[#333]">Direct Human Connection</td>
                  <td className="py-4 px-4 bg-[#EFF4F0] text-[#1E3326] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3C644B]" />
                    Real matching with vetted licensed therapists
                  </td>
                  <td className="py-4 px-4 text-[#777]">Automated bots without clinical accountability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Testimonials / Patient Reflections */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
              Quiet Reflections
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1">
              Words from those who found calm
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReflections.map((ref, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#F7F8F5] border border-[#E7ECE4] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EBF2EC] text-[#2C4A37] mb-4">
                    {ref.tag}
                  </span>
                  <p className="text-sm sm:text-base text-[#3A3E3B] font-serif-calm italic leading-relaxed">
                    "{ref.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-200/50 mt-6">
                  <p className="text-sm font-semibold text-[#1D1D1F]">{ref.author}</p>
                  <p className="text-xs text-[#737373]">{ref.role}</p>
                  <p className="text-[11px] text-[#557763] font-medium mt-0.5">{ref.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
              Clarity & Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1">
              Frequently asked questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#F8F9F7] border border-[#E6EAE3] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between text-sm sm:text-base font-medium text-[#1D1D1F]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#777] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#2B4434]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-[#555855] leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
