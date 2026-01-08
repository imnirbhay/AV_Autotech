import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import imgFrame26 from '../../assets/5cf28d4ff7cabdc9b27cdea620bb18818f2d6f54.png';
import imgFrame28 from '../../assets/2e2146d6ef43febb94a0229038f623c9a714e196.png';
import contentData from '../../data/content.json';

export function Portfolio() {
  const { ref, isInView } = useInView();
  const projectImages = [imgFrame26, imgFrame28];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 flex justify-center px-4 md:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="font-['Urbanist',sans-serif] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-[#344054] tracking-[-1.28px] text-center md:text-left">
              <span className="font-semibold">Lets have a look at my </span>
              <span className="text-[#3b82e6]">Previous Work</span>
            </div>

            {/* Arrow Button */}
            <motion.div
              whileHover={{ rotate: -45, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white border-[3.783px] border-[#3b82e6] rounded-full w-[60px] h-[60px] flex items-center justify-center cursor-pointer shadow-lg flex-shrink-0"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 32.155 32.155">
                  <path 
                    d="M8 24L24 8M24 8H8M24 8V24" 
                    stroke="#3B82E6" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {contentData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-[19px] h-[280px] md:h-[351px] overflow-hidden shadow-xl">
                  {/* Background Image */}
                  <img 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover" 
                    src={projectImages[index]} 
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity"
                    style={{
                      backgroundImage: "linear-gradient(192.536deg, rgba(0, 0, 0, 0) 33.316%, rgba(0, 0, 0, 0.416) 78.02%, rgba(0, 0, 0, 0.8) 103.58%)"
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full p-4 flex flex-col justify-between">
                    {/* Arrow Button */}
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        className="bg-white border-[3.783px] border-[#3b82e6] rounded-full w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#3b82e6]" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div className="px-2">
                      <motion.h3 
                        className="font-['Urbanist',sans-serif] text-[#fffaf5] text-[48px] md:text-[66px] leading-none tracking-[-0.993px] group-hover:text-[#3b82e6] transition-colors"
                        whileHover={{ x: 10 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* See All Button */}
          <motion.div 
            variants={cardVariants}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3b82e6] text-white px-10 md:px-12 py-4 md:py-5 rounded-[60px] font-['Urbanist',sans-serif] font-medium text-[24px] md:text-[28px] tracking-[-0.56px] shadow-lg hover:shadow-xl transition-all"
            >
              See All
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}