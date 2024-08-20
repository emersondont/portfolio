import Link from 'next/link';
import React, { useRef } from 'react';
import { motion } from 'framer-motion'

interface Props {
	id: string;
}

const experiences = [
	{
		company: 'PET Computação - UFPEL',
		role: 'Bolsista',
		start: '2022',
		end: '2024',
		description: 'De dezembro de 2022 até março de 2024, fiz parte do PET Computação como bolsista, o que me proporcionou inúmeras oportunidades para o meu crescimento pessoal e profissional. Aprimorando minhas habilidades de resolução de problemas, trabalho em equipe e comunicação.',
		href: 'https://wp.ufpel.edu.br/petcomp/'
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
				flex flex-col gap-3 pt-40 min-h-screen
				sm:pt-24
			"
			ref={experienceRef}
		>
			{experiences.map((experience, index) => (
				<Link
					href={experience.href}
					target='_blank'
					key={index}
					className='flex cursor-pointer p-4 rounded-md gap-4 ease-in duration-200 items-start
				hover:bg-blur z-10 hover:backdrop-blur-lg relative flex-wrap lg:flex-nowrap'
				>
					<div className='text-sm font-semibold flex items-center gap-1 text-secondary'>
						<span>{experience.start}</span>
						<span className='w-3 bg-secondary' style={{ height: '2px' }} />
						<span>{experience.end}</span>
					</div>
					<div>
						<h2 className='text-lg font-semibold text-primary'>{experience.company}</h2>
						<h3 className='text-base font-medium text-primary mb-2'>{experience.role}</h3>
						<p className='text-sm text-tertiary'>{experience.description}</p>
					</div>
					<div className="border-card" />
				</Link>
			))}
		</div>
	)
}
