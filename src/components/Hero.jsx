import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaBriefcase, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yIcons = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="glass-card w-full max-w-7xl mx-auto p-10 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          className="flex-1 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: yText }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-sm md:text-base text-gray-300 tracking-wide">Available for UI/UX and Frontend Roles</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-[#FFB347] font-medium tracking-tight">
            UI/UX Designer • Frontend Developer • Full Stack Developer
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[100px] font-heading font-extrabold leading-[1.1] text-glow tracking-tighter">
            <span className="block">P M</span>
            <span className="block">Gowrav</span>
            <span className="block">Ganapathy</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Designing intuitive digital experiences and engineering scalable web applications with modern technologies.
          </motion.p>

          {/* Contact Icons */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-4">
            <a href="mailto:parlakotigowrav@gmail.com" className="text-gray-400 hover:text-[#F5A623] transition-colors duration-300">
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+918618002667" className="text-gray-400 hover:text-[#F5A623] transition-colors duration-300">
              <FaPhoneAlt size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gowrav-ganapathy/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F5A623] transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/PMGowravGanapathy?tab=repositories" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F5A623] transition-colors duration-300">
              <FaGithub size={24} />
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <a
              href="/P%20M%20Gowrav%20Ganapathy%20-%20Resume.pdf"
              download="P M Gowrav Ganapathy Resume.pdf"
              className="group relative px-8 py-4 bg-[#F5A623] text-black font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:shadow-[0_0_20px_#F5A623] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <FaDownload />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-[#F5A623] text-[#F5A623] font-semibold rounded-full hover:bg-[#F5A623]/10 transition-colors duration-300">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
              View Projects <FaBriefcase />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Image/Graphic */}
        <motion.div 
          className="flex-1 w-full relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ y: yImage }}
        >
          {/* Animated Background Blob behind image */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-[#F5A623]/40 to-[#FFB347]/20 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Placeholder for Profile Image */}
          <div className="relative z-10 w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[40px] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(245,166,35,0.2)] bg-black/40 backdrop-blur-md flex items-center justify-center group">
            <motion.img
              src={profileImage}
              alt="P M Gowrav Ganapathy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Overlay Gradient on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Elements around Image */}
          <motion.div 
            className="absolute top-[10%] left-[10%] w-16 h-16 glass-card flex items-center justify-center text-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ y: yIcons }}
          >
            🎨
          </motion.div>
          <motion.div 
            className="absolute bottom-[20%] right-[10%] w-16 h-16 glass-card flex items-center justify-center text-2xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ y: yIcons }}
          >
            💻
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Navigation Pill */}
      <motion.div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-card px-8 py-4 z-50 flex gap-6 md:gap-10 shadow-2xl overflow-x-auto max-w-[90vw]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "backOut" }}
      >
        {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-300 hover:text-[#F5A623] transition-colors whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
