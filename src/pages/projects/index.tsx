import Header from '../../components/header'
import Card from '@/components/card'

export default function Projects() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6  bg-purple-900">
			<Header />
			<div className='flex z-10 w-5/6 mb-6 mt-28'> 
				<h1 className=' border-b-2 border-purple-400 p-1 font-bold text-4xl custom-text-shadow'>MY PROJECTS</h1>
			</div>
			
			<div className='grid gap-y-10 w-full justify-items-center justify-evenly 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				<Card 
					title='Color Converter'
					description='A practical and versatile website for effortlessly converting colors.'
					href='https://github.com/emersondont/color-converter'
					img='/img/Color-converter.png'
				/>
				<Card 
					title='Minecraft 3D store'
					description='A 3D object store where users can explore and acquire three-dimensional models in an intuitive manner.'
					href='https://github.com/emersondont/Trabalho-CG'
					img='/img/Minecraft-3d-store.png'
				/>
				<Card 
					title='Ray Marching'
					description='My implementation of Ray Marching.'
					href='https://ray-marching-xi.vercel.app/'
					img='/img/Ray-marching.png'
				/>
			</div>
		</main>
	)
}
