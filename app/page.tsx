'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Video from 'react-youtube';
import { Button } from '@/components/ui/button';
import HamburgerBtn from '@/components/hamburgerBtn';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from 'next/link';

const clients=[
  {
    url: '/clients/netflix.svg',
    name: 'Netflix',
  },
  {
    url: '/clients/netflix.svg',
    name: 'HBO',
  },
  {
    url: '/clients/netflix.svg',
    name: 'Disney',
  },
  {
    url: '/clients/netflix.svg',
    name: 'Amazon',
  },
]


export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)
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
    <main className="w-full flex flex-col justify-center items-center bg-black">
      <div className="z-50 fixed top-10 right-10 flex">
        <HamburgerBtn isOpen={openMenu} cb={setOpenMenu} />
      </div>
      <Drawer open={openMenu} onOpenChange={setOpenMenu} direction='left'>
        <DrawerContent>
          <DrawerHeader className="pt-16">
            <Link href="/">About Us</Link>
            <Link href="/">Our team</Link>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      <div className={`pointer-events-none fixed z-0 top-0 ${openMenu ? 'blur-lg': ''}`}>
        <Video videoId="DUfv1v_onVA" opts={videoOptions} ref={videoRef} />
      </div>
      <div className={`h-screen flex flex-col w-full z-10 items-center justify-center opacity-70 gap-4 md:gap-8 ${openMenu ? 'blur-lg': ''}`}>
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className="h-auto w-48" />
        <h1 className="text-white text-3xl md:text-6xl tracking-widest font-heading">Jump Cut Rabbit</h1>
      </div>
      <div className="flex z-10 bg-white w-full items-center flex-wrap">
        {clients.map((client, i) => <Image key={`${client}-${i}`} src={client.url} alt={client.name} width="0" height="0" className="w-60 h-auto"/>
        )}
      </div>
    </main>
  );
}
