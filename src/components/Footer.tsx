import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ActiveTab } from '../types';
import { Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenMatcher: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenMatcher,
  onOpenDownload,
}) => {
  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#F5F5F2] border-t border-[#E5E5DF] pt-16 pb-12 text-[#525252]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E0E0DA]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#E3EBE6] border border-[#C9D8CE] flex items-center justify-center text-[#284131]">
                <span className="w-2 h-2 rounded-full bg-[#395644]"></span>
              </div>
              <span className="font-semibold text-lg text-[#1D1D1F] tracking-tight">
                {siteConfig.siteName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#666] leading-relaxed max-w-sm">
              An evidence-based mental healthcare platform and cognitive therapy sanctuary. Bringing clinical psychiatric rigor and daily mindfulness to individuals, women, children, and neurodivergent minds.
            </p>
            <div className="text-xs text-[#52745E] font-medium flex items-center gap-1.5 pt-1">
              <Shield className="w-4 h-4 text-[#3C644B]" />
              <span>Private & Confidential • Synept Labs Research</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 text-xs">
            <p className="font-semibold text-xs uppercase tracking-wider text-[#1D1D1F]">
              Platform
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Sanctuary Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#1D1D1F] transition-colors font-medium text-[#264431]"
                >
                  Founders & Clinical Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('matcher')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Therapist Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('approach')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Evidence & Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Care Desk & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Suite */}
          <div className="space-y-3 text-xs">
            <p className="font-semibold text-xs uppercase tracking-wider text-[#1D1D1F]">
              Clinical Suite
            </p>
            <ul className="space-y-2">
              {siteConfig.programs.map((program) => (
                <li key={program.id}>
                  <button
                    onClick={() => handleNav('programs')}
                    className="hover:text-[#1D1D1F] transition-colors text-left"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenDownload}
                  className="hover:text-[#1D1D1F] font-medium text-[#294634] transition-colors flex items-center gap-1"
                >
                  <span>ThoughtPro Mobile App</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3 text-xs">
            <p className="font-semibold text-xs uppercase tracking-wider text-[#1D1D1F]">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors inline-flex items-center gap-1"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] transition-colors inline-flex items-center gap-1"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#787878]">
          <p>© {new Date().getFullYear()} ThoughtHealer Pvt. Ltd. & Synept Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => handleNav('about')} className="hover:underline">
              Founders: Dr. Sandeep Jagtap, Dr. Swati Jagtap & Dipesh Walte
            </button>
            <button onClick={() => handleNav('contact')} className="hover:underline">
              Confidentiality & Privacy
            </button>
            <button onClick={() => handleNav('approach')} className="hover:underline">
              Clinical Guidelines
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
