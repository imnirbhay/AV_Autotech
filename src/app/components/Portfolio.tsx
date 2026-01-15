import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import { useProjects } from '../../services/queries';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export function Portfolio() {
  const { ref, isInView } = useInView();
  const { data: projects = [] } = useProjects();

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
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-12 flex justify-center px-4 md:px-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-6 md:gap-8"
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="font-['Urbanist',sans-serif] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-[#344054] tracking-[-1.28px] text-center">
              <span className="font-semibold">Lets have a look at my </span>
              <span className="text-[#3b82e6]">Previous Work</span>
            </div>
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
                className="cursor-pointer"
              >
                <div className="relative rounded-[19px] h-[280px] md:h-[351px] overflow-hidden shadow-xl">
                  {/* Background Image */}
                  <img 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover" 
                    src={project.image} 
                  />
                  
                  {/* Gradient Overlay - Same as services hover gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 97.45%)"
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full p-4 flex flex-col justify-between">
                    {/* Arrow Button */}
                    <div className="flex justify-end">
                      <div className="bg-white border-[3.783px] border-[#3b82e6] rounded-full w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#3b82e6]" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="px-2">
                      <h3 className="font-['Urbanist',sans-serif] text-[#fffaf5] text-[24px] md:text-[66px] leading-none tracking-[-0.993px]">
                        {project.title}
                      </h3>
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
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-[#3B82E6] text-white font-['Urbanist',sans-serif] font-semibold text-[16px] w-[224px] h-[68px] rounded-[90px] opacity-100 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 10 }}
            >
              See All
              <ArrowForwardIcon className="ml-3" style={{ fontSize: 24 }} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}