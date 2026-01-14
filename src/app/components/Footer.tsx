import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import contentData from '../../data/content.json';
import imgFrame326 from '../../assets/3f0c7249e0ba3d9e3c1556a26c76670f11a0068c.png';

export function Footer() {
  const { footer } = contentData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <img 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-10" 
        src={imgFrame326} 
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                onClick={scrollToTop}
                className="font-['Wallpoet',sans-serif] text-[40px] text-white tracking-[-0.48px] cursor-pointer"
              >
                AV Autotech
              </motion.h3>
              <p className="font-['Montserrat',sans-serif] text-white/70 text-[16px] leading-relaxed">
                {footer.description}
              </p>
              <div className="flex items-center gap-4 mt-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.button
                    key={index}
                    onClick={(e) => e.preventDefault()}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 hover:bg-[#3b82e6] rounded-full flex items-center justify-center transition-all"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Column 2 - Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-['Urbanist',sans-serif] font-bold text-white text-[24px] tracking-[-0.48px]">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {footer.sections.slice(0, 3).map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="font-['Montserrat',sans-serif] text-white/70 text-[16px] hover:text-[#3b82e6] transition-all cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-['Urbanist',sans-serif] font-bold text-white text-[24px] tracking-[-0.48px]">
                Our Process
              </h4>
              <ul className="flex flex-col gap-3">
                {footer.sections.slice(3).map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="font-['Montserrat',sans-serif] text-white/70 text-[16px] hover:text-[#3b82e6] transition-all cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-['Urbanist',sans-serif] font-bold text-white text-[24px] tracking-[-0.48px]">
                Let's Connect there
              </h4>
              <div className="flex flex-col gap-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-white/70 hover:text-[#3b82e6] transition-all cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-['Montserrat',sans-serif] text-[16px]">
                    contact@AV Autotech.com
                  </span>
                </motion.div>
                <motion.div 
                
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-white/70 hover:text-[#3b82e6] transition-all cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-['Montserrat',sans-serif] text-[16px]">
                    +1 (555) 123-4567
                  </span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-white/70 hover:text-[#3b82e6] transition-all cursor-pointer"
                >
                  <MapPin className="w-5 h-5 mt-1" />
                  <span className="font-['Montserrat',sans-serif] text-[16px]">
                    123 Engineering St,<br />Tech City, TC 12345
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-8 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <p className="font-['Montserrat',sans-serif] text-white/50 text-[14px]">
                © {new Date().getFullYear()} AV Autotech. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <motion.button 
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ y: -2 }}
                  className="font-['Montserrat',sans-serif] text-white/50 hover:text-[#3b82e6] text-[14px] transition-all"
                >
                  Privacy Policy
                </motion.button>
                <motion.button 
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ y: -2 }}
                  className="font-['Montserrat',sans-serif] text-white/50 hover:text-[#3b82e6] text-[14px] transition-all"
                >
                  Terms of Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
