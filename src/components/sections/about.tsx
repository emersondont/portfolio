import React, { useRef } from 'react';
import {
	SiCss3,
	SiTailwindcss,
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiSpringboot,
	SiDocker
} from 'react-icons/si';

interface Props {
	id: string;
}

export default function About(props: Props) {
	const aboutRef = useRef<HTMLDivElement>(null);

	return (
		<div
			id={props.id}
			className="
			flex flex-col pt-8 gap-6
			sm:pt-24
			lg:min-h-full
			"
			ref={aboutRef}
		>
			<div className='
			flex flex-col z-10 text-sm text-primary gap-3
			sm:text-base
			'>
				<p>
					Olá! Sou o Emerson, formado em <span className='text-secondary'>Ciência da Computação</span> pela
					Universidade Federal de Pelotas (UFPel) e <span className='text-secondary'>Desenvolvedor Frontend</span>.
				</p>
				<p>
					Durante a minha graduação, além de adquirir experiência com várias linguagens de programação na graduação,
					como <span className='text-secondary'>C, C++, Java, Python</span> e até mesmo linguagens de baixo nível
					como Assembly, busquei também experiência como desenvolvedor frontend, onde obtive um amplo entendimento
					das tecnologias <span className='text-secondary'>HTML, CSS</span> e <span className='text-secondary'>JavaScript</span>.
					Além disso, estou sempre buscando aprimorar minhas habilidades e me aventurei no mundo do <span className='text-secondary'>ReactJS</span>,
					onde adquiri conhecimento prático no desenvolvimento de aplicações frontend modernas.
				</p>
				<p>
					Atualmente, estou expandindo meu conjunto de habilidades explorando <span className='text-secondary'>TypeScript, Tailwind, Next.js </span>
					e também o <span className='text-secondary'>Java Spring Boot</span> para projetos backend.
				</p>
				<p>
					Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os projetos que realizei!
				</p>
			</div>

			<div className='text-secondary flex w-full justify-center gap-6 flex-wrap z-10'>
				<SiHtml5 size={28} title='HTML'/>
				<SiCss3 size={28} title='CSS'/>
				<SiTailwindcss size={28} title='Tailwind CSS'/>
				<SiJavascript size={28} title='JavaScript'/>
				<SiTypescript size={28} title='TypeScript'/>
				<SiReact size={28} title='ReactJs'/>
				<SiNextdotjs size={28} title='Next.js'/>
				<SiSpringboot size={28} title='Spring boot'/>
				<SiDocker size={28} title='Docker'/>
			</div>
		</div>
	)
}