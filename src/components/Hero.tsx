import { motion } from 'motion/react';
import { ChevronDown, PlayCircle } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-accent/10 via-page-bg to-page-bg"></div>
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-20 bg-radial-[circle_at_40%_40%] from-accent/10 via-transparent to-transparent blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="inline-block mb-6 px-4 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] uppercase font-bold tracking-[0.3em] backdrop-blur-sm"
          >
            Professional Video Editor
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[0.9]"
          >
            I Turn Raw Footage Into <br />
            <span className="text-accent">High-Converting</span> Videos
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 font-medium"
          >
            I help creators and brands grow with engaging, scroll-stopping video edits <br className="hidden md:block" />
            that increase retention, drive performance, and scale your audience.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 py-3 bg-accent text-black font-black uppercase tracking-widest text-xs rounded-lg overflow-hidden transition-all duration-300 glow-on-hover"
            >
              <div className="flex items-center justify-center gap-2">
                <PlayCircle size={18} fill="currentColor" />
                <span>View Portfolio</span>
              </div>
            </motion.a>
            <motion.a 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full sm:w-auto px-10 py-3 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-lg shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white group overflow-hidden transition-all"
            >
              <span className="relative z-10 transition-colors duration-300">Contact Me</span>
              
              {/* Subtle Bloom Effect Layer */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-accent transition-colors duration-300"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
