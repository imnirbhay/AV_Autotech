/**
 * Services Section Component
 * Displays the range of services offered
 */

export default function ServicesSection() {
  return (
    <div className="relative w-full py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Commercial Construction</h3>
            <p className="text-gray-600">Professional construction services for commercial projects</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Engineering Solutions</h3>
            <p className="text-gray-600">Expert engineering solutions for complex projects</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Project Management</h3>
            <p className="text-gray-600">Comprehensive project management and oversight</p>
          </div>
        </div>
      </div>
    </div>
  );
}
