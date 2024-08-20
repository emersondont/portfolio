import { motion } from 'framer-motion'
import React, { useRef } from 'react';
import Techs from '../techs';

interface Props {
	id: string;
}

export default function About(props: Props) {
	const aboutRef = useRef<HTMLDivElement>(null);
	const itemVariants = {
		hidden: { opacity: 0, y: -40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.5 }
		},
	};
	return (
		<motion.div
			variants={itemVariants}
			id={props.id}
			className="flex flex-col pt-8 gap-6 sm:pt-24 lg:min-h-screen"
			ref={aboutRef}
		>
			<div className='flex flex-col z-10 text-sm text-primary gap-3 sm:text-base'>
				<p>
					Olá! Sou o Emerson, formado em <span className='text-tertiary'>Ciência da Computação</span> pela
					Universidade Federal de Pelotas (UFPel) e me tornando um <span className='text-tertiary'>Desenvolvedor Full-Stack</span>.
				</p>
				<p>
					Durante a minha graduação, além de adquirir experiência com várias linguagens de programação na graduação,
					como <span className='text-tertiary'>C, C++, Java, Python</span> e até mesmo linguagens de baixo nível
					como Assembly, busquei também experiência como desenvolvedor frontend, onde obtive um amplo entendimento
					das tecnologias <span className='text-tertiary'>HTML, CSS</span> e <span className='text-tertiary'>JavaScript</span>.
				</p>
				<p>
					Além disso, estou sempre buscando aprimorar minhas habilidades e me aventurei no mundo do <span className='text-tertiary'>ReactJS</span>,
					onde adquiri conhecimento prático no desenvolvimento de aplicações frontend modernas.
				</p>
				<p>
					Atualmente, estou expandindo meu conjunto de habilidades explorando <span className='text-tertiary'>TypeScript, Tailwind, Next.js </span>
					e também o <span className='text-tertiary'>Java Spring Boot</span> para projetos backend.
				</p>
				<p>
					Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os projetos que realizei!
				</p>
			</div>

			<Techs />
		</motion.div>
	)
}