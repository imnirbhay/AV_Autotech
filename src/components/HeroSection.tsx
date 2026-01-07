/**
 * Hero Section Component
 * Main hero banner with title and call-to-action
 */

export default function HeroSection() {
  return (
    <div className="relative w-full" id="home">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">AV Autotech Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">Leading provider of commercial construction and engineering services</p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get Started</button>
        </div>
      </div>
    </div>
  );
}
