import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useProjects } from '../../services/queries';

export function Projects() {
  const { ref, isInView } = useInView();
  const { data: projects = [] } = useProjects();

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
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-12 flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="bg-[#171717] rounded-[50px] p-[60px] relative overflow-hidden">
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
                <span className="font-bold text-white">Projects</span>
              </div>
              <p className="font-['Montserrat',sans-serif] text-[24px] text-white tracking-[-0.48px] max-w-[489px]">
                Explore our portfolio of successful engineering projects. From concept to completion, we deliver excellence in every undertaking.
              </p>
            </motion.div>

            {/* Project Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects && Array.isArray(projects) && projects.length > 0 ? (
                projects.map((project: any, index: number) => (
                  <motion.div
                    key={project._id}
                    variants={cardVariants}
                    className="group"
                  >
                    <div className="relative h-[400px] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gradient-to-br from-[#3b82e6] to-[#1e3a8a]">
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Dark Overlay - Gets darker on hover */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />
                      {/* Content Container */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        {/* Project Title - Always visible */}
                        <h3 className="font-['Urbanist',sans-serif] font-bold text-[40px] text-white tracking-[-0.8px] mb-4 group-hover:mb-4 transition-all duration-300">
                          {project.title}
                        </h3>
                        {/* Category and Button - Hidden by default, shown on hover */}
                        <div className="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out">
                          <p className="font-['Montserrat',sans-serif] text-[14px] text-white/90 leading-relaxed mb-6">
                            {project.category}
                          </p>
                          {/* View Details Button */}
                          <button className="inline-flex items-center gap-2 bg-[#3b82e6] hover:bg-white text-white hover:text-[#3b82e6] font-['Urbanist',sans-serif] font-semibold text-[14px] py-3 px-6 rounded-[20px] transition-all duration-300">
                            View Details
                            <ChevronRight size={18} />
                          </button>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
