import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsShowcase } from './components/ProgramsShowcase';
import { ClinicalApproach } from './components/ClinicalApproach';
import { TherapistMatcher } from './components/TherapistMatcher';
import { TherapistMatcherModal } from './components/TherapistMatcherModal';
import { DownloadAppModal } from './components/DownloadAppModal';
import { InteractiveSanctuary } from './components/InteractiveSanctuary';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeartHandshake, Download } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isMatcherModalOpen, setIsMatcherModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1D1D1F] selection:bg-[#E5ECE7] selection:text-[#23352B]">
      {/* Apple-style floating header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenMatcher={() => setIsMatcherModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Dynamic View with Fluid Spring Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Hero
                onOpenMatcher={() => setIsMatcherModalOpen(true)}
                onOpenDownload={() => setIsDownloadModalOpen(true)}
                onExplorePrograms={() => handleTabChange('programs')}
              />
              <ProgramsShowcase
                onOpenDownload={() => setIsDownloadModalOpen(true)}
                onOpenMatcher={() => setIsMatcherModalOpen(true)}
              />
              <InteractiveSanctuary />
              <ClinicalApproach />
              <ContactSection />
            </motion.div>
          )}

          {activeTab === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pt-20 sm:pt-28"
            >
              <ProgramsShowcase
                onOpenDownload={() => setIsDownloadModalOpen(true)}
                onOpenMatcher={() => setIsMatcherModalOpen(true)}
              />
              <InteractiveSanctuary />
            </motion.div>
          )}

          {activeTab === 'approach' && (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pt-20 sm:pt-28"
            >
              <ClinicalApproach />
            </motion.div>
          )}

          {activeTab === 'matcher' && (
            <motion.div
              key="matcher"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pt-20 sm:pt-28"
            >
              <TherapistMatcher onDirectContact={() => handleTabChange('contact')} />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pt-20 sm:pt-28"
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Bottom Action Bar for Quick Mobile Access */}
      <div className="md:hidden fixed bottom-5 left-4 right-4 z-40">
        <div className="p-1.5 rounded-full bg-[#1D1D1F]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between gap-2">
          <button
            onClick={() => setIsMatcherModalOpen(true)}
            className="flex-1 py-2.5 px-4 rounded-full bg-[#2E4937] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#B2D6C0]" />
            <span>Match Therapist</span>
          </button>
          <button
            onClick={() => setIsDownloadModalOpen(true)}
            className="py-2.5 px-4 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>App</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenMatcher={() => setIsMatcherModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Overlays & Modals */}
      <TherapistMatcherModal
        isOpen={isMatcherModalOpen}
        onClose={() => setIsMatcherModalOpen(false)}
        onNavigateToFullMatcher={() => {
          setIsMatcherModalOpen(false);
          handleTabChange('matcher');
        }}
      />

      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
