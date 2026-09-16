import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { therapistsDirectory } from '../data/therapyData';
import { Therapist, MatcherStepData } from '../types';
import { HeartHandshake, CheckCircle2, ArrowRight, ArrowLeft, Shield, Calendar, Mail, Sparkles, UserCheck } from 'lucide-react';

interface TherapistMatcherProps {
  onDirectContact: (topic: string) => void;
}

export const TherapistMatcher: React.FC<TherapistMatcherProps> = ({ onDirectContact }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<MatcherStepData>({
    primaryConcern: siteConfig.therapyFocusAreas[0],
    desiredOutcome: 'Cultivate calmness and overcome racing thoughts',
    therapyFormat: 'Video Telehealth',
    preferredStyle: 'Cognitive Behavioral Therapy (CBT & REBT)',
    genderPreference: 'No preference',
    urgency: 'Within the next 48 hours',
    userEmail: '',
    userName: '',
    userNote: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  const concernOptions = siteConfig.therapyFocusAreas;

  const styleOptions = [
    { title: 'Cognitive Behavioral Therapy (CBT)', desc: 'Identify distortions and reframe unhelpful thought patterns.' },
    { title: 'Rational Emotive Therapy (REBT)', desc: 'Challenge irrational beliefs and build emotional resilience.' },
    { title: 'Somatic & Mindfulness (MBCT)', desc: 'Calm the physical nervous system through vagus nerve and breath awareness.' },
    { title: 'Neurodiversity-Affirming', desc: 'Customized strategies for ADHD, sensory balance, and executive functioning.' },
  ];

  const formatOptions = [
    { label: 'Video Telehealth', desc: 'Face-to-face encrypted private virtual room' },
    { label: 'Encrypted Audio Sanctuary', desc: 'Voice-only session for reduced sensory fatigue' },
    { label: 'Flexible Hybrid', desc: 'Combination of live sessions & asynchronous check-ins' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userEmail) return;

    // Direct intake notification formatted for siteConfig.contactEmail
    setIsSubmitted(true);
  };

  const handleBookWithTherapist = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setStep(4);
  };

  return (
    <section id="therapist-matcher-section" className="py-20 sm:py-28 bg-[#F8F9F6] border-t border-[#E8ECE4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2ED] text-[#284534] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#D5E4D9]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Care Navigation Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Get matched with your dedicated therapist.
          </h2>
          <p className="text-sm sm:text-base text-[#616560] mt-3">
            Answer 3 quiet questions to be thoughtfully paired with a licensed clinical psychologist matched to your goals and pace.
          </p>
        </div>

        {/* Step Progress Pills */}
        {!isSubmitted && (
          <div className="max-w-md mx-auto mb-10 flex items-center justify-between text-xs text-[#777]">
            <span className={`font-medium ${step >= 1 ? 'text-[#22352A]' : ''}`}>
              1. Your Focus
            </span>
            <span className="w-8 h-px bg-neutral-300"></span>
            <span className={`font-medium ${step >= 2 ? 'text-[#22352A]' : ''}`}>
              2. Approach
            </span>
            <span className="w-8 h-px bg-neutral-300"></span>
            <span className={`font-medium ${step >= 3 ? 'text-[#22352A]' : ''}`}>
              3. Clinicians
            </span>
            <span className="w-8 h-px bg-neutral-300"></span>
            <span className={`font-medium ${step >= 4 ? 'text-[#22352A]' : ''}`}>
              4. Reserve
            </span>
          </div>
        )}

        {/* Matcher Box */}
        <div className="rounded-3xl bg-white border border-[#E3E8E1] p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          {!isSubmitted ? (
            <div>
              {/* STEP 1: Focus Area */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
                      What feels most present for you right now?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666] mt-1">
                      Select the primary area you would like to explore or heal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {concernOptions.map((concern) => {
                      const isSelected = formData.primaryConcern === concern;
                      return (
                        <button
                          key={concern}
                          type="button"
                          onClick={() => setFormData({ ...formData, primaryConcern: concern })}
                          className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all border ${
                            isSelected
                              ? 'bg-[#EFF5F1] text-[#1F3A2A] border-[#395C46] shadow-sm'
                              : 'bg-[#FAFBF9] text-[#3E423F] border-[#E5E9E2] hover:bg-[#F2F5F1]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{concern}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-[#395C46]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#17271E] transition-colors"
                    >
                      <span>Continue to Modalities</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Modality & Style */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
                      Preferred therapeutic approach & format
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666] mt-1">
                      Every modality is anchored in verified clinical science.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#666] block mb-2">
                        Clinical Orientation
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {styleOptions.map((opt) => {
                          const isSelected = formData.preferredStyle === opt.title;
                          return (
                            <button
                              key={opt.title}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredStyle: opt.title })}
                              className={`p-4 rounded-2xl text-left transition-all border ${
                                isSelected
                                  ? 'bg-[#EFF5F1] border-[#395C46] text-[#1F3A2A]'
                                  : 'bg-[#FAFBF9] border-[#E5E9E2] text-[#333] hover:bg-[#F2F5F1]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-xs sm:text-sm">{opt.title}</span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#395C46]" />}
                              </div>
                              <p className="text-xs text-[#666] leading-relaxed">{opt.desc}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#666] block mb-2">
                        Session Atmosphere
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {formatOptions.map((f) => {
                          const isSelected = formData.therapyFormat === f.label;
                          return (
                            <button
                              key={f.label}
                              type="button"
                              onClick={() => setFormData({ ...formData, therapyFormat: f.label })}
                              className={`p-3.5 rounded-2xl text-left border text-xs transition-all ${
                                isSelected
                                  ? 'bg-[#EFF5F1] border-[#395C46] text-[#1F3A2A] font-medium'
                                  : 'bg-[#FAFBF9] border-[#E5E9E2] text-[#444] hover:bg-[#F2F5F1]'
                              }`}
                            >
                              <p className="font-semibold text-xs sm:text-sm">{f.label}</p>
                              <p className="text-[11px] text-[#666] mt-0.5">{f.desc}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#666] hover:text-[#1D1D1F]"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#17271E] transition-colors"
                    >
                      <span>View Matched Clinicians</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Curated Matches Preview */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
                        We matched 4 licensed specialists for you
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666] mt-0.5">
                        Selected based on: <span className="font-medium text-[#2F4E3C]">{formData.primaryConcern}</span> & {formData.preferredStyle}
                      </p>
                    </div>
                    <span className="text-xs text-[#557763] font-medium bg-[#EBF2EC] px-3 py-1 rounded-full self-start">
                      Next available: Today & Tomorrow
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {therapistsDirectory.map((therapist) => (
                      <div
                        key={therapist.id}
                        className="p-5 rounded-3xl bg-[#FAFBF9] border border-[#E4E8E1] flex flex-col justify-between hover:border-[#BFD3C5] transition-all"
                      >
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-[#E7EEE9] shrink-0 border border-black/[0.04]">
                              {therapist.imageUrl ? (
                                <img
                                  src={therapist.imageUrl}
                                  alt={therapist.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover object-top"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              ) : null}
                              <div className={`absolute inset-0 flex items-center justify-center font-semibold text-sm ${therapist.avatarBg} -z-10`}>
                                {therapist.avatarInitial}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-[#1D1D1F]">
                                {therapist.name}
                              </h4>
                              <p className="text-xs text-[#666]">{therapist.credentials}</p>
                              <p className="text-[11px] text-[#4A6756] font-medium mt-0.5">
                                Verified Clinical Practitioner
                              </p>
                            </div>
                          </div>

                          <p className="text-xs text-[#555] leading-relaxed">
                            {therapist.bio}
                          </p>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {therapist.specialties.map((spec, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E2E6DF] text-[#555]"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center justify-between">
                          <div className="text-[11px] text-[#666]">
                            <Calendar className="w-3 h-3 inline mr-1 text-[#3B5A46]" />
                            {therapist.availableNext}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleBookWithTherapist(therapist)}
                            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-[#263D2E] hover:bg-[#1A2D21] transition-colors"
                          >
                            Select & Book
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#666] hover:text-[#1D1D1F]"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTherapist(therapistsDirectory[0]);
                        setStep(4);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#263D2E] bg-[#E9F0EB] hover:bg-[#DCE7DF]"
                    >
                      <span>Match Me With Any Available Clinician</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Confidential Intake & Reservation */}
              {step === 4 && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
                      Confirm your confidential consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666] mt-1">
                      Your intake details will be safely transferred to our clinical team at{' '}
                      <span className="font-semibold text-[#243F30]">{siteConfig.contactEmail}</span>.
                    </p>
                  </div>

                  {selectedTherapist && (
                    <div className="p-4 rounded-2xl bg-[#F0F5F1] border border-[#D7E4DB] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${selectedTherapist.avatarBg}`}>
                          {selectedTherapist.avatarInitial}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1D1D1F]">{selectedTherapist.name}</p>
                          <p className="text-xs text-[#555]">{selectedTherapist.credentials}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#2F4D3C] bg-white px-2.5 py-1 rounded-full border border-[#D5E1D9]">
                        Selected Clinician
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#444] mb-1.5">
                        Your Full Name or Preferred Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8DDD5] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#444] mb-1.5">
                        Your Confidential Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@example.com"
                        value={formData.userEmail}
                        onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8DDD5] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#444] mb-1.5">
                      Optional Quiet Note for Your Therapist
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share anything you'd like your therapist to know before your first session..."
                      value={formData.userNote}
                      onChange={(e) => setFormData({ ...formData, userNote: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8DDD5] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644]"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F6F7F5] border border-[#E6E8E3] text-xs text-[#666] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#395644] shrink-0" />
                    <span>
                      Strictly confidential. Your consultation request is received only by licensed mental health practitioners.
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#666] hover:text-[#1D1D1F]"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#16271D] transition-colors shadow-sm"
                    >
                      <UserCheck className="w-4 h-4 text-[#A8C8B6]" />
                      <span>Submit Intake & Reserve Consultation</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 sm:py-12 space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#EAF3EE] text-[#284835] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#325841]" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                  Intake Received in Peace
                </h3>
                <p className="text-sm text-[#555] mt-2 leading-relaxed">
                  Thank you, <span className="font-medium text-[#111]">{formData.userName || 'friend'}</span>. Your therapeutic match request has been routed directly to our care concierge at{' '}
                  <span className="font-semibold text-[#243E2F]">{siteConfig.contactEmail}</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F8F6] border border-[#DFE6E1] text-left text-xs space-y-2">
                <p className="font-medium text-[#222]">Session Summary:</p>
                <p className="text-[#555]">• Primary Focus: <span className="font-medium text-[#111]">{formData.primaryConcern}</span></p>
                <p className="text-[#555]">• Selected Modality: <span className="font-medium text-[#111]">{formData.preferredStyle}</span></p>
                <p className="text-[#555]">• Format: <span className="font-medium text-[#111]">{formData.therapyFormat}</span></p>
                {selectedTherapist && (
                  <p className="text-[#555]">• Clinician: <span className="font-medium text-[#111]">{selectedTherapist.name}</span></p>
                )}
                <p className="text-[#555]">• Notification Sent To: <span className="font-medium text-[#243E2F]">{siteConfig.contactEmail}</span></p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(`Therapy Match Request - ${formData.userName || 'Client'}`)}&body=${encodeURIComponent(
                    `Hello ThoughtHealer Care Team,\n\nI have submitted my therapy intake:\n- Name: ${formData.userName}\n- Focus: ${formData.primaryConcern}\n- Format: ${formData.therapyFormat}\n- Preferred Clinician: ${selectedTherapist ? selectedTherapist.name : 'Best match'}\n\nNotes: ${formData.userNote}\n\nWarm regards,\n${formData.userName} (${formData.userEmail})`
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#243E2F] bg-[#EAF2ED] hover:bg-[#DCE8E0] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Confirmation in Mail App</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="text-xs text-[#777] hover:text-[#222] underline py-2"
                >
                  Submit another request
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
