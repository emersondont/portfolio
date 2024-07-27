import React, { ReactNode, useEffect, useContext } from 'react';
import { MenuContext } from "@/context/menuContext";
import Menu from './menu'
import Links from './links';
import Emersondont from './emersondont';
import { sections } from '../pages/index';

interface Props {
	children: ReactNode
}

export default function Layout(props: Props) {
	const { setSelected } = useContext(MenuContext)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setSelected(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: '10px',
				threshold: 0.4,
			}
		);

		sections.forEach(({ id }) => {
			const sectionRef = document.getElementById(id);
			if (sectionRef) {
				observer.observe(sectionRef);
			}
		});

		return () => {
			observer.disconnect();
		};

	}, [setSelected]);

	return (
		<main className="
		font-Inter flex w-full items-start flex-wrap bg-background h-screen
		md:flex-row
		">
			<section className='
			p-6 z-30 flex flex-wrap justify-between gap-4 w-full sticky top-0 left-0 bg-background items-center
			lg:pl-24
			md:flex-col md:h-screen md:py-24 md:pl-16  md:w-1/2 md:portrait:py-64 md:items-start
			sm:px-8
			'>
				<Emersondont />
				<Menu />
				<Links />
			</section>
			<section style={{ scrollBehavior: 'smooth' }}
				className='
				px-6 h-full overflow-x-hidden
				lg:pr-24
				md:pr-16 md:w-1/2
				sm:px-8
			'>
				{props.children}
			</section>
		</main>
	)
}