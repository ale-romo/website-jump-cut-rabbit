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
    <main className="w-full min-h-dvh flex flex-col justify-center items-center bg-black">
      <div className="z-50 fixed top-14 right-10 flex">
        <HamburgerBtn isOpen={openMenu} cb={setOpenMenu} />
      </div>
      <Drawer open={openMenu} onOpenChange={setOpenMenu} direction='left'>
        <DrawerContent>
          <DrawerHeader className="pt-16">
            <ul className="font-heading text-4xl flex flex-col gap-10 uppercase text-center">
              <li><Link href="/">Studio</Link></li>
              <li><Link href="/">Editors</Link></li>
              <li><Link href="/">Portfolio</Link></li>
            </ul>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      <div className={`pointer-events-none fixed z-0 top-0 ${openMenu ? 'blur-lg': ''}`}>
        <Video videoId="" opts={videoOptions} ref={videoRef} />
      </div>
      <div className="h-dvh" />
      <div className={`fixed flex top-0 left-0 right-0 bottom-0 z-10 items-center gap-0 justify-center ${openMenu ? 'blur-lg': ''}`}>
        <h1 className="text-white text-2xl md:text-8xl font-heading tracking-widest uppercase">Jump</h1>
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16 mb-16" />
        <h1 className="flex text-white text-2xl md:text-8xl mt-32 font-heading tracking-widest uppercase rotate-12">Cut <div className="-mt-20 -rotate-12">Rabbit</div></h1>
      </div>
      <div className="flex flex-col z-10 bg-background/95 h-dvh w-full items-center justify-center">
        <button className="font-heading uppercase bg-accent/90 py-5 px-8 text-black hover:bg-accent">Work with us</button>
        {clients.map((client, i) => <Image key={`${client}-${i}`} src={client.url} alt={client.name} width="0" height="0" className="w-60 h-auto"/>
        )}
      </div>
    </main>
  );
}
