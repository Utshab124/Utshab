import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  youtubeId?: string;
  videoUrl?: string;
  thumbnail?: string;
  driveId?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: '0',
    title: 'Brand Advertisement',
    category: 'Product Promo',
    description: 'Clean and professional ad edit focused on conversions.',
    driveId: '1UONbjGDmuTs_Oxm3jKJVy9Iieqcu0k6F',
  },
  {
    id: '4',
    title: 'Normal Edit & Cinematic Edit',
    category: 'Social Media',
    description: 'High-quality visuals with storytelling and advanced color grading.',
    driveId: '1iD7Xae22ewGe6v8mlYoidfGYc9cN5zLH',
  },
  {
    id: '7',
    title: 'Podcast Edit',
    category: 'Podcast Production',
    description: 'Multi-camera editing with smooth transitions and clarity.',
    driveId: '1yC4AIhcF10CYr4w8123Wo75BZvtnjLOd',
  },
  {
    id: '8',
    title: 'Short-form Viral Edit',
    category: 'Vertical Video',
    description: 'Hook-based editing style optimized for social media engagement.',
    driveId: '18X6VWSyZiNAWM819bwyd_kmOBTpLOooa',
  },
  {
    id: '9',
    title: 'VSL Edit',
    category: 'Sales & Conversion',
    description: 'High-converting Video Sales Letter with engaging storytelling and visuals.',
    driveId: '1RJ31jaL5k0kHabyhIzBw75iSnRAcLJ3s',
  },
  {
    id: '10',
    title: 'Long-form Video Edit',
    category: 'YouTube Content',
    description: 'Comprehensive storytelling for long-form content with dynamic pacing and motion graphics.',
    driveId: '1E9YykhF-gZgzpuQP0_c07pKoe9siKyTQ',
  },
  {
    id: '11',
    title: 'Commercial Video Production',
    category: 'Commercial Edit',
    description: 'Dynamic and visually stunning commercial video edit with seamless audio design.',
    driveId: '1kel3AcVNgBMAFSgm6Vw2LvnqEwj482Kp',
  },
  {
    id: '12',
    title: 'High-Converting Promo Edit',
    category: 'Commercial Edit',
    description: 'An engaging promotional edit with seamless transitions and professional color grading.',
    driveId: '1RQOQtbtc98mpOgYpIVddke8CbAzu-RH4',
  },
  {
    id: '13',
    title: 'Premium Cinematic Showcase',
    category: 'Cinematic Edit',
    description: 'A visually breathtaking cinematic edit with high-end pacing, color grading, and custom sound design.',
    driveId: '1cJeGbAoujbMO7sT5BYT9wp4iDyxu5Y1w',
  },
  {
    id: '14',
    title: 'Dynamic Narrative Edit',
    category: 'YouTube Content',
    description: 'An engaging, high-energy storytelling-focused video featuring advanced transitions and premium design.',
    driveId: '1jfBwGDPP2v8Q7X18B1EqaFa_ymV_MQ8g',
  },
  {
    id: '15',
    title: 'Creative Storytelling Showcase',
    category: 'YouTube Content',
    description: 'A creative and high-impact visual storytelling edit featuring seamless timing and advanced techniques.',
    driveId: '1WE10Doz2rtsQ33iQfnvCfQa1ADZrch01',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-page-bg relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-xs font-black uppercase tracking-[0.5em] mb-4"
            >
              My Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]"
            >
              A Selection of My <br />
              <span className="text-white/40">Latest Cinematic Edits</span>
            </motion.h2 >
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-sm max-w-sm mb-2"
          >
            A collection of high-performance video edits designed to maximize engagement and tell compelling stories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {projects.map((project, index) => {
            const projectLink = project.driveId 
              ? `https://drive.google.com/file/d/${project.driveId}/view`
              : project.youtubeId 
                ? `https://youtube.com/watch?v=${project.youtubeId}`
                : project.videoUrl || '#';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group"
              >
                {/* Video Container with "Film Strip" look */}
                <div className="relative mb-8">
                  {/* Film Strip Holes Decoration */}
                  <div className="absolute -left-4 top-4 bottom-4 w-1 flex flex-col justify-between opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white rounded-sm"></div>
                    ))}
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-accent/30 transition-all duration-700 shadow-2xl">
                    {project.imageUrl ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ) : project.driveId ? (
                      <div className="relative w-full h-full group/video">
                        <iframe
                          className="w-full h-full scale-[1.01]"
                          src={`https://drive.google.com/file/d/${project.driveId}/preview`}
                          title={project.title}
                          allow="autoplay"
                          allowFullScreen
                        ></iframe>
                        {/* Overlay to catch hover and add polish */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ) : project.videoUrl ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        width="100%"
                        playsInline
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="relative w-full h-full group/video">
                        <iframe
                          className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                          src={`https://www.youtube.com/embed/${project.youtubeId}?modestbranding=1&rel=0&autoplay=0`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>

                  {/* Categories Floating */}
                  <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-accent">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="relative pl-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-white/20 font-mono text-sm leading-none">0{index + 1}</span>
                    <div className="h-px flex-1 bg-white/10 group-hover:bg-accent/30 transition-colors duration-500"></div>
                  </div>
                  
                  <a 
                    href={projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block group/link"
                  >
                    <h4 className="text-2xl font-black tracking-tight mb-3 group-hover/link:text-accent transition-colors duration-300">
                      {project.title}
                    </h4>
                  </a>
                  <p className="text-white/40 text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
