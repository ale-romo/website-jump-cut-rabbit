'use client'
import { useTranslations } from '@/hooks/useTranslations';
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";
import Revealer from "@/components/Revealer";
import ContactButton from '@/components/ContactButton';

const About = () => {
  const t = useTranslations();

  return <div className="flex flex-col md:flex-row w-full">
    <Revealer />
    <section className="gap-10 md:gap-20 flex items-center text-center flex-col font-heading align-center justify-center w-auto mx-5 md:mx-0 md:w-1/2 bg-gradient-to-b from-background/80 to-50% to-background backdrop-blur-md md:h-dvh py-10 md:py-0 z-10">
      <h1 className="px-10 text-2xl  md:px-20 font-light max-w-screen-sm">{formatStringWithLineBreaks(t.about.semblance)}</h1>
      <ContactButton title={t.about.cta} />
    </section>
  </div>
}

export default About;
