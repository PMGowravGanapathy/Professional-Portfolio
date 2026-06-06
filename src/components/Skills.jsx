import { motion } from 'framer-motion';
import { FaFigma, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiFirebase, SiVuedotjs, SiShopify } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Wireframing', icon: null },
        { name: 'Prototyping', icon: null },
        { name: 'User Flows', icon: null },
        { name: 'Visual Design', icon: null },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Shopify Gempages', icon: <SiShopify /> },
      ]
    },
    {
      title: 'Full Stack',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'API Integration', icon: null },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: null },
        { name: 'Android Studio', icon: null },
        { name: 'Canva', icon: null },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">Skills & Technologies</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500"
            >
              <h4 className="text-xl font-heading font-bold mb-6 text-[#FFB347]">{category.title}</h4>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx * 0.1) + (i * 0.1) }}
                    className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                  >
                    {skill.icon && <span className="text-[#F5A623] text-xl">{skill.icon}</span>}
                    {skill.icon === null && <span className="w-2 h-2 rounded-full bg-[#F5A623]/50"></span>}
                    <span className="font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
