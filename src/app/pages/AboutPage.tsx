import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Target, Zap } from 'lucide-react';
import contentData from '../../data/content.json';
import svgPaths from "../../imports/svg-7prhvava0y";
import imgUnsplashHXbdghd1JJa from '../../assets/2307e9fc8d99bba15eb3c4f90c31a624850eda34.png';

export function AboutPage() {
  const { whyChooseUs } = contentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering the highest standards in every project we undertake."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with years of industry experience and expertise."
    },
    {
      icon: Target,
      title: "Client Focus",
      description: "Your success is our priority. We work closely to understand and meet your needs."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and innovative solutions for optimal results."
    }
  ];

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
            <span className="font-semibold text-[#171717]">About </span>
            <span className="font-bold text-[#3b82e6]">Us</span>
          </h1>
          <p className="font-['Montserrat',sans-serif] text-[20px] text-[#525252] max-w-[800px] leading-relaxed">
            {whyChooseUs.description}
          </p>
        </motion.div>

        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-24 relative"
        >
          <div className="bg-[#f6faff] rounded-[40px] p-16 relative overflow-hidden">
            {/* Decorative Wave Pattern */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{ rotate: [149.642, 151.642, 149.642] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 1171.62 994.36">
                <path d={svgPaths.p3b4d4400} stroke="#3b82e6" strokeOpacity="0.3" strokeWidth="24" />
              </svg>
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-['Urbanist',sans-serif] font-bold text-[48px] text-[#171717] mb-6 leading-tight">
                  {whyChooseUs.title}
                </h2>
                <p className="font-['Montserrat',sans-serif] text-[18px] text-[#525252] mb-8 leading-relaxed">
                  We are a team of dedicated engineering professionals committed to excellence. 
                  With over a decade of experience, we've successfully delivered hundreds of projects 
                  across various sectors, earning the trust of clients worldwide.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {whyChooseUs.stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white rounded-[24px] p-6 shadow-lg">
                      <div className="font-['Urbanist',sans-serif] font-bold text-[48px] text-[#3b82e6] mb-2">
                        {stat.value}
                      </div>
                      <div className="font-['Montserrat',sans-serif] text-[14px] text-[#525252]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                  <img 
                    src={imgUnsplashHXbdghd1JJa} 
                    alt="Team" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-['Urbanist',sans-serif] font-bold text-[56px] text-[#171717] mb-12 text-center"
          >
            Why <span className="text-[#3b82e6]">Choose Us</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white border-2 border-[#e4e7ec] hover:border-[#3b82e6] rounded-[32px] p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3b82e6]/10 rounded-full mb-6">
                  <feature.icon className="w-10 h-10 text-[#3b82e6]" />
                </div>
                <h3 className="font-['Urbanist',sans-serif] font-bold text-[24px] text-[#171717] mb-4">
                  {feature.title}
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[14px] text-[#525252] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          <div className="bg-gradient-to-br from-[#3b82e6] to-[#2563eb] rounded-[32px] p-12">
            <h3 className="font-['Urbanist',sans-serif] font-bold text-[36px] text-white mb-6">
              Our Mission
            </h3>
            <p className="font-['Montserrat',sans-serif] text-[16px] text-white/90 leading-relaxed">
              To deliver innovative engineering solutions that transform ideas into reality, 
              exceeding client expectations through quality, precision, and dedication. 
              We strive to be the trusted partner for all engineering needs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#171717] to-[#2d2d2d] rounded-[32px] p-12">
            <h3 className="font-['Urbanist',sans-serif] font-bold text-[36px] text-white mb-6">
              Our Vision
            </h3>
            <p className="font-['Montserrat',sans-serif] text-[16px] text-white/90 leading-relaxed">
              To be the leading engineering firm recognized for excellence, innovation, 
              and sustainable practices. We envision a future where our solutions contribute 
              to building a better, more advanced world for generations to come.
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-br from-[#171717] to-[#2d2d2d] rounded-[40px] p-16 text-center"
        >
          <h2 className="font-['Urbanist',sans-serif] font-bold text-[48px] text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[18px] text-white/80 mb-8 max-w-[600px] mx-auto">
            Let's discuss how we can help bring your engineering vision to life with our expertise and dedication.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-[#3b82e6] hover:bg-[#2563eb] text-white font-['Urbanist',sans-serif] font-medium text-[18px] py-4 px-12 rounded-[30px] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
