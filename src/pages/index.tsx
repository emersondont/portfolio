// import { useContext } from 'react';
// import { AppContext } from "@/context/appContext";
import Layout from '@/components/layout';

export default function Home() {
	// const { isEnglish } = useContext(AppContext)

	return (
		<Layout home>
			<main className="flex z-10 flex-col gap-1 mt-32">

				<h1 className='text-primary font-bold text-4xl custom-text-shadow
				lg:text-8xl md:text-6xl sm:text-6xl sm:tracking-widest
				'>
					EMERSONDONT
				</h1>
				<p className='text-right font-medium text-xl lg:text-2xl md:text-2xl sm:text-2xl'>
					CIÊNCIA DA COMPUTAÇÃO,<br></br>
					DESENVOLVEDOR FRONTEND
				</p>
			</main>
		</Layout>
	)
}
