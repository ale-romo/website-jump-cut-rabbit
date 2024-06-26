'use client'
import Revealer from '@/components/Revealer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";
import ContactButton from '@/components/ContactButton';

const clients = [
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

      <section className={`fixed flex flex-col top-0 left-0 right-0 bottom-0 z-10 items-center gap-2 justify-center`}  >
        <div className="flex">
          <h2 className="text-white text-2xl md:text-8xl font-heading font-bold tracking-wider uppercase">Jumpcut</h2>
          <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-5 md:w-16 -mt-6 md:-mt-16 mx-2" />
          <h2 className="flex font-bold text-foreground text-2xl md:text-8xl font-heading tracking-wider uppercase">Rabbit</h2>
        </div>
        <h3 className="text-heading md:text-3xl  uppercase tracking-widest text-foreground">Editing studio</h3>
        <p className="absolute bottom-10 text-xl left-1/2 -translate-x-1/2 text-foreground/40">for visualization purposes only</p>
      </section>

      {/* About Brief */}

      <section className="flex flex-col z-10 px-10 md:px-20 bg-background/95 h-dvh w-full items-center justify-around" id="about">
        <Image src="/logo.svg" alt="Jump Cut Rabbit Studios" width="0" height="0" className=" h-auto w-6 md:w-16" />
        <div className="text-center text-2xl flex flex-col gap-5 font-heading">
          <h1>{formatStringWithLineBreaks(t.about.semblance)}</h1>
        </div>
        <ContactButton title={t.home.cta} />
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
