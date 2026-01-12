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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-12 px-4">
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
        className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center gap-8 md:gap-12"
      >
        {/* Top Section - Hello + Title + Quote */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:gap-10 text-center">
          {/* Hello Badge */}
          <div className="relative inline-flex">
            <div className="bg-white/10 border-2 border-[#171717] rounded-[39px] px-5 md:px-7 py-2 md:py-3">
              <p className="font-['Urbanist',sans-serif] font-medium text-[18px] md:text-[24px] text-[#171717] tracking-[-0.48px]">
                {hero.greeting}
              </p>
            </div>
            {/* Arrow decoration */}
            <div className="absolute -right-2 md:-right-3 -top-1">
              <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 31.5006 32.5005">
                <path d={svgPaths.p36e30100} stroke="#3B82E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <div className="font-['Urbanist',sans-serif] font-semibold text-[#171717] max-w-[913px]">
            <p className="text-[48px] md:text-[72px] lg:text-[95px] leading-none mb-2 tracking-[-1.9px]">
              <span className="font-medium">{hero.title}</span>
            </p>
            <p className="text-[48px] md:text-[72px] lg:text-[95px] leading-none tracking-[-1.9px]">
              <span className="font-bold text-[#3b82e6]">{hero.highlightedTitle}</span>{' '}
              <span className="font-medium">{hero.subtitle}</span>
            </p>
          </div>
        </motion.div>

        {/* Main Hero Image + Content Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Quote */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-4 top-1/3 max-w-[444px] z-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl hidden xl:flex flex-col gap-6"
          >
            <div className="w-9 h-9">
              <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                <path d={svgPaths.p35158000} fill="#344054" />
                <path d={svgPaths.p2b170700} fill="#344054" />
              </svg>
            </div>
            <p className="font-['Montserrat',sans-serif] text-[#171717] text-[20px] md:text-[28px] leading-tight tracking-[-0.56px]">
              {hero.description}
            </p>
          </motion.div>

          {/* Center Image with decorative elements */}
          <motion.div 
            variants={itemVariants}
            className="relative w-full max-w-[952px]"
          >
            {/* Decorative SVG Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 left-4 md:left-8 w-12 h-12 md:w-20 md:h-20"
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 76.8909 79.505">
                <path d={svgPaths.p3e7cd7c0} stroke="#3B82E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              </svg>
            </motion.div>

            {/* Main Hero Image */}
            <div className="w-full aspect-[3/2] relative">
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
              className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-[50px] p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-xl w-[50] max-w-[500px]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex gap-2 md:gap-3"
              >
                <Link
                  to="/projects"
                  className={`px-5 py-2.5 md:px-8 md:py-4 rounded-[60px] font-['Urbanist',sans-serif] text-[18px] md:text-[25.692px] tracking-[-0.3854px] flex items-center gap-2 border transition-all duration-200
                    ${activeBtn === 'work' || activeBtn === null ? 'bg-[#3b82e6] text-white border-[#3b82e6] font-medium' : 'bg-transparent text-white border-white font-light hover:bg-[#3b82e6] hover:border-[#3b82e6]'}
                  `}
                  onMouseEnter={() => setActiveBtn('work')}
                  onMouseLeave={() => setActiveBtn(null)}
                >
                  Our Work
                  <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                </Link>
                <Link
                  to="/contact"
                  className={`px-5 py-2.5 md:px-8 md:py-4 rounded-[60px] font-['Urbanist',sans-serif] text-[18px] md:text-[25.692px] tracking-[-0.3854px] border transition-all duration-200
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
            className="absolute right-4 top-1/3 z-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl hidden xl:flex flex-col items-end gap-6"
          >
            {/* Star Rating */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="w-10 h-10 md:w-12 md:h-12"
                >
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                    <path d={svgPaths.p2b4c0200} fill="#3B82E6" />
                  </svg>
                </motion.div>
              ))}
            </div>
            
            {/* Experience */}
            <div className="text-right">
              <p className="font-['Urbanist',sans-serif] font-bold text-[56px] md:text-[72px] text-[#171717] leading-none tracking-[-1.44px]">
                {hero.experience.years}
              </p>
              <p className="font-['Montserrat',sans-serif] text-[32px] md:text-[42px] text-[#171717] tracking-[-0.84px]">
                {hero.experience.label}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}