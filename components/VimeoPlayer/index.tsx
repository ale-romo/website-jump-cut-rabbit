'use client'
import Player from "@vimeo/player";
import React, { useEffect, useState } from "react";
import { Progress } from '@/components/ui/progress';
import { videoId } from "@/app/translations";

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState(0);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
  const [videoPlayer, setVideoPlayer] = useState<Player | null>(null);

  // Function to handle resizing the video dimensions
  const resizeHandler = () => {
    const aspectRatio = 16 / 9; // Vimeo videos typically have a 16:9 aspect ratio
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let width = viewportWidth;
    let height = viewportWidth / aspectRatio;

    if (height < viewportHeight) {
      height = viewportHeight;
      width = viewportHeight * aspectRatio;
    }

    setVideoDimensions({ width, height });

    // If the player already exists, update its DOM element dimensions
    if (videoPlayer) {
      const iframe = document.getElementById('bgVideo')?.querySelector('iframe');
      if (iframe) {
        iframe.style.width = `${width}px`;
        iframe.style.height = `${height}px`;
      }
    } else {
      initializeVimeoPlayer(width, height)
    }
  };

  // Function to initialize Vimeo player
  const initializeVimeoPlayer = (width: number, height: number) => {
    const opts = {
      id: videoId,
      width: width,
      height: height,
      autoplay: true,
      controls: false,
      loop: true,
    };

    const player = new Player("bgVideo", opts);

    player.setVolume(0);

    player.on("play", function () {
      setIsPlaying(true);
    });

    setVideoPlayer(player);
  };

  // Initial resize and set up event listener for window resize
  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [videoPlayer]);

  // Loader
  useEffect(() => {
    let interval = null;

    if (!isPlaying) {
      interval = setInterval(() => {
        setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : 0));
      }, 30); // 30 milliseconds to complete 100 steps in 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Initialize the Vimeo player when video dimensions change
  useEffect(() => {
    if (!videoPlayer) {
      initializeVimeoPlayer(videoDimensions.width, videoDimensions.height);
    }
  }, [videoDimensions]);

  return (
    <div>
      {!isPlaying &&
        <Progress value={counter} className="z-10 fixed top-0 left-0 w-full" />
      }
      <div id="bgVideo" className={`transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
}
