import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    text: 'Utshab transformed our raw footage into a masterpiece. The pacing and color grading were exactly what we needed.',
  },
  {
    name: 'Sarah Chen',
    role: 'YouTube Creator',
    text: 'Working with Utshab was a breeze. He understands the rhythm of social media perfectly. My retention rates have soared.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Brand Manager',
    text: 'Utshab is professional, cinematic, and efficient. The best video editor I have worked with in years.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Testimonials</h2>
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-16">What Clients Say.</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((t, index) => (
             <motion.div
               key={t.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="p-8 rounded-2xl bg-white/5 border border-white/5 italic flex flex-col items-center"
             >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white/70 mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="text-white font-bold not-italic">{t.name}</p>
                <p className="text-accent/60 text-[10px] uppercase font-bold tracking-widest not-italic mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
