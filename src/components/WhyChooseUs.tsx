/**
 * Why Choose Us Section Component
 * Highlights reasons to choose our company
 */

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Team',
      description: 'Highly skilled and experienced professionals'
    },
    {
      title: 'Quality Work',
      description: 'Commitment to excellence in every project'
    },
    {
      title: 'Timely Delivery',
      description: 'On-schedule project completion'
    },
    {
      title: 'Cost Effective',
      description: 'Best value for your investment'
    },
    {
      title: 'Customer Support',
      description: '24/7 dedicated support team'
    },
    {
      title: 'Proven Track Record',
      description: 'Trusted by hundreds of clients'
    }
  ];

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose AV Autotech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
