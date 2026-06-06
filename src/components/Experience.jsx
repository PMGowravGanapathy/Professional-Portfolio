import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLine = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'GlowLogics Solutions',
      location: 'Bangalore',
      date: 'Feb 2026 – May 2026',
      highlights: [
        'Developed full-stack applications',
        'Authentication and CRUD features',
        'API integrations',
        'Performance optimization'
      ]
    },
    {
      role: 'UI/UX & Frontend Intern, Team Lead',
      company: 'Experimind Labs',
      location: 'Nitte, Karkala',
      date: 'Jun – Jul 2025',
      highlights: [
        'Led 4-member design team',
        'Client approval in first iteration',
        'Built responsive React and Next.js interfaces'
      ]
    }
  ];

  return (
    <section id="experience" ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">Career Path</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">Professional Experience</h3>
        </motion.div>

        <div className="relative ml-4 md:ml-0 md:pl-0">
          {/* Animated Parallax Timeline Line */}
          <motion.div 
            style={{ y: yLine }}
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          ></motion.div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-16 relative pl-8 md:pl-0">
              
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-[#F5A623] shadow-[0_0_15px_#F5A623] z-10"
              />

              <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-[45%]"></div>
                
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-[45%] glass-card p-8 hover:border-[#F5A623]/50 transition-colors"
                >
                  <span className="text-[#FFB347] text-sm font-semibold tracking-wider uppercase mb-2 block">{exp.date}</span>
                  <h4 className="text-2xl font-heading font-bold mb-1">{exp.role}</h4>
                  <h5 className="text-lg text-gray-300 mb-2">{exp.company} <span className="text-gray-500 text-sm">| {exp.location}</span></h5>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-[#F5A623] mt-1.5 text-xs">◆</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
