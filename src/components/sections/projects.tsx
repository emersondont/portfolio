import React, { useRef } from 'react';
import Card from '@/components/card';
import { 
  SiWordpress,
  SiCss3,
	SiTailwindcss,
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
  SiWebgl
 } from "react-icons/si";

interface Props {
  id: string
}

const cards = [
  {
    title: 'PET Computação',
    description: 'Reformulação do portal do PET Computação - UFPel',
    href: 'https://wp.ufpel.edu.br/petcomp/',
    img: '/img/Portal-pet.png',
    techs: [
      SiWordpress,
      SiHtml5,
      SiCss3,
      SiJavascript
    ]
  },
  {
    title: 'Império Suplementos',
    description: 'Plataforma para exibir produtos de uma loja de suplementos.',
    href: 'https://imperiosuplementos.vercel.app/',
    img: '/img/Imperio-suplementos.png',
    techs: [
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiTypescript
    ]
  },
  {
    title: 'Color Converter',
    description: 'Um site prático e versátil para converter cores sem esforço.',
    href: 'https://color-converter-one.vercel.app/',
    img: '/img/Color-converter.png',
    techs: [
      SiNextdotjs,
      SiReact,
      SiCss3,
      SiTypescript
    ]
  },
  {
    title: 'Minecraft 3D store',
    description: 'Uma loja de objetos 3D',
    href: 'https://minecraft-3d-store.vercel.app/',
    img: '/img/Minecraft-3d-store.png',
    techs: [
      SiWebgl,
      SiHtml5,
      SiCss3,
      SiJavascript
    ]
  },
  {
    title: 'Ray Marching',
    description: 'Minha implementação de Ray Marching.',
    href: 'https://ray-marching-xi.vercel.app/',
    img: '/img/Ray-marching.png',
    techs: [
      SiWebgl,
      SiHtml5,
      SiJavascript
    ]
  },
];

export default function Projects(props: Props) {
	const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={props.id}
      className="flex flex-col justify-center flex-wrap gap-3 pt-24"
      ref={projectsRef}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          href={card.href}
          img={card.img}
          techs={card.techs}
        />
      ))}
    </div>
  )
}
