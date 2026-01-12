import { motion } from 'motion/react';
import { useHomePageVideo } from '../../services/queries';

export function VideoPlayer() {
  const { data: videoData, isLoading, error } = useHomePageVideo();

  if (isLoading) {
    return (
      <section className="w-full border-t border-gray-200">
        <div className="w-full max-w-[1514px] mx-auto px-[71px] pt-[60px] flex justify-center items-center" style={{ height: 400 }}>
          <div className="w-full h-full bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
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
        <div className="w-full max-w-[1514px] mx-auto px-[71px] pt-[60px] flex justify-center items-center" style={{ height: 400 }}>
          <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
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
        className="w-full max-w-[1514px] mx-auto px-[71px] pt-[60px] flex justify-center items-center gap-[60px]"
        style={{ height: 400 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
