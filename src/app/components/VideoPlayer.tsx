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

  // Helper to check if the URL is a YouTube link
  const isYouTubeUrl = (url: string) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  };

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  return (
    <section className="w-full border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:max-w-[1440px] md:mx-auto md:px-8 px-4 py-0 md:py-0 flex justify-center items-center"
      >
        <div className="relative w-[341px] md:w-full h-[280px] md:h-[400px] aspect-video rounded-[12px] md:rounded-2xl shadow-lg overflow-hidden">
          {isYouTubeUrl(videoUrl) ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(videoUrl)}&controls=0&modestbranding=1&showinfo=0&rel=0`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-none"
              frameBorder="0"
              style={{ aspectRatio: '16/9' }}
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[12px] md:rounded-2xl"
              src={videoUrl}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </motion.div>
    </section>
  );
}
