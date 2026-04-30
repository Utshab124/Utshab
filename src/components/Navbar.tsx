import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Play } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-black font-bold">
            <Play size={16} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase transition-colors group-hover:text-accent">
            Utshab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest glow-on-hover hover:bg-accent-light transition-all"
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.nav>
  );
}
