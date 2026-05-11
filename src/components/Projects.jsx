import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import studyResourceImg from '../assets/study resource.png';
import lostFoundImg from '../assets/campus lost and found.png';
import torqDesignsImg from '../assets/torq webpage.jpeg';
import groceryAppImg from '../assets/grocery app.png';
import restaurantMenuImg from '../assets/restaurant menu.png';
import eventManagementImg from '../assets/event management.png';
import arecanutImg from '../assets/arecabandhu.png';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  const projects = [
    {
      title: 'Study Resource Sharing Platform',
      image: studyResourceImg,
      type: 'Full Stack Web Application',
      description: 'Notes and PDF sharing platform with search, filtering, authentication, and admin controls.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      links: { github: 'https://github.com/PMGowravGanapathy/Study-Resource-Sharing', live: 'https://study-resource-sharing-three.vercel.app/' }
    },
    {
      title: 'Campus Lost and Found App',
      type: 'Web Application',
      image: lostFoundImg,
      description: 'Structured listings and search/filter for lost and found items on campus.',
      tech: ['React (Vite)', 'Firebase', 'Tailwind CSS'],
      links: { github: 'https://github.com/PMGowravGanapathy/campus-lost-and-found', live: 'https://campus-lost-and-found-zeta.vercel.app/login' }
    },
    {
      title: 'Torq Designs Internship Client Project',
      type: 'Professional UI/UX Work',
      image: torqDesignsImg,
      description: 'Designed real-world client interfaces during my UI/UX internship at Torq Designs, including wireframes, prototypes, and high-fidelity designs.',
      tech: ['Figma', 'Client Projects', 'Design Systems', 'Prototyping'],
      links: {
        caseStudy: 'https://www.figma.com/design/5rZzznQJMNP8KIodL5PNM6/Torq-Designs?node-id=0-1&p=f&t=OkGegBpKDMmaMJy3-0'
      }
},
    {
      title: 'Grocery App Design',
      type: 'UI/UX Case Study',
      image: groceryAppImg,
      description: 'Complete UI/UX case study with a focus on design systems and accessibility.',
      tech: ['Figma', 'Prototyping', 'User Research'],
      links: { caseStudy: 'https://www.figma.com/design/7BZKOeVHO7iS1RQcy3GaYj/Grocery-App?node-id=91-2354&p=f&t=OkGegBpKDMmaMJy3-0' }
    },
    {
      title: 'Restaurant Menu UI/UX Design',
      type: 'UI/UX Case Study',
      image: restaurantMenuImg,
      description: 'Premium restaurant menu and ordering interface designed with a focus on visual hierarchy, usability, and seamless browsing experience.',
      tech: ['Figma', 'UI Design', 'Prototyping', 'Design System'],
      links: {
        caseStudy: 'https://www.figma.com/design/iUJITD8imjuoatPLaPZo8J/restaurant-menu?node-id=0-1&p=f&t=xOQLkZSteW4lQ7L5-0'
      }
    },
    {
      title: 'Food Delivery App UI/UX Design',
      type: 'UI/UX Case Study',
      image: eventManagementImg,
      description: 'Modern food delivery application featuring restaurant discovery, cart management, order tracking, and clean mobile-first interfaces.',
      tech: ['Figma', 'Mobile UI', 'User Flow', 'Prototype'],
      links: {
        caseStudy: 'https://www.figma.com/design/kLeeW3Fxs73DLX748Vt13t/Food-Delivery-Application?node-id=98-1359&p=f&t=xOQLkZSteW4lQ7L5-0'
      }
    },
    {
      title: 'Arecanut Disease Detection Design',
      type: 'UI/UX + Machine Learning Project',
      image: arecanutImg,
      description: 'Designed the interface for a smart farming application that detects and manages arecanut diseases using machine learning.',
      tech: ['Figma', 'UI/UX Design', 'Machine Learning', 'Smart Farming'],
      links: {
        caseStudy: 'https://www.figma.com/design/6yDXwl0D7UE0hEx4uJWAlI/Untitled?node-id=0-1&p=f&t=xOQLkZSteW4lQ7L5-0'
      }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-card');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWrapperRef.current.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="projects" ref={containerRef} className="h-screen relative z-10 flex flex-col justify-center overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-6">
        <div className="text-center">
          <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">Featured Projects</h3>
        </div>
      </div>

      <div className="flex-1 w-full overflow-hidden flex items-center">
        <div ref={scrollWrapperRef} className="flex gap-8 px-[10vw] w-[max-content]">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 glass-card group relative overflow-hidden flex flex-col h-[60vh] min-h-[400px]"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 w-full relative overflow-hidden border-b border-white/10 shrink-0">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
</div>

              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-semibold tracking-wider text-[#FFB347] uppercase mb-2">{project.type}</span>
                <h4 className="text-2xl font-heading font-bold mb-3 group-hover:text-[#F5A623] transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/5 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.links.live && (
                    <a href={project.links.live} className="flex-1 text-center py-2 bg-[#F5A623]/10 text-[#F5A623] rounded-lg border border-[#F5A623]/30 hover:bg-[#F5A623] hover:text-black transition-all flex items-center justify-center gap-2 text-sm font-semibold">
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <a href={project.links.caseStudy} className="flex-1 text-center py-2 bg-[#F5A623]/10 text-[#F5A623] rounded-lg border border-[#F5A623]/30 hover:bg-[#F5A623] hover:text-black transition-all flex items-center justify-center gap-2 text-sm font-semibold">
                      Case Study <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="p-2 rounded-lg bg-white/5 hover:bg-white/20 border border-white/10 transition-all text-gray-300 hover:text-white flex items-center justify-center">
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
