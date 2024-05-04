// @ts-nocheck
"use client";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from "react-icons/fa";

const videoLinks = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoLinks.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoLinks.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    const video = videoref.current;
    if (video && typeof video.play === "function") {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const videoref = useRef(null);
  return (
    <div className="bg-gray-700 rounded-lg w-full h-[600px] relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <video
          width={"500px"}
          height={"700px"}
          className="h-[500px]"
          src={videoLinks[currentVideoIndex]}
          ref={videoref}
          controls={false}
          autoPlay={isPlaying}
          muted
        ></video>
        <button
          className="absolute inset-0 flex items-center justify-center w-full h-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FaPause className="text-white text-5xl" />
          ) : (
            <FaPlay className="text-white text-5xl" />
          )}
        </button>
      </div>

      <div className="flex justify-center text-white  absolute bottom-14 left-0 right-0">
        Tell me about yourself
      </div>
      <div className="flex w-full items-center p-2 justify-between absolute bottom-0 left-0 right-0">
        <button
          onClick={prevVideo}
          className="bg-gray-500 w-10 h-10 flex justify-center rounded-lg items-center text-white"
        >
          <FaAngleLeft />
        </button>
        <div className="text-white">Questions 1/11</div>
        <button
          onClick={nextVideo}
          className="bg-gray-600 w-10 h-10 flex justify-center rounded-lg items-center text-white"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
