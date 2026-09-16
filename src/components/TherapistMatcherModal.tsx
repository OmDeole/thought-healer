import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { therapistsDirectory } from '../data/therapyData';
import { Therapist } from '../types';
import { X, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Mail, Calendar } from 'lucide-react';

interface TherapistMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullMatcher?: () => void;
}

export const TherapistMatcherModal: React.FC<TherapistMatcherModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFullMatcher,
}) => {
  const [concern, setConcern] = useState(siteConfig.therapyFocusAreas[0]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedClinician, setSelectedClinician] = useState<Therapist>(therapistsDirectory[0]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#E3E8E1] z-10"
        >
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#737373] hover:text-[#111] hover:bg-[#F2F4EF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="text-center max-w-sm mx-auto mb-6">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF2ED] border border-[#D5E3DA] mx-auto flex items-center justify-center text-[#243E30] mb-2.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                  Get Matched with a Therapist
                </h3>
                <p className="text-xs text-[#666] mt-1">
                  Connect with a qualified clinical psychologist from our team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#444] mb-1.5">
                    What would you like support with?
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE2DA] bg-[#FAFBF9] text-xs sm:text-sm focus:outline-none focus:border-[#385945]"
                  >
                    {siteConfig.therapyFocusAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#444] mb-1.5">
                    Available Clinician
                  </label>
                  <div className="p-3 rounded-2xl bg-[#F6F8F5] border border-[#E0E5DE] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-[#E2ECE5] flex items-center justify-center font-bold text-xs shrink-0">
                        {selectedClinician.imageUrl ? (
                          <img
                            src={selectedClinician.imageUrl}
                            alt={selectedClinician.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className={`absolute inset-0 flex items-center justify-center font-bold text-xs ${selectedClinician.avatarBg} -z-10`}>
                          {selectedClinician.avatarInitial}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">{selectedClinician.name}</p>
                        <p className="text-[11px] text-[#555]">{selectedClinician.credentials}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#345942] font-medium bg-[#E6EFE9] px-2 py-0.5 rounded-full">
                      {selectedClinician.availableNext}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#444] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE2DA] bg-[#FAFBF9] text-xs sm:text-sm focus:outline-none focus:border-[#385945]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#444] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE2DA] bg-[#FAFBF9] text-xs sm:text-sm focus:outline-none focus:border-[#385945]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F6F8F5] border border-[#E4E8E1] text-[11px] text-[#555] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#395D47]" />
                    Safe Clinical Matching
                  </span>
                  <span className="text-[#395D47] font-medium">Confidential</span>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  {onNavigateToFullMatcher && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onNavigateToFullMatcher();
                      }}
                      className="text-xs text-[#5B7966] hover:text-[#1F3326] underline font-medium"
                    >
                      Open Full Questionnaire
                    </button>
                  )}

                  <button
                    type="submit"
                    className="ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#15251C] transition-colors"
                  >
                    <span>Request Match</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#EAF3ED] text-[#294B35] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">
                Match Request Received
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed max-w-sm mx-auto">
                Thank you, {clientName}. Your consultation request has been routed to our care team. A clinical psychologist will reach out to you shortly to schedule your session.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-2 rounded-full text-xs font-medium text-white bg-[#22352A] hover:bg-[#15251C]"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
