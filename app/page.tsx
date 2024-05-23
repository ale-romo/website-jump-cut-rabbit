'use client'
import React, { useRef, useEffect, useState } from 'react';
import Video from 'react-youtube';

export default function Home() {
  const videoRef = useRef(null);
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

  const videoOptions = {
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 0, // Hide player controls
      modestbranding: 1, // Hide YouTube logo and some UI elements
      loop: 1, // Loop the video
      playlist: 'O6TbrxNPcOU', // Specify the video ID
      mute: 1, // Mute the video
      origin: 'https://your-website-url.com', // Specify the origin
      // Set desired playback quality
      // Options: 'small', 'medium', 'large', 'hd720', 'hd1080', 'highres'
      // Default: 'auto'
      // Note: Availability of quality options may vary depending on the video
      quality: 'highres',
      showinfo: 0 // Hide video title and additional player actions
    },
    width: videoDimensions.width,
    height: videoDimensions.height
  };

  return (
    <main className="w-full h-screen fixed top-0 left-0 z-0 overflow-hidden">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div className="video-container">
          <Video videoId="O6TbrxNPcOU" opts={videoOptions} ref={videoRef} />
        </div>
      </div>
      <style jsx>{`
        .video-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none; /* Disable mouse interaction */
        }
      `}</style>
    </main>
  );
}
