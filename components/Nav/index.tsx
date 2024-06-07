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
            <li><Link href="/" onClick={() => setOpenMenu(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpenMenu(false)}>About</Link></li>
            <li><Link href="/editors" onClick={() => setOpenMenu(false)}>Editors</Link></li>
            <li><Link href="/portfolio" onClick={() => setOpenMenu(false)}>Portfolio</Link></li>
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  </>
}

export default Nav;
