import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for background blobs
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-screen text-white font-body selection:bg-[#F5A623] selection:text-white">
      <CustomCursor />
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <main className="relative z-10">
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
             {/* Radial glow background with Parallax */}
            <motion.div 
              style={{ y: yBg1 }}
              className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#F5A623] rounded-full blur-[150px] opacity-10"
            />
            <motion.div 
              style={{ y: yBg2 }}
              className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#FFB347] rounded-full blur-[150px] opacity-10"
            />
          </div>
          
          <div className="z-10 relative">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Leadership />
            <Contact />
          </div>
        </main>
      )}
    </div>
  )
}

export default App
