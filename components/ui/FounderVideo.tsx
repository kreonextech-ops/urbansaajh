"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative z-10 w-full aspect-[3/4]">
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-cover object-top cursor-pointer"
        onClick={togglePlay}
        playsInline
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-20 h-20 bg-espresso/80 text-cream rounded-full flex items-center justify-center hover:bg-espresso hover:scale-105 transition-all duration-300 z-20"
          aria-label="Play video"
        >
          <Play size={32} className="ml-1" fill="currentColor" />
        </button>
      )}
    </div>
  );
}
