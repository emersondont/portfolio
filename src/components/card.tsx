import Image from "next/image"
import Link from 'next/link'
import { IconType } from "react-icons"
import { motion } from 'framer-motion'
import { useRef } from "react"
import Modal from "./modal"
import { SiGithub } from 'react-icons/si';
import { SlGlobe } from "react-icons/sl";

interface Props {
	title: string
	description: string
	href?: string
	gitHubHref?: string
	img: string
	techs: { icon: IconType, label: string }[]
}

export default function Card(props: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const toggleDialog = () => {
		if (!dialogRef.current) return
		dialogRef.current.hasAttribute('open') ? dialogRef.current.close() : dialogRef.current.showModal()
	}

	return (
		<>
			<div
				onClick={toggleDialog}
				className='flex cursor-pointer p-4 rounded-md gap-3 ease-in duration-200 items-start relative
			hover:bg-blur z-10 hover:backdrop-blur-lg md:flex-wraplg:flex-nowrap'
			>
				<img
					src={props.img}
					alt={`Screenshot of website ${props.title}`}
					className="w-32 h-auto object-containsm:w-40"
				/>
				<div className="flex flex-col">
					<h1 className="text-lg font-semibold text-primary mb-2">
						{props.title}
					</h1>
					<p className="text-sm text-tertiary line-clamp-2">
						{props.description}
					</p>
				</div>
				<div className="border-card" />
			</div>

			<Modal dialogRef={dialogRef} toggleDialog={toggleDialog}>
				<img
					src={props.img}
					alt={`Screenshot of website ${props.title}`}
					className="w-full h-auto object-contain rounded-md"
				/>

				<div className="flex mt-3 items-end justify-between">
					<h1 className="text-xl font-semibold text-primary mb-2">
						{props.title}
					</h1>

					<div className="flex text-secondary z-10">
						{props.href &&
							<Link href={props.href} target="_blank" className="p-2 hover:bg-background hover:bg-opacity-80 rounded-full duration-200 ease-in-out">
								<SlGlobe size={28} title="Website" />
							</Link>
						}
						{props.gitHubHref &&
							<Link href={props.gitHubHref} target="_blank" className="p-2 hover:bg-background hover:bg-opacity-80 rounded-full duration-200 ease-in-out">
								<SiGithub size={28} title="Github" />
							</Link>
						}
					</div>
				</div>

				<p className="text-base text-white text-opacity-80 mt-2 text-justify">
					{props.description}
				</p>
				<div className="flex justify-center">
					<div className="text-secondary flex gap-3 mt-8 flex-wrap justify-center z-50">
						{props.techs.map((Tech, index) => (
							<Tech.icon key={index} size={28} title={Tech.label} />
						))}
					</div>
				</div>
			</Modal>
		</>
	)
}