/**
 * Contact Section Component
 * Contact form and information
 */

export default function ContactSection() {
  return (
    <div className="relative w-full py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@avautotech.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
