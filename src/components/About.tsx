import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about-detailed" className="py-24 bg-page-bg relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
              <img 
                src="https://lh3.googleusercontent.com/d/1NsezBQwWmr1TzgfzWMZKKpgeqkCBSdAW" 
                alt="Utshab - Professional Video Editor"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl text-black shadow-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">200+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Projects Completed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Quote className="text-accent mb-8 opacity-20" size={48} />
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Making Every <br /> Frame Count.
            </h3>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                I specialize in high-impact edits that blend emotion, pacing, and cinematic visuals. 
                In a world of decreasing attention spans, my goal is to capture and hold interest through mastery of rhythm.
              </p>
              <p>
                With over three years of experience working with top-tier social media brands and social creators, 
                I understand the science behind visual storytelling and how to apply it across different platforms.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-t border-white/10">
              <div>
                <p className="text-white font-bold text-lg">Global</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Clients Served</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Top 1%</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Ranked Editor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
