import Image from "next/image"
import Link from 'next/link'
import { IconType } from "react-icons"

interface Props {
	title: string
	description: string
	href: string
	img: string
	techs: {icon: IconType, label: string}[]
}

export default function Card(props: Props) {
	return (
		<Link
			href={props.href}
			target="_blank"
			className='flex cursor-pointer p-4 rounded-md gap-3 ease-in duration-200 items-start
			hover:bg-blur z-10 hover:backdrop-blur-lg relative
			md:flex-wrap
			lg:flex-nowrap
			'
		>
			<img
				src={props.img}
				alt={`Screenshot of website ${props.title}`}
				className="
				w-24 h-auto object-contain
				sm:w-40
				"
			/>
			<div className="flex flex-col">
				<h1 className="text-base font-medium text-primary mb-2">
					{props.title}
				</h1>
				<p className="text-sm text-tertiary">
					{props.description}
				</p>
				<div className="text-secondary flex gap-3 mt-4 flex-wrap">
					{props.techs.map((Tech, index) => (
						<Tech.icon key={index} size={22} title={Tech.label}/>
					))}
				</div>
			</div>
			<div className="border-card"/>
		</Link>
	)
}