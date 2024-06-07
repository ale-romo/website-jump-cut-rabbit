'use client'
import { useState } from "react";
import Image from "next/image";

export interface Project {
  title: string;
  image: string;
}

const ProjectCard = ({title, image}: Project) => {
  const [showTitle, setShowTitle] = useState(false);

  const handleShowTitle = () => {
    if(window.innerWidth < 768) {
      setShowTitle(!showTitle);
    }
  }
return<article onClick={() => handleShowTitle()} className="relative group">
  <Image src={image} width="0" height="0" className="w-full h-auto" alt={title} />
  <h2 className={`absolute flex top-0 left-0 right-0 bottom-0 ${showTitle ? '' : 'hidden'} md:group-hover:flex items-center justify-center text-center bg-accent capitalize p-16 md:p-8 text-2xl md:text-xl cursor-pointer`}>{title}</h2>
</article>}

export default ProjectCard;
