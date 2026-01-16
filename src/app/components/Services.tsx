// Material UI Icon import
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useServices } from '../../services/queries';
import { Link } from 'react-router-dom';

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
        <div className="bg-[#F6FAFF] rounded-[21.07px] border-t-[0.42px] border-[#3b82e6] relative overflow-hidden mx-auto mt-[56px] w-full max-w-[340px] h-[540px] pt-[25.28px] pr-4 pb-[23.5px] pl-4 gap-[16.85px] md:max-w-full md:rounded-[50px] md:p-[60px] md:w-full md:h-auto md:mt-0">

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
              <div className="font-['Urbanist',sans-serif] md:text-[64px] text-[32px] leading-none tracking-[-1.28px]">
                <span className="font-semibold text-[#3B82E6]">Our </span>
                <span className="font-bold text-[#344054]">Services</span>
              </div>
            </motion.div>

            {/* Service Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-full px-0"
            >
              {services && Array.isArray(services) && services.length > 0 ? (
                services.slice(0, 3).map((service: any) => (
                  <motion.div
                    key={service._id}
                    variants={cardVariants}
                    className="group"
                  >
                    <div className="relative w-full h-[176px] md:w-auto md:max-w-none md:h-[400px] rounded-[13.9px] border-t-[0.42px] border-[#3b82e6] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gradient-to-br from-[#3b82e6] to-[#1e3a8a] mx-auto max-w-[300px] md:max-w-full">
                      {/* Background Image */}
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {/* Dark Overlay - Gets darker on hover with linear gradient */}
                      <div className="absolute inset-0 transition-all duration-300 pointer-events-none">
                        <div className="w-full h-full bg-black/40 md:group-hover:opacity-0 transition-opacity duration-300" />
                        <div className="w-full h-full absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, #000 97.45%)'}} />
                      </div>
                      {/* Content Container */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        {/* Service Title - Always visible, at bottom on mobile, at top on desktop */}
                        <h3 className="font-['Urbanist',sans-serif] font-bold md:text-[30px] text-[16px] text-white tracking-[-0.8px] mb-4 group-hover:mb-4 transition-all duration-300 text-left md:text-left md:static absolute left-0 right-0 bottom-0 px-2 md:px-0">
                          {service.title}
                        </h3>
                        {/* Description and Button - Hidden by default, shown on hover */}
                        <div className="max-h-0 overflow-hidden md:group-hover:max-h-64 transition-all duration-500 ease-in-out text-left md:text-left">
                          <p className="font-['Montserrat',sans-serif] text-[14px] text-white/90 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          {/* View Details Button */}
                          <button className="w-0 md:group-hover:w-full flex items-center justify-start gap-2 bg-[#3b82e6] text-white font-['Urbanist',sans-serif] font-semibold text-[14px] py-3 px-6 rounded-[12px] transition-all duration-300 overflow-hidden">
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
        <div className="relative flex justify-center mt-4 mb-2 md:mt-0 md:mb-0">
          <Link
            to="/services"
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 inline-flex items-center justify-center bg-[#3B82E6] text-white font-['Urbanist',sans-serif] font-semibold text-[13px] w-[156px] h-[48px] rounded-[90px] opacity-100 hover:bg-[#2563eb] transition-colors md:w-[224px] md:h-[68px] md:text-[16px]"
            style={{ zIndex: 10 }}
          >
            See All
            <ArrowForwardIcon className="ml-2 md:ml-3" style={{ fontSize: '1.1em' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
