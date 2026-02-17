'use client'
import Revealer from '@/components/Revealer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";
import ContactButton from '@/components/ContactButton';
import ChevDown from '@/components/ChevDown';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Revealer />
      <div className="h-dvh" />

      {/* Header */}

      <section className={`fixed flex flex-col top-0 left-0 right-0 bottom-0 z-10 items-center gap-2 justify-center`}>
        <div className="flex text-2xl md:text-6xl lg:text-8xl">
          <h2 className="text-white font-heading font-bold tracking-wider uppercase">Jumpcut</h2>
          <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-5 md:w-10 md:-mt-10 lg:w-16 -mt-6 lg:-mt-16 mx-2" />
          <h2 className="flex font-bold text-foreground font-heading tracking-wider uppercase">Rabbit</h2>
        </div>
        <h3 className="text-heading md:text-2xl lg:text-3xl  uppercase tracking-widest text-foreground">Editing studio</h3>
        <div className="absolute top-3/4">
          {/* <ContactButton accent={false} title={t.home.cta} /> */}
        </div>
        <p className="w-3/4 absolute bottom-20 text-md md:text-xl text-center left-1/2 -translate-x-1/2 text-foreground/40">{t.home.videoDisclaimer}</p>
        <p className="w-full sm:w-3/4 absolute bottom-10 text-xs md:text-sm text-center left-1/2 -translate-x-1/2 text-foreground/50">{t.home.videoDisclaimer2}</p>
      </section>

      {/* About Brief */}

      <section className="relative flex flex-col z-10 px-10 md:px-20 h-dvh w-full items-center justify-around bg-gradient-to-b from-background/80 to-50% to-background" id="about">
        <div className="absolute flex items-center -top-8 bg-background/80 pt-1 pb-4 px-6 rounded-t-xl">
          <ChevDown />
        </div>
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16" />
        <div className="text-center text-xl md:text-2xl flex flex-col gap-5 font-heading">
          <h1 className="font-light">{formatStringWithLineBreaks(t.about.semblance)}</h1>
        </div>
        <ContactButton title={t.home.cta} />
        <div className="flex items-center justify-center w-full flex-wrap">
          {t.home.clients.map((client: {url: string, name: string }, i: number) => <div key={`${client}-${i}`} className="flex justify-center flex-shrink-0 w-1/2 md:w-1/5 opacity-50 hover:opacity-100 transition-opacity duration-300">     
            <Image src={client.url} alt={client.name} width="0" height="0" className="w-20 md:w-28 h-auto m-5"/>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
