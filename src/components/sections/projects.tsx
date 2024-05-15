import React, { useRef } from 'react';
import Card from '@/components/card';
import projects from '@/utils/projectsData';

interface Props {
  id: string
}

export default function Projects(props: Props) {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={props.id}
      className="
      flex flex-col justify-center flex-wrap gap-3 pt-40
      sm:pt-24"
      ref={projectsRef}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          href={project.href}
          img={project.img}
          techs={project.techs}
        />
      ))}
    </div>
  )
}
