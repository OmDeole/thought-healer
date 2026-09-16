import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { X, Smartphone, QrCode, CheckCircle2, Star, Shield, ArrowUpRight, Apple } from 'lucide-react';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E3E8E1] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#737373] hover:text-[#111] hover:bg-[#F0F2ED] transition-colors"
            aria-label="Close download modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center max-w-sm mx-auto mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF5F0] border border-[#D5E4D9] mx-auto flex items-center justify-center text-[#2A4735] mb-3">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
              Download ThoughtPro
            </h3>
            <p className="text-xs sm:text-sm text-[#555] mt-1">
              Your quiet companion for CBT thought restructuring and daily mindfulness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* iOS Button */}
            <a
              href={siteConfig.appStore.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#F7F8F5] border border-[#DEE4DC] hover:border-[#2C4835] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#666]">
                  Apple iOS
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#888] group-hover:text-[#111] transition-colors" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1D1D1F]">App Store</p>
                <p className="text-xs text-[#52745E] font-medium mt-0.5">
                  {siteConfig.appStore.iosRating}
                </p>
              </div>
            </a>

            {/* Android Button */}
            <a
              href={siteConfig.appStore.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#F7F8F5] border border-[#DEE4DC] hover:border-[#2C4835] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#666]">
                  Android
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#888] group-hover:text-[#111] transition-colors" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#1D1D1F]">Google Play</p>
                <p className="text-xs text-[#52745E] font-medium mt-0.5">
                  {siteConfig.appStore.androidRating}
                </p>
              </div>
            </a>
          </div>

          {/* QR Code Quick Scan Simulation */}
          <div className="p-4 rounded-2xl bg-[#F5F7F4] border border-[#DFE5DC] flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white p-2 border border-[#CFD9CE] flex items-center justify-center shrink-0">
              <QrCode className="w-12 h-12 text-[#243F2F]" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-[#1D1D1F]">Scan to install directly</p>
              <p className="text-[#555] mt-0.5 leading-relaxed">
                Point your mobile camera at this code to immediately open ThoughtPro on your device.
              </p>
            </div>
          </div>

          {/* Clean highlights */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#737373]">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#3F634B]" />
              Zero Commercial Ads
            </span>
            <span>Offline mode supported</span>
            <span>iOS 16+ & Android 10+</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
