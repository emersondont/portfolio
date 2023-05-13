import Background from './background'
import Header from './components/header'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6">
			<Header />

			<div className='flex z-10 h-full flex-col font-Rubik gap-1'>
				<h1 className='text-purple-400 font-bold text-8xl tracking-widest'>
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
