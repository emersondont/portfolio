import Image from "next/image"
import { IconType } from "react-icons"
import { useRef } from "react"
import Modal from "./modal"
import ProjectLink from "./projectLink"

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
				<Image
					src={props.img}
					alt={`Screenshot of website ${props.title}`}
					width={144}
					height={90}
					objectFit="cover"
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
				<Image
					src={props.img}
					alt={`Screenshot of website ${props.title}`}
					width={296}
					height={185}
					objectFit="cover"
					className="rounded-md"
				/>

				<div className="flex mt-3 mb-2 items-end justify-between w-full">
					<h1 className="text-xl font-semibold text-primary whitespace-nowrap">
						{props.title}
					</h1>

					<div className="flex items-center text-secondary z-10 gap-2 flex-wrap justify-end">
						{props.href && <ProjectLink href={props.href} label="Website" />}
						{props.gitHubHref && <ProjectLink href={props.gitHubHref} label="GitHub" />}
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