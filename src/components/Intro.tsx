import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section id="about" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white">
            Hey, I'm <span className="text-accent underline decoration-accent/20 underline-offset-8">Utshab</span>, a professional video editor focused on creating high-quality, engaging content.
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-white/70 italic leading-relaxed">
              "I specialize in editing videos that not only look great visually but also keep viewers hooked from the first second and drive actual business results."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest pt-4">
              <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 text-accent">
                Short-form content (Reels, TikTok, Shorts)
              </div>
              <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 text-accent">
                YouTube videos (long-form storytelling)
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex justify-center">
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
