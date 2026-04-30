import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:workfortbug@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Using window.open for better compatibility in iframes
    const mailWindow = window.open(mailtoLink, '_blank');
    if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
      // Fallback if window.open is blocked
      window.location.href = mailtoLink;
    }
    
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-page-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Let's <span className="text-accent underline decoration-accent/20 underline-offset-8">Talk.</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind? Let's transform your vision into a cinematic reality. 
              Available for freelance and long-term collaborations.
            </p>

            <div className="space-y-8">
              <a href="tel:01827681645" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Call Me</p>
                  <span className="text-xl font-bold group-hover:text-accent transition-colors">01827681645</span>
                </div>
              </a>

              <a href="mailto:workfortbug@gmail.com" className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Email Me</p>
                  <span className="text-xl font-bold group-hover:text-accent transition-colors">workfortbug@gmail.com</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 px-1">How can I help?</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20 resize-none"
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 bg-accent text-black font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 transition-all glow-on-hover"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle2 size={48} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tight mb-2">Message Prepared!</h4>
                    <p className="text-white/60">Your email client should have opened with the project details. Catch you soon!</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent text-[10px] uppercase font-bold tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
