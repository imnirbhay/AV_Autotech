// Material UI Icon import
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useServices } from '../../services/queries';

export function Services() {
  const { ref, isInView } = useInView();
  const { data: services = [] } = useServices();

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
    <section id="services" ref={ref} className="py-12 flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="bg-[#F6FAFF] rounded-[50px] p-[60px] relative overflow-hidden">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 flex flex-col gap-[60px]"
          >
            {/* Header */}
            <motion.div 
              variants={cardVariants}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="font-['Urbanist',sans-serif] text-[64px] leading-none tracking-[-1.28px]">
                <span className="font-semibold text-[#3B82E6]">Our </span>
                <span className="font-bold text-[#344054]">Services</span>
              </div>
            </motion.div>

            {/* Service Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
              {services && Array.isArray(services) && services.length > 0 ? (
                services.slice(0, 3).map((service: any) => (
                  <motion.div
                    key={service._id}
                    variants={cardVariants}
                    className="group"
                  >
                    <div className="relative h-[400px] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gradient-to-br from-[#3b82e6] to-[#1e3a8a]">
                      {/* Background Image */}
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      
                      {/* Dark Overlay - Gets darker on hover with linear gradient */}
                      <div className="absolute inset-0 transition-all duration-300 pointer-events-none">
                        <div className="w-full h-full bg-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                        <div className="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, #000 97.45%)'}} />
                      </div>

                      {/* Content Container */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        {/* Service Title - Always visible */}
                        <h3 className="font-['Urbanist',sans-serif] font-bold text-[30px] text-white tracking-[-0.8px] mb-4 group-hover:mb-4 transition-all duration-300">
                          {service.title}
                        </h3>

                        {/* Description and Button - Hidden by default, shown on hover */}
                        <div className="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out">
                          <p className="font-['Montserrat',sans-serif] text-[14px] text-white/90 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          
                          {/* View Details Button */}
                          <button className="w-0 group-hover:w-full mx-auto flex items-center justify-center gap-2 bg-[#3b82e6] text-white font-['Urbanist',sans-serif] font-semibold text-[14px] py-3 px-6 rounded-[12px] transition-all duration-300 overflow-hidden">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="font-['Montserrat',sans-serif] text-[16px] text-white/60">No services available</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
        {/* See All Button overlapping bottom border */}
        <div className="relative flex justify-center">
          <a
            href="/services"
            className="absolute left-1/2 -translate-x-1/2 -bottom-8 inline-flex items-center justify-center bg-[#3B82E6] text-white font-['Urbanist',sans-serif] font-semibold text-[16px] w-[224px] h-[68px] rounded-[90px] opacity-100"
            style={{ zIndex: 10 }}
          >
            See All
            <ArrowForwardIcon className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
