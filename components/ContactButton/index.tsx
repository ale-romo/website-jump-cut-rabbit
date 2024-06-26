'use client'

import { useState, useEffect } from 'react';
import {Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Image from 'next/image';

const ContactButton = ({ title}: { title: string}) => {
  const [side, setSide] = useState<'top' | 'bottom' | 'left' | 'right'>('right');

  useEffect(() => setSide(window.innerWidth < 768 ? 'bottom' : 'right'), [])
  return <Popover>
    <PopoverTrigger className="bg-background/70 font-heading font-semibold text-xl uppercase border-2 border-accent text-accent px-4 py-2 rounded-lg">{title}</PopoverTrigger>
    <PopoverContent className="p-2 flex-row flex items-center gap-3 rounded-lg bg-popover/80" side={side} sideOffset={8}>
      <a href="mailto:jumpcutrabbit@gmail.com" target="_blank" title="Email"><Image src="/icons/mail-icon.svg" width="0" height="0" className="w-8 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="Email" /></a>
      <a href="https://wa.me/53XXXXXXXXXX" target="_blank" title="Whatsapp"><Image src="/icons/whatsapp-icon.svg" width="0" height="0" className="w-8 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="Whatsapp" /></a>
      {/* <a href=""><Image src="/icons/linkedin-icon.svg" width="0" height="0" className="w-8 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="LinkedIn" /></a> */}
    </PopoverContent>
  </Popover>
}

export default ContactButton;

<button className="bg-background/70 font-heading font-semibold uppercase border-2 border-accent text-accent px-4 py-2 rounded-lg">Let&apos;s Talk</button>
