'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Video from 'react-youtube';
import Link from 'next/link';
const clients=[
  {
    url: '/clients/netflix.svg',
    name: 'Netflix',
  },
  {
    url: '/clients/hbo.svg',
    name: 'HBO',
  },
  {
    url: '/clients/disney.svg',
    name: 'Disney',
  },
  {
    url: '/clients/amazon.svg',
    name: 'Amazon',
  },
  {
    url: '/clients/fox.svg',
    name: 'Fox',
  },
]

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

  return (
    <>
      <section className={`pointer-events-none fixed z-0 top-0`}>
        <Video videoId="" opts={videoOptions} ref={videoRef} />
      </section>
      <div className="h-dvh" />

      {/* Header */}

      <section className={`fixed flex top-0 left-0 right-0 bottom-0 z-10 items-center gap-0 justify-center`}  >
        <h2 className="text-white text-2xl md:text-8xl font-heading font-bold tracking-wider uppercase">Jump</h2>
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16 mb-6 md:mb-16" />
        <h2 className="flex font-bold text-white text-2xl md:text-8xl mt-14 md:mt-32 font-heading tracking-wider uppercase rotate-12">Cut<div className="-mt-8 md:-mt-20 -rotate-12">Rabbit</div></h2>
      </section>

      {/* About Brief */}

      <section className="flex flex-col z-10 items-around px-10 md:px-20 bg-background/95 h-dvh w-full items-center justify-around" id="about">
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16" />
        <div className="text-center text-2xl flex flex-col gap-5 font-heading">
          <h1>We offer an efficient workflow, turning your projects into pure emotion.</h1><p>From award winning movies to impactful ads.</p>
        </div>
        <button className="font-heading font-bold uppercase bg-accent/90 py-5 px-8 text-black hover:bg-accent">Let&apos;s talk</button>
        <div className="flex items-center justify-center w-full flex-wrap">
          {clients.map((client, i) => <div key={`${client}-${i}`} className="flex justify-center flex-shrink-0 w-1/2 md:w-1/5 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Link href="/portfolio">
              <Image src={client.url} alt={client.name} width="0" height="0" className="w-20 md:w-28 h-auto m-5"/>
            </Link>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
