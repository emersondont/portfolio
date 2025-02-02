import Link from 'next/link';
import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import Image from "next/image"

interface Props {
	id: string;
}

const experiences = [
	{
		company: 'Nelogica',
		role: 'Desenvolvedor de Software',
		start: 'Nov/2024',
		end: 'Atual',
		description: '',
		logo: '/img/nelogica.png',
		logoWidth: 20,
	},
	{
		company: 'Noticiato',
		role: 'Desenvolvedor Front-End',
		start: 'Set/2024',
		end: 'Nov/2024',
		description: 'Atuei no desenvolvimento de aplicações web modernas com foco em interfaces dinâmicas, experiência do usuário e páginas responsivas.',
		logo: '/img/noticiato.png',
		logoWidth: 16,
	},
	{
		company: 'UFPEL',
		role: 'Bolsista PET Computação',
		start: 'Dez/2022',
		end: 'Mar/2024',
		description: 'Fiz parte do PET Computação como bolsista, o que me proporcionou inúmeras oportunidades para o meu crescimento pessoal e profissional. Aprimorando minhas habilidades de resolução de problemas, trabalho em equipe e comunicação.',
		logo: '/img/ufpel.png',
		logoWidth: 20,
	}
]

export default function Experience(props: Props) {
	const experienceRef = useRef<HTMLDivElement>(null);
	// const itemVariants = {
	// 	hidden: { opacity: 0, x: 40 },
	// 	visible: {
	// 		opacity: 1,
	// 		x: 0,
	// 		transition: { type: 'spring', duration: 1, bounce: 0.5 }
	// 	},
	// };

	return (
		<div
			// transition={{ staggerChildren: 0.2 }}
			// initial="hidden"
			// whileInView="visible"
			// viewport={{ margin: '-150px' }}
			id={props.id}
			className="
				flex flex-col gap-3 pt-40 min-h-screen pb-3
				sm:pt-24
			"
			ref={experienceRef}
		>
			{experiences.map((experience, index) => (
				<div
					key={index}
					className='flex p-4 rounded-md gap-2 ease-in duration-200 items-start flex-col
				hover:bg-blur z-10 hover:backdrop-blur-lg relative flex-wrap lg:flex-nowrap'
				>
					<div className='text-xs font-semibold flex items-center gap-1 text-secondary'>
						<span>{experience.start}</span>
						<span className='w-2 bg-secondary' style={{ height: '1px' }} />
						<span>{experience.end}</span>
					</div>
					<div>
						<h2 className='text-lg font-semibold text-primary'>{experience.role}</h2>
						<div className='flex gap-1 items-center mb-2'>
							<Image
								src={experience.logo}
								alt={experience.company}
								width={experience.logoWidth}
								height={experience.logoWidth}
								className='object-contain'
							/>
							<h3 className='text-base font-medium text-primary'>{experience.company}</h3>
						</div>
						<p className='text-sm text-tertiary'>{experience.description}</p>
					</div>
					<div className="border-card" />
				</div>
			))}
		</div>
	)
}
