import Card from '@/components/card'
import TitlePage from '@/components/titlePage'
// import { useContext } from 'react';
// import { AppContext } from "@/context/appContext";
import Layout from '@/components/layout';

export default function Projects() {
	// const { isEnglish } = useContext(AppContext)

	return (
		<Layout>
			<main className="flex min-h-screen w-full flex-col  bg-transparent pb-16">
				<TitlePage title={'MEUS PROJETOS'} />

				<div className='flex gap-x-20 gap-y-10 w-full justify-center flex-wrap'>
					<Card
						title='Império Suplementos'
						description='Plataforma para exibir produtos de uma loja de suplementos.'
						href='https://imperiosuplementos.vercel.app/'
						img='/img/Imperio-suplementos.png'
					/>
					<Card
						title='PET Computação'
						description='Reformulação do portal do PET Computação - UFPel'
						href='https://wp.ufpel.edu.br/petcomp/'
						img='/img/Portal-pet.png'
					/>
					<Card
						title='Color Converter'
						description='Um site prático e versátil para converter cores sem esforço.'
						href='https://color-converter-one.vercel.app/'
						img='/img/Color-converter.png'
					/>
					<Card
						title='Minecraft 3D store'
						description='Uma loja de objetos 3D'
						href='https://minecraft-3d-store.vercel.app/'
						img='/img/Minecraft-3d-store.png'
					/>
					<Card
						title='Ray Marching'
						description='Minha implementação de Ray Marching.'
						href='https://ray-marching-xi.vercel.app/'
						img='/img/Ray-marching.png'
					/>
				</div>
			</main>
		</Layout>
	)
}
