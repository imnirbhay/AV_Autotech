/**
 * Projects Section Component
 * Showcases completed and featured projects
 */

export default function ProjectsSection() {
  return (
    <div className="relative w-full py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-blue-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600">Project description goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
