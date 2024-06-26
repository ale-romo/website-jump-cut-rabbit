'use client'
import { useEffect, useRef, useState } from 'react';
import Video, { YouTubeEvent } from 'react-youtube';
import { Progress } from '@/components/ui/progress';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      let interval: NodeJS.Timeout | null = null;

      if (!isPlaying) {
        interval = setInterval(() => {
          setCounter((prevCounter) => (prevCounter < 100 ? prevCounter + 1 : 0));
        }, 30); // 30 milliseconds to complete 100 steps in 3 seconds
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isPlaying]);

    useEffect(() => {
      setTimeout (() => {
        setIsPlaying(true);
      }, 1500)

      const resizeHandler = () => {
        const aspectRatio = 16 / 9; // YouTube videos typically have a 16:9 aspect ratio
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        let width = viewportWidth;
        let height = viewportWidth / aspectRatio;

        if (height < viewportHeight) {
          height = viewportHeight;
          width = viewportHeight * aspectRatio;
        }

        setVideoDimensions({ width, height });
      };

      // Initial resize
      resizeHandler();
      // Listen for window resize events
      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    //fade in when it starts playing
    const onPlayerStateChange = (event: YouTubeEvent<number>) => {
      if (event && event.data === 1) {
        setIsPlaying(true);
      }
    };

    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        loop: 1,
        playlist: 'DUfv1v_onVA',
        mute: 1,
        origin: 'https://your-website-url.com',
        quality: 'highres',
        showinfo: 0
      },
      width: videoDimensions.width,
      height: videoDimensions.height
    };

  return <div className="w-full h-dvh">
    {!isPlaying &&
      <Progress value={counter} className="z-10 fixed top-0 left-0 w-full" />
    }
    <div className={`flex fixed top-0 left-0 right-0 bottom-0 bg-background transition-opacity duration-1000 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
    <Video videoId="" opts={videoOptions} ref={videoRef} onStateChange={onPlayerStateChange} />
  </div>
}
export default VideoPlayer;
