import Link from 'next/link'
import { useContext, useState, useEffect } from 'react';
import { MenuContext } from "@/context/menuContext";

interface Props {
	children: string
	href: string
}

const designOptions = [
	{ width: '8', color: 'secondary' },
	{ width: '16', color: 'primary' }
]

export default function MenuItem(props: Props) {
	const { selected, setSelected } = useContext(MenuContext)
	const [selectedColor, setSelectedColor] = useState<string>(designOptions[1].color)
	const [selectedWidth, setSelectedWidth] = useState<string>(designOptions[1].width)

	const handleClicked = () => setSelected(props.href)

	useEffect(() => {
		if (selected === props.href) {
			setSelectedColor(designOptions[1].color)
			setSelectedWidth(designOptions[1].width)
		} else {
			setSelectedColor(designOptions[0].color)
			setSelectedWidth(designOptions[0].width)
		}
	}, [selected])

	return (
		<li className='cursor-pointer group'
			onClick={handleClicked}
		>
			<Link href={props.href}
				className='ease-in duration-200 p-1 flex items-center gap-4'
			>
				<span style={{ height: '1px' }}
					className={`ease-in duration-200 
					bg-${selectedColor} w-${selectedWidth} 
					group-hover:w-${designOptions[1].width}
					group-hover:bg-${designOptions[1].color}
					`}
				/>
				<span className={`text-sm font-semibold text-${selectedColor} group-hover:text-${designOptions[1].color}`}>
					{props.children}
				</span>
			</Link>
		</li>
	)
}
