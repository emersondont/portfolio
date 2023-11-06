interface Props {
	title: string
}

export default function TitlePage(props: Props) {

	return (
		<div className='flex z-10 w-full my-6 md:mt-10'>
			<h1
				className=' border-b-2 border-primary pb-4 font-bold text-4xl lg:text-4xl text-primary'
			>
				{props.title}
			</h1>
		</div>
	)
}