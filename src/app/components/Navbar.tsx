import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'About', id: 'about', path: '/about' },
    { name: 'Service', id: 'services', path: '/services' },
    { name: 'Project', id: 'projects', path: '/projects' },
    { name: 'Contact', id: 'contact', path: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    if (item.path.includes('#')) {
      const id = item.path.split('#')[1];
      if (location.pathname !== '/') {
        window.location.href = item.path;
      } else {
        scrollToSection(id);
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1280px] h-[86px]"
      >
        <div className="bg-[#171717] rounded-[50px] shadow-[0px_4px_8px_0px_rgba(0,37,88,0.2)] px-4 md:px-10 flex items-center justify-between h-[86px]">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-['Wallpoet',sans-serif] text-[24px] md:text-[32px] text-white tracking-[-0.48px] cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            AV AUTOTECH
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.slice(0, 3).map((item) => (
              item.path.includes('#') ? (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 xl:px-10 py-3 xl:py-5 rounded-[60px] text-[18px] xl:text-[20px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all ${
                    activeSection === item.id
                      ? 'bg-[#3b82e6] text-white font-bold'
                      : 'text-white font-normal hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ) : (
                <Link key={item.id} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 xl:px-10 py-3 xl:py-5 rounded-[60px] text-[18px] xl:text-[20px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all ${
                      location.pathname === item.path
                        ? 'bg-[#3b82e6] text-white font-bold'
                        : 'text-white font-normal hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
          </div>

          {/* Desktop Right Nav Links */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.slice(3).map((item) => (
              item.path.includes('#') ? (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 xl:px-6 py-3 xl:py-5 rounded-[60px] text-[18px] xl:text-[20px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all ${
                    activeSection === item.id
                      ? 'bg-[#3b82e6] text-white font-bold'
                      : 'text-white font-normal hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ) : (
                <Link key={item.id} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 xl:px-6 py-3 xl:py-5 rounded-[60px] text-[18px] xl:text-[20px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all ${
                      location.pathname === item.path
                        ? 'bg-[#3b82e6] text-white font-bold'
                        : 'text-white font-normal hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 md:top-28 left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-[90%] max-w-[600px] lg:hidden"
        >
          <div className="bg-[#171717] rounded-[30px] shadow-2xl p-6 flex flex-col gap-3">
            {navItems.map((item) => (
              item.path.includes('#') ? (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-4 rounded-[20px] text-[18px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all text-left ${
                    activeSection === item.id
                      ? 'bg-[#3b82e6] text-white font-bold'
                      : 'text-white font-normal hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ) : (
                <Link key={item.id} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-4 rounded-[20px] text-[18px] font-['Urbanist',sans-serif] tracking-[-0.3px] transition-all text-left ${
                      location.pathname === item.path
                        ? 'bg-[#3b82e6] text-white font-bold'
                        : 'text-white font-normal hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}