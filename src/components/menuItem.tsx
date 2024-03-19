import { useContext, useState, useEffect } from 'react';
import { MenuContext } from "@/context/menuContext";

interface Props {
	children: string
	id: string
}

export default function MenuItem(props: Props) {
	const { selected, setSelected } = useContext(MenuContext)

	const scrollToDiv = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClicked = () => {
		scrollToDiv(props.id)
		setSelected(props.id)
	}

	return (
		<li className={`cursor-pointer group p-1 items-center gap-4
		${selected === props.id ? 'flex': 'hidden'}
		md:flex
		`}
			onClick={handleClicked}
		>
			<span 
				className={`ease-in duration-200 h-px
					${selected === props.id ? 'bg-primary w-16' : 'bg-secondary w-8'}
					group-hover:w-16
					group-hover:bg-primary`}
			/>
			<span className={`ease-in duration-200 text-sm font-semibold ${selected === props.id ? 'text-primary' : 'text-secondary'} group-hover:text-primary`}>
				{props.children}
			</span>
		</li>
	)
}
