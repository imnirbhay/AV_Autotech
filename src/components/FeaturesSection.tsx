/**
 * Features Section Component
 * Highlights key features and benefits
 */

export default function FeaturesSection() {
  return (
    <div className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">10+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">500+</div>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">100+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">24/7</div>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
