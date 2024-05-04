"use client";
import { useRef, useState } from "react";

const videoLinks = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoLinks.length - 1 : prevIndex - 1
    );
  };

  const videoref = useRef(null);
  return (
    <div className="bg-gray-600 w-full h-full">
      <div className=" ">
        <video
          className="w-full h-[500px]"
          src={videoLinks[currentVideoIndex]}
          ref={videoref}
          autoPlay
          controls
          muted
        ></video>
      </div>
      <button onClick={prevVideo}>Previous</button>
      <button onClick={nextVideo}>Next</button>
    </div>
  );
};

export default VideoCarousel;
