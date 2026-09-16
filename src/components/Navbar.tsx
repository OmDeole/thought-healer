import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Sparkles, Menu, X, ArrowUpRight, HeartHandshake, Volume2, VolumeX } from 'lucide-react';
import { ActiveTab } from '../types';
import { siteConfig } from '../config/siteConfig';
import { calmingAudio } from '../utils/audioSynth';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenMatcher: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenMatcher,
  onOpenDownload,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      calmingAudio.playSingingBowl(432);
    } else {
      calmingAudio.stopAll();
    }
  };

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Sanctuary' },
    { id: 'about', label: 'Founders & Team' },
    { id: 'programs', label: 'Programs' },
    { id: 'sanctuary', label: 'Binaural & Tools' },
    { id: 'approach', label: 'Evidence & Method' },
    { id: 'matcher', label: 'Therapist Directory' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBF9]/85 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]'
          : 'bg-[#FBFBF9]/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brandmark */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          {/* Calm organic mark */}
          <div className="w-8 h-8 rounded-full bg-[#EBF1EE] border border-[#D5DFD9] flex items-center justify-center text-[#2D4036] transition-transform duration-300 group-hover:scale-105">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3F5849] animate-pulse"></span>
          </div>
          <div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#1D1D1F] flex items-center gap-1.5">
              {siteConfig.siteName}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#737373] hidden sm:block font-medium">
              Mindfulness & Clinical Care
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F0F0EC]/70 p-1.5 rounded-full border border-black/[0.04]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#1D1D1F]'
                    : 'text-[#666666] hover:text-[#1D1D1F]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Trigger */}
          <button
            id="ambient-sound-toggle-btn"
            onClick={toggleSound}
            title={soundEnabled ? 'Mute ambient chime' : 'Play peaceful chime'}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs text-[#525252] hover:text-[#1D1D1F] bg-[#F2F2EE] hover:bg-[#EBEBE6] transition-colors border border-black/[0.04]"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#3F5849] animate-pulse" />
                <span className="text-[11px]">Calm Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#737373]" />
                <span className="text-[11px] text-[#737373]">Chime</span>
              </>
            )}
          </button>

          {/* Download App CTA */}
          <button
            id="nav-download-app-btn"
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2C2C2E] bg-[#F0F0EB] hover:bg-[#E6E6DF] border border-black/[0.06] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5 text-[#4D4D4F]" />
            <span>Download App</span>
          </button>

          {/* Get Matched Primary CTA */}
          <button
            id="nav-get-matched-btn"
            onClick={onOpenMatcher}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#1A2A21] shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#A3C3B1]" />
            <span>Get Matched</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#3A3A3C] hover:bg-[#F0F0EB] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FBFBF9] border-b border-neutral-200 px-6 py-5 shadow-xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#EBF1EE] text-[#243E30] font-semibold'
                      : 'text-[#4A4A4D] hover:bg-[#F2F2ED]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200/70 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMatcher();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#243E30] text-white text-sm font-medium shadow-sm"
              >
                <HeartHandshake className="w-4 h-4 text-[#A8C7B5]" />
                Get Matched with a Therapist
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F0F0EB] text-[#2C2C2E] text-sm font-medium border border-black/[0.06]"
              >
                <Download className="w-4 h-4 text-[#555]" />
                Download Mobile App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
