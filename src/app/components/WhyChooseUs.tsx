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
    <section id="about" ref={ref} className="py-12 flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="bg-[#f6faff] rounded-[50px] p-[60px] relative overflow-hidden">
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
            className="relative z-10 flex flex-row items-center gap-8"
          >
            {/* Left - Image */}
            <motion.div variants={imageVariants} className="relative flex-shrink-0 w-[456px] h-[574px] flex items-center justify-center">
              {/* Shadow/Blur effect */}
              <div className="absolute left-1/2 -translate-x-1/2 top-32 w-[280px] h-[450px] blur-3xl bg-black/25 rounded-[50px]" />
              
              {/* Background shape with image */}
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[rgba(59,130,230,0.4)] rounded-[50px] w-[420px] h-[530px] flex items-center justify-center">
                  {/* Image directly inside blue background */}
                  <motion.div 
                    className="w-[390px] h-[500px] rounded-[20px] overflow-hidden"
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
            <motion.div variants={itemVariants} className="flex-1 flex flex-col gap-6 text-left items-start">
              {/* Title */}
              <div className="font-['Urbanist',sans-serif] text-[56px] leading-none tracking-[-1.28px] whitespace-nowrap">
                <span className="font-semibold text-[#344054]">Why </span>
                <span className="font-bold text-[#3b82e6]">Choose Us</span>
                <span className="text-[#344054]">?</span>
              </div>

              {/* Description */}
              <p className="font-['Montserrat',sans-serif] text-[20px] text-[#1d2939] tracking-[-0.48px] max-w-[500px]">
                {whyChooseUs.description}
              </p>

              {/* Stats */}
              <div className="flex flex-row gap-10 justify-start">
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
              <div
                className="flex flex-row items-end justify-start gap-16 w-full mt-2"
              >
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-white border-2 border-[#151515] rounded-[8px] px-6 py-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] flex items-center justify-center min-w-[168px] h-[70px]"
                >
                  <span className="font-['Montserrat',sans-serif] font-semibold text-[#151515] text-[16px]">Contact Us</span>
                </motion.button>
                <div className="flex flex-col items-center justify-end gap-2">
                  <span className="font-['Montserrat',sans-serif] font-semibold text-[#151515] text-[24px]">Contact Here</span>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <img src="/src/assets/cd49b1e25e58eededaf41103636e4344d7190b9b.png" alt="Instamart" className="w-16 h-16 object-contain rounded-full" />
                    <img src="/src/assets/2227.jpg" alt="Instagram" className="w-16 h-16 object-contain rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}