import React, { ReactNode, useEffect, useContext, useRef } from 'react';
import { MenuContext } from "@/context/menuContext";
import Menu from './menu'
import Links from './links';
import Emersondont from './emersondont';
import { sections } from '../pages/index';
import BackgroundHome from './backgroundHome'

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
				threshold: 0.5,
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
		<main className="flex items-center bg-background font-Inter h-screen w-full">
			{/* <BackgroundHome /> */}
			<section className='z-20 flex flex-col w-1/2 p-24 justify-between h-screen'>
				<Emersondont />
				<Menu />
				<Links />
			</section>
			<section className='w-1/2 overflow-y-auto h-full pr-24 z-20' style={{ scrollBehavior: 'smooth' }}>
				{props.children}
			</section>
		</main>
	)
}