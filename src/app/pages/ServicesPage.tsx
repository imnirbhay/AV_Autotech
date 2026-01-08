import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import contentData from '../../data/content.json';
import imgRectangle7 from '../../assets/ba56d13b70a40e5606603b63d86c379e61a059e9.png';
import imgRectangle8 from '../../assets/6fddbd2b03eab49a4f76b3a0e34d3e8a40d52a9f.png';
import imgRectangle9 from '../../assets/ccdd92b1bfee9ab07bef167270461de5ba241a23.png';

export function ServicesPage() {
  const serviceImages = [imgRectangle7, imgRectangle8, imgRectangle9];

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-8">
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
          {contentData.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white border-2 border-[#e4e7ec] hover:border-[#3b82e6] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <motion.img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-['Urbanist',sans-serif] font-bold text-[36px] text-white tracking-[-0.72px]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="font-['Montserrat',sans-serif] text-[16px] text-[#525252] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-[#171717] font-['Montserrat',sans-serif] text-[14px]">
                      <div className="w-2 h-2 bg-[#3b82e6] rounded-full" />
                      Professional expertise
                    </li>
                    <li className="flex items-center gap-3 text-[#171717] font-['Montserrat',sans-serif] text-[14px]">
                      <div className="w-2 h-2 bg-[#3b82e6] rounded-full" />
                      Quality assurance
                    </li>
                    <li className="flex items-center gap-3 text-[#171717] font-['Montserrat',sans-serif] text-[14px]">
                      <div className="w-2 h-2 bg-[#3b82e6] rounded-full" />
                      Timely delivery
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-[#3b82e6] hover:bg-[#2563eb] text-white font-['Urbanist',sans-serif] font-medium text-[16px] py-3 px-6 rounded-[24px] transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
