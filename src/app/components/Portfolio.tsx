import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import imgFrame26 from '../../assets/5cf28d4ff7cabdc9b27cdea620bb18818f2d6f54.png';
import imgFrame28 from '../../assets/2e2146d6ef43febb94a0229038f623c9a714e196.png';
import { useProjects } from '../../services/queries';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export function Portfolio() {
  const { ref, isInView } = useInView();
  const projectImages = [imgFrame26, imgFrame28];
  const { data: projectsResponse } = useProjects();
  const projects = Array.isArray(projectsResponse) ? projectsResponse : (projectsResponse?.data || []);

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
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
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
            {projects && Array.isArray(projects) && projects.length > 0 ? (
              projects.slice(0, 2).map((project: any, index: number) => (
              <motion.div
                key={project._id}
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
                    src={project.image} 
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-['Montserrat',sans-serif] text-[16px] text-white/60">No projects available</p>
              </div>
            )}
          </motion.div>

          {/* See All Button */}
          <div className="relative flex justify-center mt-4">
            <a
              href="/projects"
              className="inline-flex items-center justify-center bg-[#3B82E6] text-white font-['Urbanist',sans-serif] font-semibold text-[16px] w-[224px] h-[68px] rounded-[90px] opacity-100 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 10 }}
            >
              See All
              <ArrowForwardIcon className="ml-3" style={{ fontSize: 24 }} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}