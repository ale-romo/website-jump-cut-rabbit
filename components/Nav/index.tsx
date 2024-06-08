'use client'
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import HamburgerBtn from '@/components/Nav/hamburgerBtn';
import LanguageToggle from '@/components/LanguageToggle';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer"
import Link from 'next/link';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslations().menu;

  return <>
    <div className="z-50 fixed top-8 right-8 flex">
      <HamburgerBtn isOpen={openMenu} cb={setOpenMenu} />
    </div>
    <Drawer open={openMenu} onOpenChange={setOpenMenu} direction='left'>
      <DrawerContent>
        <DrawerHeader className="pt-16">
          <ul className="font-heading text-4xl flex flex-col gap-10 uppercase text-center">
            <li><Link href="/" onClick={() => setOpenMenu(false)}>{t.home}</Link></li>
            <li><Link href="/about" onClick={() => setOpenMenu(false)}>{t.about}</Link></li>
            <li><Link href="/editors" onClick={() => setOpenMenu(false)}>{t.editors}</Link></li>
            <li><Link href="/portfolio" onClick={() => setOpenMenu(false)}>{t.portfolio}</Link></li>
            <li><LanguageToggle /></li>
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  </>
}

export default Nav;
