import { motion } from 'motion/react';
import { useHomePageVideo } from '../../services/queries';

export function VideoPlayer() {
  const { data: videoData, isLoading, error } = useHomePageVideo();

  if (isLoading) {
    return (
      <section className="w-full border-t border-gray-200">
        <div className="w-full md:max-w-[1350px] md:mx-auto md:px-8 px-4 py-0 md:py-0 flex justify-center items-center">
          <div className="w-[341px] md:w-full h-[280px] md:h-[400px] bg-gray-200 rounded-[12px] md:rounded-2xl animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Loading video...</p>
          </div>
        </div>
      </section>
    );
  }

  const videoUrl = (videoData as any)?.videoUrl || (videoData as any)?.data?.videoUrl;
  
  if (error || !videoUrl) {
    return (
      <section className="w-full border-t border-gray-200">
        <div className="w-full md:max-w-[1440px] md:mx-auto md:px-8 px-4 py-0 md:py-0 flex justify-center items-center">
          <div className="w-[341px] md:w-full h-[280px] md:h-[400px] bg-gray-100 rounded-[12px] md:rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <p className="text-gray-500">Video not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:max-w-[1440px] md:mx-auto md:px-8 px-4 py-0 md:py-0 flex justify-center items-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[341px] md:w-full h-[280px] md:h-[400px] object-cover rounded-[12px] md:rounded-2xl shadow-lg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
