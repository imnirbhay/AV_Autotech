import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useProjects } from '../../services/queries';
import defaultProjectImg from '../../assets/5cf28d4ff7cabdc9b27cdea620bb18818f2d6f54.png';

export function ProjectsPage() {
  const { data: projects = [], isLoading, error } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-8 pt-28 md:pt-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 text-[#171717] hover:text-[#3b82e6] transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="font-['Urbanist',sans-serif] text-[18px] font-medium">Back to Home</span>
        </Link>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-['Urbanist',sans-serif] text-[80px] leading-none tracking-[-1.6px] mb-6">
            <span className="font-semibold text-[#171717]">Our </span>
            <span className="font-bold text-[#3b82e6]">Projects</span>
          </h1>
          <p className="font-['Montserrat',sans-serif] text-[20px] text-[#525252] max-w-[800px] leading-relaxed">
            Explore our portfolio of successful engineering projects. 
            From concept to completion, we deliver excellence in every undertaking.
          </p>
        </motion.div>

        {/* Projects Grid (API only) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <span className="text-lg text-gray-500">Loading projects...</span>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <span className="text-lg text-red-500">Error loading projects</span>
            </div>
          ) : projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <span className="text-lg text-gray-500">No projects available</span>
            </div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-[24px] h-[420px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Background Image from API or fallback */}
                  <img 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={project.image || defaultProjectImg} 
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                    style={{
                      backgroundImage: "linear-gradient(192.536deg, rgba(0, 0, 0, 0) 33.316%, rgba(0, 0, 0, 0.416) 68.02%, rgba(0, 0, 0, 0.9) 103.58%)"
                    }}
                  />
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start">
                      <span className="bg-[#3b82e6]/90 text-white px-4 py-2 rounded-[20px] font-['Montserrat',sans-serif] text-[14px] font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                      {/* Arrow Button */}
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.15 }}
                        className="bg-white border-[3px] border-[#3b82e6] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg"
                      >
                        <ArrowUpRight className="w-5 h-5 text-[#3b82e6]" />
                      </motion.div>
                    </div>
                    {/* Title and Description */}
                    <div>
                      <motion.h3 
                        className="font-['Urbanist',sans-serif] font-bold text-[48px] text-white leading-none tracking-[-0.96px] mb-3 group-hover:text-[#3b82e6] transition-colors duration-300"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="font-['Montserrat',sans-serif] text-[14px] text-white/90 leading-relaxed">
                        Professional engineering excellence in {project.category?.toLowerCase?.() || ''}
                      </p>
                    </div>
                  </div>
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-[#3b82e6] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-[#3b82e6] to-[#2563eb] rounded-[32px] p-10 text-center">
            <div className="font-['Urbanist',sans-serif] font-bold text-[64px] text-white mb-2">450+</div>
            <div className="font-['Montserrat',sans-serif] text-[18px] text-white/90">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-[#171717] to-[#2d2d2d] rounded-[32px] p-10 text-center">
            <div className="font-['Urbanist',sans-serif] font-bold text-[64px] text-white mb-2">60+</div>
            <div className="font-['Montserrat',sans-serif] text-[18px] text-white/90">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-[#3b82e6] to-[#2563eb] rounded-[32px] p-10 text-center">
            <div className="font-['Urbanist',sans-serif] font-bold text-[64px] text-white mb-2">10+</div>
            <div className="font-['Montserrat',sans-serif] text-[18px] text-white/90">Years Experience</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-24 bg-gradient-to-br from-[#171717] to-[#2d2d2d] rounded-[40px] p-16 text-center"
        >
          <h2 className="font-['Urbanist',sans-serif] font-bold text-[48px] text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[18px] text-white/80 mb-8 max-w-[600px] mx-auto">
            Let's collaborate to bring your vision to life with our engineering expertise.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-[#3b82e6] hover:bg-[#2563eb] text-white font-['Urbanist',sans-serif] font-medium text-[18px] py-4 px-12 rounded-[30px] transition-colors duration-300"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
