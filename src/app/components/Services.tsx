import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import imgRectangle7 from '../../assets/ba56d13b70a40e5606603b63d86c379e61a059e9.png';
import imgRectangle8 from '../../assets/6fddbd2b03eab49a4f76b3a0e34d3e8a40d52a9f.png';
import imgRectangle9 from '../../assets/ccdd92b1bfee9ab07bef167270461de5ba241a23.png';
import imgFrame58 from '../../assets/3a75595023a84fef860d0682e77b0cec39ece463.png';
import contentData from '../../data/content.json';

export function Services() {
  const { ref, isInView } = useInView();
  const serviceImages = [imgRectangle7, imgRectangle8, imgRectangle9];

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
    <section id="services" ref={ref} className="py-20 flex justify-center">
      <div className="w-full max-w-[1336px] mx-auto px-8">
        <div className="bg-[#171717] rounded-[50px] p-[60px] relative overflow-hidden">
          {/* Background Pattern */}
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-[50px]" 
            src={imgFrame58} 
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 flex flex-col gap-[60px]"
          >
            {/* Header */}
            <motion.div 
              variants={cardVariants}
              className="flex items-end justify-between"
            >
              <div className="font-['Urbanist',sans-serif] text-[64px] leading-none tracking-[-1.28px]">
                <span className="font-semibold text-[#fcfcfd]">My </span>
                <span className="font-bold text-white">Services</span>
              </div>
              <p className="font-['Montserrat',sans-serif] text-[24px] text-white tracking-[-0.48px] max-w-[489px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
              </p>
            </motion.div>

            {/* Service Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {contentData.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="bg-[rgba(209,209,209,0.15)] border-4 border-transparent hover:border-white/20 rounded-[36px] p-2 h-[480px] flex flex-col justify-between transition-all duration-300">
                    {/* Title */}
                    <div className="px-8 pt-10">
                      <div className="pb-6 border-b border-white/30">
                        <p className="font-['Urbanist',sans-serif] font-medium text-[30px] text-white tracking-[-0.6px]">
                          {service.title}
                        </p>
                      </div>
                    </div>

                    {/* Image Stack */}
                    <div className="relative flex items-center justify-center">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Shadow layers */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-[#757575] opacity-50 rounded-[32.871px] w-[308px] h-[309px] absolute blur-md" />
                          <div className="bg-[#9e9d9d] rounded-[32.871px] w-[351px] h-[309px] absolute" />
                        </div>
                        
                        {/* Main image */}
                        <motion.div 
                          className="relative rounded-[32.871px] w-[390px] h-[288px] overflow-hidden shadow-2xl"
                          whileHover={{ rotate: [0, -2, 2, 0], transition: { duration: 0.5 } }}
                        >
                          <img 
                            alt={service.title}
                            className="w-full h-full object-cover" 
                            src={serviceImages[index]} 
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Dots Navigation */}
            <motion.div 
              variants={cardVariants}
              className="flex justify-center items-center gap-3"
            >
              <div className="bg-[#3b82e6] h-[14px] rounded-[18px] w-[56px]" />
              <div className="bg-[#e4e7ec] rounded-full w-[14px] h-[14px]" />
              <div className="bg-[#e4e7ec] rounded-full w-[14px] h-[14px]" />
              <div className="bg-[#e4e7ec] rounded-full w-[14px] h-[14px]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
