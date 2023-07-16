import Card from '@/components/card'
import TitlePage from '@/components/titlePage'
import { useContext } from 'react';
import { AppContext } from "@/context/appContext";
import Layout from '@/components/layout';

export default function Projects() {
	const { isEnglish } = useContext(AppContext)

	return (
		<Layout>
			<main className="flex min-h-screen w-full flex-col items-center  bg-transparent">
				<TitlePage title={isEnglish ? 'MY PROJECTS' : 'MEUS PROJETOS'} />

				{
					isEnglish ?
						<div className='flex gap-y-10 w-full justify-center flex-wrap md:justify-between'>
							<Card
								title='Color Converter'
								description='A practical and versatile website for effortlessly converting colors.'
								href='https://color-converter-one.vercel.app/'
								github='https://github.com/emersondont/color-converter'
								img='/img/Color-converter.png'
							/>
							<Card
								title='Minecraft 3D store'
								description='A 3D object store where users can explore and acquire three-dimensional models in an intuitive manner.'
								href='https://minecraft-3d-store.vercel.app/'
								github='https://github.com/emersondont/Trabalho-CG'
								img='/img/Minecraft-3d-store.png'
							/>
							<Card
								title='Ray Marching'
								description='My implementation of Ray Marching.'
								href='https://ray-marching-xi.vercel.app/'
								github='https://github.com/emersondont/Trabalho2-CG'
								img='/img/Ray-marching.png'
							/>
						</div> :
						<div className='flex gap-y-10 w-full justify-center flex-wrap md:justify-between'>
							<Card
								title='Color Converter'
								description='Um site prático e versátil para converter cores sem esforço.'
								href='https://color-converter-one.vercel.app/'
								github='https://github.com/emersondont/color-converter'
								img='/img/Color-converter.png'
							/>
							<Card
								title='Minecraft 3D store'
								description='Uma loja de objetos 3D onde os usuários podem explorar e adquirir modelos tridimensionais de maneira intuitiva.'
								href='https://minecraft-3d-store.vercel.app/'
								github='https://github.com/emersondont/Trabalho-CG'
								img='/img/Minecraft-3d-store.png'
							/>
							<Card
								title='Ray Marching'
								description='Minha implementação de Ray Marching.'
								href='https://ray-marching-xi.vercel.app/'
								github='https://github.com/emersondont/Trabalho2-CG'
								img='/img/Ray-marching.png'
							/>
						</div>
				}



			</main>
		</Layout>
	)
}
