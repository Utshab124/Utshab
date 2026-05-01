import { Instagram, Linkedin, Play } from 'lucide-react';

interface FooterProps {
  onShowTerms?: () => void;
}

export default function Footer({ onShowTerms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-black font-bold">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Utshab
              </span>
            </div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">
              Designed for visual storytelling
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://www.instagram.com/utshab278?igsh=MXBsZ3BtMGt4dWRwZw==" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/utshab-8b4381355" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
          <p>© {currentYear} Utshab. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
            <button 
              onClick={onShowTerms}
              className="hover:text-accent transition-colors"
            >
              Service Information
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
