import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-7prhvava0y";
import contentData from '../../data/content.json';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import imgFrame334 from '../../assets/9e81ead33b0c933022b221404e7c213568b3f2e9.png';
import imgYoungPrettyWoman from '../../assets/6173c131b0406d3c7145e9480ddb14838a494ec7.png';

export function HeroSection() {
  const [activeBtn, setActiveBtn] = React.useState<'work' | 'contact' | null>(null);
  const { hero } = contentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-32 pb-0 px-3 sm:px-4">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
          src={imgFrame334} 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center gap-4 sm:gap-6 md:gap-8"
      >
        {/* Top Section - Hello + Title */}
        <motion.div variants={itemVariants} className="relative z-30 flex flex-col items-center gap-1 sm:gap-2 md:gap-3 text-center mb-0 sm:mb-[-10px] md:mb-[-30px] lg:mb-[-40px]">
          {/* Hello Badge */}
          <div className="relative inline-flex">
            <div className="bg-white/10 border-2 border-[#171717] rounded-full px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-3">
              <p className="font-urbanist font-medium text-xs sm:text-sm md:text-lg text-[#171717] tracking-tight">
                {hero.greeting}
              </p>
            </div>
            {/* Arrow decoration */}
            <div className="absolute -right-1 sm:-right-1.5 md:-right-2 lg:-right-3 -top-0.5 sm:-top-1">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" viewBox="0 0 31.5006 32.5005">
                <path d={svgPaths.p36e30100} stroke="#3B82E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <div className="font-urbanist text-[#171717] w-full px-1 text-center relative">
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-1 sm:mb-2 md:mb-3 tracking-tight">
              <span className="font-medium">{hero.title}</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight relative inline-block">
              <span className="font-semibold text-[#3b82e6] relative inline-block">
                {hero.highlightedTitle}
                {/* Decorative SVG Element at bottom left of E */}
                <span className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-5 md:-bottom-4 md:-left-8 lg:-bottom-6 lg:-left-12 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rotate-180">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 76.8909 79.505">
                    <path d={svgPaths.p3e7cd7c0} stroke="#3B82E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                  </svg>
                </span>
              </span>{' '}
              <span className="font-medium">{hero.subtitle}</span>
            </p>
          </div>
        </motion.div>

        {/* Main Hero Image + Content Container */}
        <div className="relative w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6">

          {/* Center Image with decorative elements */}
          <motion.div 
            variants={itemVariants}
            className="relative w-full max-w-full sm:max-w-[800px] md:max-w-[952px]"
          >
            {/* Main Hero Image */}
            <div className="w-full aspect-[4/3] sm:aspect-[3/2] relative">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                alt="Engineering professionals" 
                className="w-full h-full object-contain" 
                src={imgYoungPrettyWoman} 
              />
              
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="absolute bottom-2 sm:bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full p-1 sm:p-1.5 md:p-3 flex items-center gap-0.5 sm:gap-1 md:gap-3 shadow-xl w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex gap-0.5 sm:gap-1 md:gap-3"
              >
                <Link
                  to="/projects"
                  className={`px-2 sm:px-3 md:px-8 py-0.5 sm:py-1.5 md:py-4 rounded-full font-urbanist text-xs sm:text-sm md:text-lg tracking-tight flex items-center justify-center gap-0.5 md:gap-2 border transition-all duration-200 whitespace-nowrap
                    ${activeBtn === 'work' || activeBtn === null ? 'bg-[#3b82e6] text-white border-[#3b82e6] font-medium' : 'bg-transparent text-white border-white font-light hover:bg-[#3b82e6] hover:border-[#3b82e6]'}
                  `}
                  onMouseEnter={() => setActiveBtn('work')}
                  onMouseLeave={() => setActiveBtn(null)}
                >
                  Our Work
                  <ArrowUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-6 md:h-6" />
                </Link>
                <Link
                  to="/contact"
                  className={`px-2 sm:px-3 md:px-8 py-0.5 sm:py-1.5 md:py-4 rounded-full font-urbanist text-xs sm:text-sm md:text-lg tracking-tight border transition-all duration-200 whitespace-nowrap
                    ${activeBtn === 'contact' ? 'bg-[#FD853A] text-white border-[#FD853A] font-medium' : 'bg-transparent text-white border-white font-light hover:bg-[#FD853A] hover:border-[#FD853A]'}
                  `}
                  onMouseEnter={() => setActiveBtn('contact')}
                  onMouseLeave={() => setActiveBtn(null)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-2 sm:right-4 top-1/3 z-20 rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 hidden md:flex flex-col items-start gap-2 sm:gap-3"
          >
            {/* Star Rating */}
            <div className="flex gap-1 sm:gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                >
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                    <path d={svgPaths.p2b4c0200} fill="#FFC107" />
                  </svg>
                </motion.div>
              ))}
            </div>
            
            {/* Experience */}
            <div className="text-left">
              <p className="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#171717] tracking-tight">
                {hero.experience.label}
              </p>
              <p className="font-urbanist font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] leading-none tracking-tight">
                {hero.experience.years}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}