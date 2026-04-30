import { motion } from 'motion/react';
import { Youtube, Clapperboard, Smartphone, Zap, Move, CheckCircle2 } from 'lucide-react';

const services = [
  { 
    title: 'YouTube Editing', 
    target: 'YouTube / Social Media', 
    icon: Youtube, 
    desc: 'Professional long-form editing with storytelling, pacing, and audience retention in mind.',
    includes: [
      'Story-driven cuts',
      'A-roll/B-roll mix',
      'Color grading',
      'Audio mixing',
      'Thumbnail design'
    ]
  },
  { 
    title: 'Ads & Brand Videos', 
    target: 'Commercials / Ad Film', 
    icon: Clapperboard, 
    desc: 'High-quality, conversion-focused edits that help brands turn viewers into customers.',
    includes: [
      'Hook creation',
      'Call to actions',
      'Motion graphics',
      'Commercial grading'
    ]
  },
  { 
    title: 'Short Form Editing', 
    target: 'Reels / TikTok / YouTube', 
    icon: Smartphone, 
    desc: 'Fast-paced, high-energy edits optimized for vertical viewing.',
    includes: [
      'Fast-paced cuts',
      'Dynamic captions',
      'Sound effects',
      'Trend optimization'
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 py-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Services</h2>
            <h3 className="text-4xl font-black mb-6 tracking-tighter">What I Bring To Your Project</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Tailored editing solutions that align with your vision and goals.
            </p>
            <a href="#contact" className="text-accent flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] group">
              Start Project <Zap size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="lg:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group flex flex-col justify-between"
            >
              <div>
                <service.icon size={32} className="text-accent mb-6 opacity-80" />
                <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-4">{service.target}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.desc}</p>
                
                {service.includes && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/20 mb-3">Includes</p>
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-white/60">
                        <CheckCircle2 size={12} className="text-accent" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
