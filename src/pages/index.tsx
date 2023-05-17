import Background from '../components/backgroundHome'
import Header from '../components/header'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6 bg-purple-900">
			<Header home/>

			<div className='flex z-10 h-full flex-col font-Rubik gap-1 mt-48'>
				<h1 className='text-purple-400 font-bold text-8xl tracking-widest custom-text-shadow'>
					EMERSONDONT
				</h1>
				<p className='text-right font-medium text-2xl'>
					COMPUTER SCIENCE,<br></br>
					WEBSITE DEVELOPER
				</p>
			</div>
			<Background />
		</main>
	)
}
