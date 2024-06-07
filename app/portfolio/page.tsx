import ProjectCard,  { Project} from '@/components/ProjectCard';

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
  return <div className="flex flex-col items-center gap-20 p-5 md:p-20">
    <h1>Portfolio</h1>
    <div className="flex flex-wrap gap-20 w-full justify-center">
      {projects.map(project => <div key={project.title} className="w-5/6 md:w-1/4 xl:w-1/6">
        <ProjectCard {...project} />
      </div>)}
    </div>

  </div>
}

export default Portfolio;
