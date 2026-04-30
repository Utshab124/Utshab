import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-page-bg border border-white/10 rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-black">
                  <span className="font-black text-xs">SI</span>
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight">Service Information</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 selection:bg-accent selection:text-black">
              <div className="max-w-3xl mx-auto space-y-12 pb-12">
                
                {/* Intro */}
                <div className="space-y-4">
                  <p className="text-xl font-medium leading-relaxed italic text-white/80">
                    "Hi, I’m Utshab — I help creators, businesses, and brands grow through impactful, high-quality video and digital content."
                  </p>
                </div>

                {/* Section 1 */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/5">01</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Our Services</h3>
                  </div>
                  <div className="space-y-4 text-white/60 leading-relaxed">
                    <p>
                      I provide a range of digital creative and strategic services, including high-quality video production, content creation, social media strategy, and brand growth solutions.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                      {[
                        'Video editing for YouTube, Reels, TikTok, and podcasts',
                        'Creative strategy and content planning',
                        'Thumbnail design and optimization',
                        'Video repurposing for multiple platforms',
                        'Consultation for brand and content growth'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-accent/30 transition-colors">
                          <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          <span className="text-xs font-bold uppercase tracking-wider leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/5">02</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Digital Services Only</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We provide digital services only — no physical goods or shipping are involved. Each project is customized to meet the client’s goals, style, and audience.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/5">03</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Service Delivery Process</h3>
                  </div>
                  <div className="space-y-8">
                    <p className="text-white/60 leading-relaxed">
                      Our streamlined process ensures clear communication and professional delivery:
                    </p>
                    <div className="space-y-4 relative">
                      <div className="absolute left-4 top-2 bottom-2 w-px bg-white/5" />
                      {[
                        { title: 'Discovery', desc: 'Initial discovery and strategy session' },
                        { title: 'Assets', desc: 'Client provides footage, brand assets, and guidelines' },
                        { title: 'Execution', desc: 'I handle editing, design, and execution' },
                        { title: 'Delivery', desc: 'Final delivery via Google Drive or other secure cloud platforms' },
                        { title: 'Revisions', desc: 'Revisions (if applicable) as outlined in the project agreement' }
                      ].map((step, i) => (
                        <div key={i} className="relative pl-12">
                          <div className="absolute left-[13px] top-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,163,0,0.5)]" />
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-1">{step.title}</h4>
                          <p className="text-sm text-white/50">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 bg-accent text-black text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
