import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yCard1 = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);

  const educationData = [
    {
      institution: 'St Joseph Engineering College, Mangaluru',
      degree: 'BE in Computer Science and Engineering',
      score: 'CGPA: 9.32/10',
      year: '2022 - 2026',
      y: yCard1
    },
    {
      institution: 'St Michael’s Composite PU College, Madikeri',
      degree: 'PCMC',
      score: '94.83%',
      year: '2020 - 2022',
      y: yCard2
    }
  ];

  return (
    <section id="education" ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">Academic Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">Education</h3>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{ y: edu.y }}
              className="glass-card p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#F5A623]/30 transition-colors"
            >
              <div>
                <h4 className="text-2xl font-heading font-bold mb-2 text-white">{edu.institution}</h4>
                <p className="text-[#FFB347] font-medium mb-1">{edu.degree}</p>
                <p className="text-gray-400">{edu.score}</p>
              </div>
              <div className="md:text-right">
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-wider">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
