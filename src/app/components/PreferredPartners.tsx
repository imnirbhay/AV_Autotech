import { usePartners } from '../../services/queries';

export function PreferredPartners() {
  const { data: partners, isLoading, isError, error } = usePartners();

  if (isLoading) {
    return (
      <section className="w-full flex justify-center py-12">
        <div className="w-full max-w-[1400px] bg-[#F6FAFF] px-20 py-12 flex items-center justify-center">
          <p className="text-gray-600">Loading partners...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    console.error('Partners fetch error:', error);
    return (
      <section className="w-full flex justify-center py-12">
        <div className="w-full max-w-[1440px] bg-[#F6FAFF] px-20 py-12 flex items-center justify-center">
          <p className="text-red-600">Failed to load partners</p>
        </div>
      </section>
    );
  }

  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <section className="w-full flex justify-center py-12 bg-[#F6FAFF]">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 flex flex-col items-center gap-8 md:gap-12">
        {/* Title Section */}
        <div className="w-full flex items-center justify-center">
          <h2 className="font-['Urbanist',sans-serif] font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#171717] text-center">
            Our Trusted <span className="text-[#3B82E6]">Partners</span>
          </h2>
        </div>

        {/* Partners Logo Section */}
        <div className="w-full flex items-center justify-center gap-4 sm:gap-8 md:gap-16 overflow-x-auto pb-2">
          {partners.map((partnerUrl, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={partnerUrl}
                alt={`Partner ${index + 1}`}
                className="max-h-[50px] sm:max-h-[75px] md:max-h-[100px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
