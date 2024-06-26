'use client'
import Player from "@vimeo/player";
import React, { useEffect, useState } from "react";
import { Progress } from '@/components/ui/progress';

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState(0);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

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

    // Initialize the Vimeo player once dimensions are set
    initializeVimeoPlayer(width, height);
  };

  // Function to initialize Vimeo player
  const initializeVimeoPlayer = (width, height) => {
    const opts = {
      id: 968486878,
      width: width,
      height: height,
      autoplay: true,
      controls: false,
      loop: true,
    };

    const video01Player = new Player("bgVideo", opts);

    video01Player.setVolume(0);

    video01Player.on("play", function () {
      setIsPlaying(true);
    });
  };

  // Initial resize and set up event listener for window resize
  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

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

  return (
    <div>
      {!isPlaying &&
        <Progress value={counter} className="z-10 fixed top-0 left-0 w-full" />
      }
      <div id="bgVideo"></div>
    </div>
  );
}
