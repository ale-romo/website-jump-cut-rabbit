'use client'
import ContactButton from '@/components/ContactButton';
import ProjectCard,  { Project } from '@/components/ProjectCard';
import Revealer from '@/components/Revealer';
import { useTranslations } from '@/hooks/useTranslations';

const projects = [
  {
    title: 'Arrival',
    image: '/projects/arrival.jpg',
  },
  {
    title: 'Everything everywhere all at once',
    image: '/projects/eeaao.jpg',
  },
  {
    title: 'Enola Holmes',
    image: '/projects/EnolaHolmes.jpg',
  },
  {
    title: 'Forrest Gump',
    image: '/projects/forrestGump.jpg',
  },
  {
    title: 'Legally Blond',
    image: '/projects/legallyBlonde.webp',
  },
  {
    title: 'The fellowship of the ring',
    image: '/projects/tfotr.webp',
  },
  {
    title: 'The little mermaid',
    image: '/projects/thelittlemermaid.jpeg',
  }
];

const Portfolio = () => {
  const t = useTranslations();

  return <div className="flex flex-col items-center gap-20 p-5 md:p-20 bg-background z-10">
    <Revealer />
    <h1 className="font-heading font-bold uppercase text-2xl md:text-5xl tracking-wider">{t.portfolio.title}</h1>
    {/* <div className="flex flex-wrap gap-20 w-full justify-center">
      {projects.map((project: Project) => <div key={project.title} className="w-5/6 md:w-1/4 xl:w-1/6">
        <ProjectCard {...project} />
      </div>)}
    </div> */}
    <ContactButton title={t.portfolio.cta} />
  </div>
}

export default Portfolio;
