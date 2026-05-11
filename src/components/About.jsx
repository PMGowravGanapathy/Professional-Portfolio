import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yCard = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const stats = [
    { label: 'CGPA', value: '9.32/10' },
    { label: 'Major Projects', value: '3+' },
    { label: 'Internships', value: '2' },
    { label: 'Team Lead Experience', value: 'Yes' },
    { label: 'NCC Leading Cadet', value: 'Yes' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 relative z-10 flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ y: yCard }}
          className="glass-card p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-glow leading-tight">
              Designing digital experiences that inspire.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Aspiring UI/UX Designer and Frontend Developer with experience in end-to-end design and development. Skilled in Figma, HTML, CSS, JavaScript, React.js, and Full Stack technologies. Strong understanding of design thinking, usability principles, and scalable web development.
            </p>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#F5A623] to-[#FFB347] rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F5A623]/50 transition-all duration-300"
              >
                <div className="text-3xl font-heading font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
