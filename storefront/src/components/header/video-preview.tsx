"use client";
import { useEffect, useRef } from "react";

export default function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden absolute z-[-1] top-0 left-0">
      <video ref={videoRef} autoPlay loop playsInline muted className="min-w-full min-h-full object-cover">
        <source src="/videos/header-video-h264.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
