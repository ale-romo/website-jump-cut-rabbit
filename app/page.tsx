'use client'
import Revealer from '@/components/Revealer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";

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
  const t = useTranslations();

  return (
    <>
      <Revealer />
      <div className="h-dvh" />

      {/* Header */}

      <section className={`fixed flex top-0 left-0 right-0 bottom-0 z-10 items-center gap-0 justify-center`}  >
        <h2 className="text-white text-2xl md:text-8xl font-heading font-bold tracking-wider uppercase">Jump</h2>
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16 mb-6 md:mb-16" />
        <h2 className="flex font-bold text-white text-2xl md:text-8xl mt-14 md:mt-32 font-heading tracking-wider uppercase rotate-12">Cut<div className="-mt-8 md:-mt-20 -rotate-12">Rabbit</div></h2>
      </section>

      {/* About Brief */}

      <section className="flex flex-col z-10 px-10 md:px-20 bg-background/95 h-dvh w-full items-center justify-around" id="about">
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16" />
        <div className="text-center text-2xl flex flex-col gap-5 font-heading">
          <h1>{formatStringWithLineBreaks(t.about.semblance)}</h1>
        </div>
        <button className="font-heading font-bold uppercase bg-accent/90 py-5 px-8 text-black hover:bg-accent">{t.home.cta}</button>
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
