'use client'

import { useState, useEffect } from 'react';
import {Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Image from 'next/image';

const ContactButton = ({ title}: { title: string}) => {
  const [side, setSide] = useState<'top' | 'bottom' | 'left' | 'right'>('right');

  useEffect(() => setSide(window.innerWidth < 768 ? 'bottom' : 'right'), [])
  return <Popover>
    <PopoverTrigger className="font-heading uppercase font-bold bg-accent/90 py-5 px-8 text-black hover:bg-accent">{title}</PopoverTrigger>
    <PopoverContent className="p-3 flex-row flex items-center gap-3" side={side} sideOffset={0}>
      <a href=""><Image src="/icons/mail-icon.svg" width="0" height="0" className="w-10 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="LinkedIn" /></a>
      <a href=""><Image src="/icons/whatsapp-icon.svg" width="0" height="0" className="w-10 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="LinkedIn" /></a>
      <a href=""><Image src="/icons/linkedin-icon.svg" width="0" height="0" className="w-10 h-auto p-1 hover:bg-popover/50 rounded-lg" alt="LinkedIn" /></a>
    </PopoverContent>
  </Popover>
}

export default ContactButton;
