import { useState } from "react";

export default function VideoCarousel({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="aspect-video bg-black rounded-md overflow-hidden">
        <video
          className="w-full h-full object-contain"
          src={videos[currentIndex]}
          autoPlay
          muted
          loop
          playsInline
          controls={true}
        />
      </div>

      <button
        onClick={prevVideo}
        className="absolute font-medium text-xl left-2 top-1/2 transform -translate-y-1/2 bg-blue-100 bg-opacity-75 rounded-full px-4 py-2 text-black"
      >
        ‹
      </button>
      <button
        onClick={nextVideo}
        className="absolute font-medium text-xl right-2 top-1/2 transform -translate-y-1/2 bg-blue-100 bg-opacity-75 rounded-full px-4 py-2 text-black"
      >
        ›
      </button>

      <div className="flex justify-center mt-2 space-x-2">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
