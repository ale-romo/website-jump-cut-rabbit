'use client'
import { useState } from 'react';
import HamburgerBtn from '@/components/Nav/hamburgerBtn';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer"
import Link from 'next/link';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return <>
    <div className="z-50 fixed top-14 right-10 flex">
      <HamburgerBtn isOpen={openMenu} cb={setOpenMenu} />
    </div>
    <Drawer open={openMenu} onOpenChange={setOpenMenu} direction='left'>
      <DrawerContent>
        <DrawerHeader className="pt-16">
          <ul className="font-heading text-4xl flex flex-col gap-10 uppercase text-center">
            <li><a href="/about">About</a></li>
            <li><Link href="/editors">Editors</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  </>
}

export default Nav;
