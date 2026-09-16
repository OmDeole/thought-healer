import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Heart, Clock, MessageSquare } from 'lucide-react';
import { calmingAudio } from '../utils/audioSynth';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Therapy Matching',
    preferredContactMethod: 'Email',
    message: '',
    mindfulStateAcknowledged: true,
  });

  const [isMindfulRelaxed, setIsMindfulRelaxed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes: ContactFormData['inquiryType'][] = [
    'Therapy Matching',
    'ThoughtPro App',
    'Corporate Wellness',
    'Clinical Partnership',
    'General Serenity Inquiry',
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    calmingAudio.playSingingBowl(528);
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    `[ThoughtHealer Inquiry] ${formData.inquiryType} from ${formData.fullName || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hello ThoughtHealer Team,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nInquiry: ${formData.inquiryType}\nPreferred Contact: ${formData.preferredContactMethod}\n\nMessage:\n${formData.message}\n\nWarm regards,\n${formData.fullName}`
  )}`;

  return (
    <section id="contact-section" className="py-20 sm:py-28 bg-[#FBFBF9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF2EC] text-[#2C4837] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#D5E1DA]">
            <Heart className="w-3.5 h-3.5 text-[#3F614C]" />
            <span>Care & Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.15]">
            Reach out when you are ready.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-3 leading-relaxed">
            Whether you are inquiring about personalized therapy, the ThoughtPro suite, or corporate programs, our clinical team is here to listen.
          </p>
        </div>

        {/* Mindful Pause Before Reaching Out */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="p-5 sm:p-6 rounded-3xl bg-[#F6F8F5] border border-[#E3E8E0] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#E8F0EA] border border-[#CFE0D3] flex items-center justify-center text-[#2A4434] shrink-0">
                <Sparkles className="w-5 h-5 text-[#3C5E49]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#637C6C]">
                  Mindful Invitation
                </p>
                <p className="text-xs sm:text-sm text-[#3E423E] font-medium">
                  {isMindfulRelaxed
                    ? 'Your mind is centered. Write at your own unhurried pace.'
                    : 'Take a calm breath before typing your thoughts.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsMindfulRelaxed(true);
                calmingAudio.playSingingBowl(528);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 ${
                isMindfulRelaxed
                  ? 'bg-[#E3EEE6] text-[#233B2C] border border-[#C6D9CC]'
                  : 'bg-white text-[#2C4435] border border-[#D0DDD4] hover:bg-[#F2F7F3] shadow-xs'
              }`}
            >
              {isMindfulRelaxed ? '✓ Centered & Present' : 'Take a Breath'}
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E8E1] shadow-[0_4px_28px_rgba(0,0,0,0.03)]">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#666] block mb-2">
                    How can we support you?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => {
                      const isSelected = formData.inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all border ${
                            isSelected
                              ? 'bg-[#EFF5F1] text-[#1E3727] border-[#395C46] shadow-2xs'
                              : 'bg-[#FAFBF9] text-[#4F5350] border-[#E8ECE4] hover:bg-[#F2F5F1]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3E3B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9DFD7] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3A3E3B] mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9DFD7] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3E3B] mb-1.5">
                    Contact Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9DFD7] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644] transition-colors"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold text-[#3A3E3B]">
                      Your Message or Inquiry *
                    </label>
                    <span className="text-[11px] text-[#888]">
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    maxLength={1000}
                    placeholder="Describe how we can support you. All reflections remain strictly confidential..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D9DFD7] bg-[#FAFBF9] text-sm focus:outline-none focus:border-[#385644] focus:ring-1 focus:ring-[#385644] transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#22352A] hover:bg-[#16271D] transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#A8C8B6]" />
                    <span>Send Message to Care Team</span>
                  </button>

                  <a
                    href={mailtoHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-medium text-[#2E4536] bg-[#EFF4F0] hover:bg-[#E3EDE5] transition-colors"
                  >
                    <span>Open in Email Client</span>
                  </a>
                </div>
              </form>
            ) : (
              /* Success confirmation */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#EAF3ED] text-[#2C4E38] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#2C4E38]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F]">
                    Your message has been received with care.
                  </h3>
                  <p className="text-sm text-[#5B605C] mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-medium text-[#111]">{formData.fullName}</span>. Your inquiry regarding <span className="font-medium text-[#111]">{formData.inquiryType}</span> has been dispatched to the ThoughtHealer Care Team. A licensed coordinator will review your thoughts shortly.
                  </p>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Therapy Matching',
                        preferredContactMethod: 'Email',
                        message: '',
                        mindfulStateAcknowledged: true,
                      });
                    }}
                    className="px-6 py-2 rounded-full text-xs font-medium text-[#253E2F] bg-[#EAF2ED] hover:bg-[#DDE9E1] transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: ThoughtHealer Details & Clinic Information (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* ThoughtHealer Care Desk */}
            <div className="p-6 rounded-3xl bg-[#F7F8F5] border border-[#E4E8E1] space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D4536]">
                <Mail className="w-4 h-4 text-[#3B5D47]" />
                <span>ThoughtHealer Care Desk</span>
              </div>
              <p className="text-xs text-[#525552] leading-relaxed">
                Our care coordinators and clinical psychologists respond to consultation requests and program queries promptly.
              </p>
              <div className="space-y-2 pt-2 border-t border-neutral-200/60 text-xs">
                <div>
                  <span className="text-[#888] block text-[11px]">Direct Inquiries</span>
                  <a href={`mailto:${siteConfig.secondaryEmail}`} className="font-medium text-[#1D1D1F] hover:underline">
                    {siteConfig.secondaryEmail}
                  </a>
                </div>
                <div>
                  <span className="text-[#888] block text-[11px]">Care Coordination</span>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-[#1D1D1F] hover:underline">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Clinic & Innovation Lab Location */}
            <div className="p-6 rounded-3xl bg-[#F7F8F5] border border-[#E4E8E1] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D4536]">
                <MapPin className="w-4 h-4 text-[#3B5D47]" />
                <span>ThoughtHealer & Synept Labs</span>
              </div>
              <p className="text-xs text-[#525552] leading-relaxed">
                Operating clinical consultations and digital health research out of Maharashtra, India, serving clients across national and global networks.
              </p>
              <div className="pt-2 border-t border-neutral-200/60 text-xs text-[#666]">
                <p>Consultations conducted via secure private video and audio appointments.</p>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-6 rounded-3xl bg-[#F7F8F5] border border-[#E4E8E1] space-y-2 text-xs text-[#525552]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D4536]">
                <MessageSquare className="w-4 h-4 text-[#3B5D47]" />
                <span>Strict Confidentiality</span>
              </div>
              <p className="leading-relaxed">
                All communications and clinical reflections are handled strictly in accordance with mental health ethical protocols and privacy standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
