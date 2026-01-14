import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useServices } from '../../services/queries';

export function ServicesPage() {
  const { data: services = [] , isLoading, error } = useServices();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Urbanist',sans-serif] text-[24px] text-[#171717]">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Urbanist',sans-serif] text-[24px] text-red-500">Error loading services</p>
          <p className="font-['Montserrat',sans-serif] text-[16px] text-red-400 mt-4">{error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Debug Info removed for production */}

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
            <span className="font-bold text-[#3b82e6]">Services</span>
          </h1>
          <p className="font-['Montserrat',sans-serif] text-[20px] text-[#525252] max-w-[800px] leading-relaxed">
            We provide comprehensive engineering solutions tailored to your specific needs. 
            Our team of experts delivers excellence in every project, ensuring quality and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services && services.length > 0 ? (
            services.map((service: any) => (
              <motion.div
                key={service._id}
                variants={cardVariants}
                className="group h-[400px]"
              >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gradient-to-br from-[#3b82e6] to-[#1e3a8a]">
                  {/* Background Image */}
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Dark Overlay - Gets darker on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Service Title - Always visible */}
                    <h3 className="font-['Urbanist',sans-serif] font-bold text-[40px] text-white tracking-[-0.8px] mb-4 group-hover:mb-4 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description and Button - Hidden by default, shown on hover */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out">
                      <p className="font-['Montserrat',sans-serif] text-[14px] text-white/90 leading-relaxed mb-6">
                        {service.description}
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
              <p className="font-['Urbanist',sans-serif] text-[20px] text-[#525252]">No services available</p>
            </div>
          )}
        </motion.div>

        {/* Additional Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 bg-gradient-to-br from-[#171717] to-[#2d2d2d] rounded-[40px] p-16 text-center"
        >
          <h2 className="font-['Urbanist',sans-serif] font-bold text-[48px] text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[18px] text-white/80 mb-8 max-w-[600px] mx-auto">
            We offer tailored engineering solutions to meet your unique requirements. 
            Contact us to discuss your project.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-[#3b82e6] hover:bg-[#2563eb] text-white font-['Urbanist',sans-serif] font-medium text-[18px] py-4 px-12 rounded-[30px] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
