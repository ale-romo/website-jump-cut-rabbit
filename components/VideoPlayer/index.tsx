'use client'
import { useEffect, useRef, useState } from 'react';
import Video, { YouTubeEvent } from 'react-youtube';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
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
      // The player state '1' means the video is playing
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
    <Video videoId="" opts={videoOptions} ref={videoRef} onStateChange={onPlayerStateChange} />
    <div className={`fixed w-full h-dvh bg-background fade-out ${isPlaying ? 'fade-out' : ''}`} />
  </div>
}
export default VideoPlayer;
