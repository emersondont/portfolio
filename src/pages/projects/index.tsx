import Header from '../../components/header'
import Card from '@/components/card'
import TitlePage from '@/components/titlePage'

export default function Projects() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6  bg-purple-950">
			<Header />
			<TitlePage title='MY PROJECTS'/>
			
			<div className='grid grid-cols-1 gap-y-10 w-full justify-items-center justify-evenly 2xl:grid-cols-4 lg:grid-cols-3'>
				<Card 
					title='Color Converter'
					description='A practical and versatile website for effortlessly converting colors.'
					href='https://color-converter-one.vercel.app/'
					img='/img/Color-converter.png'
				/>
				<Card 
					title='Minecraft 3D store'
					description='A 3D object store where users can explore and acquire three-dimensional models in an intuitive manner.'
					href='https://minecraft-3d-store.vercel.app/'
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
