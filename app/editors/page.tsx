'use client'
import ProfileCard, { Editor } from "@/components/ProfileCard";
import Revealer from "@/components/Revealer";
import { useTranslations } from '@/hooks/useTranslations';

const Editors = () => {
  const t = useTranslations();

  const editors = t.editors;

  const scrollNavigate = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return <section className="w-full flex bg-background z-10">
    <Revealer />
    <div className="max-w-screen-2xl flex flex-col md:flex-row">
      <ul className="hidden md:flex flex-col md:w-1/2 h-dvh items-end justify-center gap-5 pr-20">
        {editors.editors.map((editor: Editor) => <li key={editor.name} className="font-heading text-2xl">
          <button className="opacity-50 hover:opacity-100 uppercase font-semibold text-right" onMouseEnter={() => scrollNavigate(`#${editor.id}`)}>{editor.name}</button>
      </li>)}
      </ul>
      <div className="md:w-1/2 flex flex-col gap-20 max-h-dvh overflow-scroll pb-20">
        <h1 className="flex w-ful min-h-dvh items-center justify-center font-heading text-3xl font-bold">{editors.title}</h1>
        {editors.editors.map((editor: Editor) => <ProfileCard key={editor.name} {...editor}/>)}
      </div>
    </div>
  </section>
}


export default Editors;
