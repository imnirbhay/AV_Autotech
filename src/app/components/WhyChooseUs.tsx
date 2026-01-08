import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import svgPaths from "../../imports/svg-7prhvava0y";
import contentData from '../../data/content.json';
import imgUnsplashHXbdghd1JJa from '../../assets/2307e9fc8d99bba15eb3c4f90c31a624850eda34.png';

export function WhyChooseUs() {
  const { ref, isInView } = useInView();
  const { whyChooseUs } = contentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 flex justify-center">
      <div className="w-full max-w-[1334px] mx-auto">
        <div className="bg-[#f6faff] rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[4px] rounded-br-[4px] p-20 relative overflow-hidden">
          {/* Decorative Wave Pattern */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-20"
            animate={{ rotate: [149.642, 151.642, 149.642] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-full h-full" fill="none" viewBox="0 0 1171.62 994.36">
              <path d={svgPaths.p3b4d4400} stroke="#ABCAF5" strokeOpacity="0.2" strokeWidth="24" />
            </svg>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -left-24 -top-28 w-[436px] h-[436px] opacity-50">
            <svg className="w-full h-full" fill="none" viewBox="0 0 436 436">
              <circle cx="218" cy="218" r="210" stroke="#95B0D6" strokeOpacity="0.5" strokeWidth="16" />
            </svg>
          </div>
          <div className="absolute right-0 bottom-0 w-[531px] h-[531px] opacity-20">
            <svg className="w-full h-full" fill="none" viewBox="0 0 531 531">
              <circle cx="265.5" cy="265.5" r="233.5" stroke="#95B0D6" strokeOpacity="0.2" strokeWidth="64" />
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16"
          >
            {/* Left - Image */}
            <motion.div variants={imageVariants} className="relative flex-shrink-0 w-full lg:w-auto flex justify-center">
              {/* Shadow/Blur effect */}
              <div className="absolute left-1/2 -translate-x-1/2 md:left-28 md:translate-x-0 top-32 w-[228px] h-[390px] blur-3xl bg-black/25 rounded-[50px]" />
              
              {/* Background shape */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[rgba(59,130,230,0.4)] rounded-[50px] w-[300px] md:w-[387px] h-[380px] md:h-[494px]" />
                
                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-[300px] md:w-[388px] h-[450px] md:h-[583px] rounded-[20px] overflow-hidden shadow-2xl"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      alt="Engineering professional"
                      className="w-full h-full object-cover" 
                      src={imgUnsplashHXbdghd1JJa} 
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="flex-1 flex flex-col gap-8 md:gap-12 text-center lg:text-left">
              {/* Title */}
              <div className="font-['Urbanist',sans-serif] text-[40px] md:text-[56px] lg:text-[64px] leading-none tracking-[-1.28px]">
                <span className="font-semibold text-[#344054]">Why </span>
                <span className="font-bold text-[#3b82e6]">Choose Us </span>
                <span className="text-[#344054]">?</span>
              </div>

              {/* Description */}
              <p className="font-['Montserrat',sans-serif] text-[18px] md:text-[24px] text-[#1d2939] tracking-[-0.48px] max-w-[567px] mx-auto lg:mx-0">
                {whyChooseUs.description}
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center lg:justify-start">
                {whyChooseUs.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col gap-3"
                  >
                    <p className="font-['Urbanist',sans-serif] font-medium text-[#1d2939] text-[30px] md:text-[36px] tracking-[-0.54px]">
                      {stat.value}
                    </p>
                    <p className="font-['Montserrat',sans-serif] text-[#667085] text-[20px] md:text-[24px] tracking-[-0.48px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white border-2 border-[#151515] rounded-[8px] px-10 md:px-13 py-5 md:py-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] self-center lg:self-start"
              >
                <p className="font-['Montserrat',sans-serif] font-semibold text-[#151515] text-[24px] md:text-[28px] tracking-[-0.56px]">
                  Contact Us
                </p>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}