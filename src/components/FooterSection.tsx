/**
 * Footer Section Component
 * Site footer with links and information
 */

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">AV Autotech</h4>
            <p className="text-gray-400">Leading provider of commercial construction and engineering services.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#services" className="hover:text-white">Construction</a></li>
              <li><a href="#services" className="hover:text-white">Engineering</a></li>
              <li><a href="#services" className="hover:text-white">Management</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AV Autotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
