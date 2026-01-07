import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import LandingPage from '../imports/Frame36';
import { Navbar } from '../components/Navbar';

// Use the imported LandingPage directly

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Design is built at 1440px width, scale down for smaller screens
      const newScale = Math.min(width / 1440, 1);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center bg-[#e5f0ff]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="size-16 border-4 border-[#3b82e6] border-t-transparent rounded-full animate-spin" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="size-full overflow-auto">
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            animation: none;
            opacity: 1;
          }
        }
      `}} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
        }}
      >
        <LandingPage />
      </motion.div>
    </div>
  );
}
