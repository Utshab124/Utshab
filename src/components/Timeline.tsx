import { motion } from 'motion/react';

const events = [
  { year: '2022', title: 'The Genesis', desc: 'Started video editing journey, mastering the fundamentals of Premiere Pro and visual rhythm.' },
  { year: '2023', title: 'Growth & Expansion', desc: 'Collaborated with high-profile clients and social media brands, delivering over 100+ projects.' },
  { year: '2024', title: 'Cinematic Mastery', desc: 'Advanced into high-end cinematic storytelling and commercial grade color grading.' },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter">The Creative Evolution</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

          <div className="space-y-12 relative">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full text-center md:text-left">
                  <div className={`p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-4xl font-black text-accent mb-2 block">{event.year}</span>
                    <h4 className="text-xl font-bold mb-3 tracking-tight">{event.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto md:mx-0">{event.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-black box-content hidden md:block">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
