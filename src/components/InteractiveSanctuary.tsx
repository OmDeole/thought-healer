import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { calmingAudio } from '../utils/audioSynth';
import { Sparkles, CloudRain, Waves, Wind, Check, RotateCcw, ArrowRight, Play, Pause, Volume2, Headphones } from 'lucide-react';

export const InteractiveSanctuary: React.FC = () => {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [distortedThought, setDistortedThought] = useState('');
  const [reframedThought, setReframedThought] = useState('');

  // Somatic Breathing Engine State
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [breathSeconds, setBreathSeconds] = useState(4);
  const [isBreathingActive, setIsBreathingActive] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Breathing 4-4-4 diaphragmatic cycle
  useEffect(() => {
    if (!isBreathingActive) return;

    const timer = setInterval(() => {
      setBreathSeconds((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Phase Transition
        if (breathPhase === 'Inhale') {
          setBreathPhase('Hold');
          if (soundEnabled) calmingAudio.playBreathGuide('hold');
          return 4;
        } else if (breathPhase === 'Hold') {
          setBreathPhase('Exhale');
          if (soundEnabled) calmingAudio.playBreathGuide('exhale');
          return 4;
        } else {
          setBreathPhase('Inhale');
          if (soundEnabled) calmingAudio.playBreathGuide('inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [breathPhase, isBreathingActive, soundEnabled]);

  const toggleSound = (soundId: string) => {
    if (activeSound === soundId) {
      calmingAudio.stopAll();
      setActiveSound(null);
    } else {
      calmingAudio.stopAll();
      setActiveSound(soundId);
      if (soundId === 'bowl') {
        calmingAudio.playSingingBowl(432);
      } else if (soundId === 'rain') {
        calmingAudio.toggleRain(true);
      } else if (soundId === 'binaural-alpha') {
        calmingAudio.toggleBinaural('alpha', true);
      } else if (soundId === 'binaural-theta') {
        calmingAudio.toggleBinaural('theta', true);
      } else if (soundId === 'binaural-delta') {
        calmingAudio.toggleBinaural('delta', true);
      }
    }
  };

  const sampleDistortions = [
    { label: 'Catastrophizing', text: '"If this meeting goes wrong, everything will fall apart."' },
    { label: 'All-or-Nothing', text: '"I lost focus today, so all my consistency is ruined."' },
    { label: 'Mind Reading', text: '"They responded briefly, so they must be disappointed in me."' }
  ];

  return (
    <section id="interactive-sanctuary" className="py-20 sm:py-28 bg-[#F5F6F2]/50 border-t border-[#EAECE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-widest text-[#5C7566] font-semibold">
            Interactive Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] mt-2 mb-4">
            Practice calm right in your browser.
          </h2>
          <p className="text-base sm:text-lg text-[#5D615B] leading-relaxed">
            Experience our evidence-grounded neuro-acoustic soundscapes, diaphragmatic breath regulation, and cognitive reframing tools.
          </p>
        </div>

        {/* 3-Part Modular Sanctuary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Panel 1: Somatic Breathing Sphere (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#E3E7DF] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-semibold text-[#5B7565] tracking-wider">
                  Somatic Regulation
                </span>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-1.5 rounded-full border text-xs flex items-center gap-1 transition-colors ${
                    soundEnabled
                      ? 'bg-[#EAF1EC] text-[#274230] border-[#B9CFBF]'
                      : 'bg-neutral-50 text-[#888] border-neutral-200'
                  }`}
                  title="Toggle breathing bell"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="text-[10px]">{soundEnabled ? 'Audio On' : 'Muted'}</span>
                </button>
              </div>

              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">
                Diaphragmatic Breath Sphere
              </h3>
              <p className="text-xs text-[#666] mb-6">
                4-4-4 vagus nerve stimulation to down-regulate sympathetic arousal.
              </p>

              {/* Dynamic Animated Sphere */}
              <div className="relative w-44 h-44 mx-auto my-4 flex items-center justify-center">
                {/* Outer halo */}
                <motion.div
                  animate={{
                    scale: breathPhase === 'Inhale' ? 1.25 : breathPhase === 'Hold' ? 1.25 : 0.85,
                    opacity: breathPhase === 'Hold' ? 0.35 : 0.2,
                  }}
                  transition={{ duration: 4, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-[#395644] blur-xl"
                />

                {/* Main animated orb */}
                <motion.div
                  animate={{
                    scale: breathPhase === 'Inhale' ? 1.15 : breathPhase === 'Hold' ? 1.15 : 0.82,
                  }}
                  transition={{ duration: 4, ease: 'easeInOut' }}
                  className="relative w-36 h-36 rounded-full bg-gradient-to-b from-[#E7EFEA] to-[#D5E3D9] border border-[#B8CEBF] shadow-[0_4px_20px_rgba(57,86,68,0.12)] flex flex-col items-center justify-center text-center p-2"
                >
                  <span className="text-[11px] font-medium text-[#466551] uppercase tracking-wider">
                    {breathPhase}
                  </span>
                  <span className="text-3xl font-light text-[#1D1D1F] font-mono mt-0.5">
                    {breathSeconds}s
                  </span>
                </motion.div>
              </div>

              <p className="text-center text-xs text-[#526457] mt-3 font-serif-calm italic">
                {breathPhase === 'Inhale' && 'Slowly fill your lower belly through your nose...'}
                {breathPhase === 'Hold' && 'Hold gently with softened shoulders...'}
                {breathPhase === 'Exhale' && 'Release effortlessly through parted lips...'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <button
                onClick={() => setIsBreathingActive(!isBreathingActive)}
                className="text-[#2B4635] font-medium inline-flex items-center gap-1.5 hover:underline"
              >
                {isBreathingActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isBreathingActive ? 'Pause Session' : 'Resume Session'}</span>
              </button>
              <span className="text-[11px] text-[#787878]">Vagal reset</span>
            </div>
          </div>

          {/* Panel 2: Binaural Beats & Auditory Sanctuary (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#E3E7DF] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-semibold text-[#5B7565] tracking-wider">
                  Binaural Frequency
                </span>
                <span className="text-[10px] text-[#294534] bg-[#EFF4F0] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Headphones className="w-3 h-3" /> Stereo
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">
                Neuro-Acoustic Frequencies
              </h3>
              <p className="text-xs text-[#666] mb-4">
                Dual-channel sound offsets to encourage balanced brainwave states. Best experienced with headphones.
              </p>

              <div className="space-y-2.5">
                {/* Alpha Waves */}
                <button
                  type="button"
                  onClick={() => toggleSound('binaural-alpha')}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSound === 'binaural-alpha'
                      ? 'bg-[#EEF5F0] border-[#385B45] shadow-xs'
                      : 'bg-[#FAFBF9] border-[#E8EDE5] hover:bg-[#F2F6F2]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">Alpha 10Hz • Calm Focus</p>
                    <p className="text-[11px] text-[#666]">Alert relaxation and quiet focus</p>
                  </div>
                  <span className="text-xs font-medium text-[#385B45]">
                    {activeSound === 'binaural-alpha' ? 'Active' : 'Play'}
                  </span>
                </button>

                {/* Theta Waves */}
                <button
                  type="button"
                  onClick={() => toggleSound('binaural-theta')}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSound === 'binaural-theta'
                      ? 'bg-[#EEF5F0] border-[#385B45] shadow-xs'
                      : 'bg-[#FAFBF9] border-[#E8EDE5] hover:bg-[#F2F6F2]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">Theta 6Hz • Deep Meditation</p>
                    <p className="text-[11px] text-[#666]">Intuitive mindfulness & serenity</p>
                  </div>
                  <span className="text-xs font-medium text-[#385B45]">
                    {activeSound === 'binaural-theta' ? 'Active' : 'Play'}
                  </span>
                </button>

                {/* Delta Waves */}
                <button
                  type="button"
                  onClick={() => toggleSound('binaural-delta')}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSound === 'binaural-delta'
                      ? 'bg-[#EEF5F0] border-[#385B45] shadow-xs'
                      : 'bg-[#FAFBF9] border-[#E8EDE5] hover:bg-[#F2F6F2]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">Delta 3Hz • Restorative Rest</p>
                    <p className="text-[11px] text-[#666]">Physical recovery & sleep onset</p>
                  </div>
                  <span className="text-xs font-medium text-[#385B45]">
                    {activeSound === 'binaural-delta' ? 'Active' : 'Play'}
                  </span>
                </button>

                {/* 432Hz Bowl */}
                <button
                  type="button"
                  onClick={() => toggleSound('bowl')}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSound === 'bowl'
                      ? 'bg-[#EEF5F0] border-[#385B45] shadow-xs'
                      : 'bg-[#FAFBF9] border-[#E8EDE5] hover:bg-[#F2F6F2]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">432Hz Tibetan Singing Bowl</p>
                    <p className="text-[11px] text-[#666]">Gentle resonant acoustic chime</p>
                  </div>
                  <span className="text-xs font-medium text-[#385B45]">
                    {activeSound === 'bowl' ? 'Active' : 'Play'}
                  </span>
                </button>

                {/* Rain */}
                <button
                  type="button"
                  onClick={() => toggleSound('rain')}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSound === 'rain'
                      ? 'bg-[#EEF5F0] border-[#385B45] shadow-xs'
                      : 'bg-[#FAFBF9] border-[#E8EDE5] hover:bg-[#F2F6F2]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">Woodland Rain Pink Noise</p>
                    <p className="text-[11px] text-[#666]">Natural masking for rumination</p>
                  </div>
                  <span className="text-xs font-medium text-[#385B45]">
                    {activeSound === 'rain' ? 'Active' : 'Play'}
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#737373]">
              <span>Real-time synthesis</span>
              {activeSound && (
                <button
                  onClick={() => toggleSound(activeSound)}
                  className="text-[#2C4837] font-medium underline"
                >
                  Silence Sound
                </button>
              )}
            </div>
          </div>

          {/* Panel 3: Cognitive Thought Reframer (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#E3E7DF] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-semibold text-[#5B7565] tracking-wider">
                  CBT Restructuring
                </span>
                <span className="text-[10px] text-[#737373] bg-[#F2F3EF] px-2 py-0.5 rounded-full">
                  Thought Record
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">
                Reframing Cognitive Traps
              </h3>
              <p className="text-xs text-[#666] mb-3">
                Examine intrusive thoughts with non-judgmental clinical curiosity.
              </p>

              {/* Distortion Samples */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-[#333]">Prompt sample:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {sampleDistortions.map((s, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setDistortedThought(s.text)}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4F6F2] hover:bg-[#E8EDE5] text-[#333] transition-colors border border-[#E0E5DD]"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={2}
                    value={distortedThought}
                    onChange={(e) => setDistortedThought(e.target.value)}
                    placeholder="e.g. 'I made one mistake and now my work is ruined...'"
                    className="w-full px-3 py-2 rounded-xl border border-[#DCE2DA] bg-[#FAFBF9] text-xs focus:outline-none focus:border-[#385945]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#333] block mb-1">
                    Balanced, realistic perspective:
                  </label>
                  <textarea
                    rows={2}
                    value={reframedThought}
                    onChange={(e) => setReframedThought(e.target.value)}
                    placeholder="e.g. 'One mistake is human. It does not erase my overall contribution.'"
                    className="w-full px-3 py-2 rounded-xl border border-[#DCE2DA] bg-[#FAFBF9] text-xs focus:outline-none focus:border-[#385945]"
                  />
                </div>

                {/* Comparison Preview */}
                {(distortedThought || reframedThought) && (
                  <div className="p-3 rounded-xl bg-[#F6F8F5] border border-[#DEE6DF] space-y-1.5 text-xs">
                    <p className="font-semibold text-[#284433] text-[11px]">Restructured Reframe:</p>
                    {distortedThought && (
                      <p className="text-[#888] line-through text-[11px]">"{distortedThought}"</p>
                    )}
                    {reframedThought && (
                      <p className="text-[#1D3627] font-medium font-serif-calm text-xs">
                        "{reframedThought}"
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[#787878] text-[11px]">ThoughtPro Interactive Tool</span>
              <button
                type="button"
                onClick={() => {
                  setDistortedThought('');
                  setReframedThought('');
                }}
                className="text-[#666] hover:text-[#111] inline-flex items-center gap-1 text-[11px]"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
