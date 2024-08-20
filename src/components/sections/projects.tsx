import React, { useRef } from 'react';
import Card from '@/components/card';
import projects from '@/utils/projectsData';
import { motion } from 'framer-motion'

interface Props {
  id: string
}

export default function Projects(props: Props) {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      // transition={{ staggerChildren: 0.2 }}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ margin: '-150px'}}
      id={props.id}
      className="
      flex flex-col justify-center flex-wrap gap-3 pt-40 min-h-screen
      sm:pt-24"
      ref={projectsRef}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          href={project.href}
          gitHubHref={project.gitHubHref}
          img={project.img}
          techs={project.techs}
        />
      ))}
    </div>
  )
}
