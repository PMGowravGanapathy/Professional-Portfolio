import { motion } from 'framer-motion';

export default function Leadership() {
  const leadershipData = [
    {
      title: 'Naval NCC Wing',
      role: 'Leading Cadet (LC)',
      highlights: [
        'Completed A, B, and C Certificates',
        'Led cadet contingents in parades and drills',
        'Organized camp activities and discipline management'
      ],
      icon: '⚓'
    },
    {
      title: 'TEDx SJEC',
      role: 'Creative Team Volunteer',
      highlights: [
        'Designed materials reaching 5000+ students',
        'Collaborated with speakers and organizers for event branding',
        'Managed social media campaigns'
      ],
      icon: '💡'
    }
  ];

  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">Beyond Code</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">Leadership & Extracurriculars</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-[#F5A623]/40 transition-colors"
            >
              {/* Spotlight background effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="text-5xl mb-6 relative z-10">{item.icon}</div>
              <h4 className="text-2xl font-heading font-bold mb-2 relative z-10">{item.title}</h4>
              <p className="text-[#FFB347] font-semibold mb-6 relative z-10">{item.role}</p>
              
              <ul className="space-y-3 relative z-10">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#F5A623] mt-1.5 text-xs">◆</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
