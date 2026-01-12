import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';
import imgEllipse21 from '../../assets/abd0f0896482fca79bab6eb64232c9d064c23f4b.png';
import imgEllipse22 from '../../assets/54c83f4a29f6197e7a9aad7d3a256f5250d29969.png';
import imgEllipse23 from '../../assets/66c5038bb526b914f1b1bd9ec37726178cc29bc8.png';
import svgPaths from "../../imports/svg-7prhvava0y";
import contentData from '../../data/content.json';

export function Testimonials() {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialImages = [imgEllipse21, imgEllipse22, imgEllipse23];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 flex justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="text-center"
          >
            <div className="font-['Urbanist',sans-serif] text-[64px] leading-none tracking-[-1.28px]">
              <span className="font-semibold text-[#344054]">Testimonials That</span>
              <br />
              <span className="font-bold">Speak To </span>
              <span className="font-bold text-[#3b82e6]">My Results</span>
            </div>
            <p className="font-['Montserrat',sans-serif] text-[24px] text-[#667085] tracking-[-0.48px] mt-6 max-w-[700px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)"
                }}
                onHoverStart={() => setActiveIndex(index)}
                className="bg-[#171717] rounded-[24px] p-8 flex flex-col gap-6 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-9 h-9">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                    <path d={svgPaths.p35158000} fill="white" opacity="0.3" />
                    <path d={svgPaths.p2b170700} fill="white" opacity="0.3" />
                  </svg>
                </div>

                {/* Content */}
                <p className="font-['Montserrat',sans-serif] text-white text-[18px] leading-relaxed tracking-[-0.36px] flex-grow">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                      src={testimonialImages[index]} 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-['Urbanist',sans-serif] font-semibold text-white text-[20px] tracking-[-0.4px]">
                      {testimonial.name}
                    </p>
                    <p className="font-['Montserrat',sans-serif] text-white/60 text-[16px] tracking-[-0.32px]">
                      {testimonial.role}
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: isInView ? 0.5 + i * 0.1 : 0, duration: 0.3 }}
                        className="w-5 h-5"
                      >
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                          <path d={svgPaths.p2b4c0200} fill="#3B82E6" />
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <motion.div 
            variants={cardVariants}
            className="flex justify-center items-center gap-3"
          >
            {[0, 1, 2].map((index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-[#3b82e6] w-[56px] h-[14px]' 
                    : 'bg-[#e4e7ec] w-[14px] h-[14px]'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
