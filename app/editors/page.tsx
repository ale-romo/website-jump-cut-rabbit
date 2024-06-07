'use client'
import ProfileCard from "@/components/ProfileCard";

const Editors = () => {
  const editors = [
    {
      id: 'vm',
      image: '/editors/isa.jpg',
      name: 'Victoria Mariño',
      role: 'Lead Editor',
      semblance: '(Cáceres, Spain, 1975). Communication Sciences Degree at the Complutense University of Madrid. She has worked as lead editor in different audiovisual formats; advertising, realities, documentaries, series and and feature films for companies such as AXN, Discovery, ESPN, A&E, VH1, Freemantle, EndemolShine Boomdog, Netflix, Amazon and Disney Channel.'
    },
    {
      id: 'mv',
      image: 'editors/marina.png',
      name: 'Marina Viruete',
      role: 'Editor.',
      semblance: 'Has worked in advertising, films, series, and documentaries for platforms such as Amazon, Fox, public TV channels, among others.  As a graduate in communication sciences,I am interested in images and the processes that surround them.'
    },
    {
      id: 'ag',
      image: 'editors/anita.jpg',
      name: 'Ana García',
      role: 'Supervising editor',
      semblance: 'Has worked as an editor for 20 years, establishing herself as one of the most productive in the industry. She studied Filmmaking in Mexico City (1996-2004), then pursued a Master’s in Post Production Design and Motion Graphics at University of the Arts, London (2006-2008).'
    },
    {
      id: 'lm',
      image: 'editors/luis.png',
      name: 'Luis Mercado',
      role: 'Project Coordinator',
      semblance: 'With extensive experience in various stages of film and video production. Luis has worked with high profile clients, including Fortune 500 companies, with expertise in film, commercial, and video editing to deliver top quality results.'
    },
  ];

  const scrollNavigate = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return <section className="w-full flex flex-col md:flex-row">
    <ul className="hidden md:flex flex-col md:w-1/2 h-dvh fixed">
      {editors.map(editor => <li key={editor.name}>
        <button className="opacity-50 hover:opacity-100" onMouseEnter={() => scrollNavigate(`#${editor.id}`)}>{editor.name}</button>
    </li>)}
    </ul>
    <div className="md:w-1/2 flex flex-col md:left-1/2 relative">
      <h1>Editors</h1>
      <ProfileCard {...editors[0]}/>
      <ProfileCard {...editors[1]}/>
      <ProfileCard {...editors[2]}/>
      <ProfileCard {...editors[3]}/>
    </div>
  </section>
}


export default Editors;
