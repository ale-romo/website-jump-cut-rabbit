'use client'
import { useTranslations } from '@/hooks/useTranslations';
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";
import Revealer from "@/components/Revealer";

const About = () => {
  const t = useTranslations();

  return <div className="flex flex-col md:flex-row w-full">
    <Revealer />
    <section className="text-2xl md:text-3xl gap-10 md:gap-20 flex items-center text-center flex-col font-heading align-center justify-center w-auto mx-5 md:mx-0 md:w-1/2 bg-background/60 backdrop-blur-md md:h-dvh py-10 md:py-0">
      <h1 className="px-10 md:px-20">{formatStringWithLineBreaks(t.about.semblance)}</h1>
      <button className="font-heading font-bold uppercase bg-accent/90 py-5 px-8 text-black hover:bg-accent">{t.about.cta}</button>
    </section>
  </div>
}

export default About;
