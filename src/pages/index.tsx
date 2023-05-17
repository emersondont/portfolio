import Background from '../components/backgroundHome'
import Header from '../components/header'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6 bg-purple-950">
			<Header home/>

			<div className='flex z-10 h-full flex-col font-Rubik gap-1 mt-48'>
				<h1 className='text-purple-400 font-bold text-4xl custom-text-shadow
				lg:text-8xl md:text-6xl sm:text-6xl sm:tracking-widest
				'>
					EMERSONDONT
				</h1>
				<p className='text-right font-medium text-xl lg:text-2xl md:text-2xl sm:text-2xl'>
					COMPUTER SCIENCE,<br></br>
					WEBSITE DEVELOPER
				</p>
			</div>
		</main>
	)
}
