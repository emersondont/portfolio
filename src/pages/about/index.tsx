import Background from '../../components/backgroundAbout'
import Header from '../../components/header'

export default function About() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6">
			<Header />
			<div className='flex z-10 w-5/6 mb-6 mt-28'> 
				<h1 className=' border-b-2 border-purple-400 p-1 font-bold text-4xl'>ABOUT</h1>
			</div>
			<p className='flex z-10 font-Rubik w-5/6 text-lg'>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. commodo sagittis at vel ex. <br />
			Duis blandit nisl id mauris dictum tincidunt. vitae commodo. <br />
			Nunc gravida pharetra dolor. Fusce tincidunt arcu non commodo tincidunt. <br />
			Sed a massa ut velit egestas tincidunt ut non odio. <br />
			In volutpat tellus vel ante vulputate, non commodo libero sagittis. <br />
			Nullam ornare sapien eu velit imperdiet vehicula. justo sed maximus.<br />

			Praesent congue diam quis felis varius bibendum. blandit.<br />
			 Etiam vestibulum euismod ipsum, sit amet ultricies dui fermentum vitae. <br />
			 Aenean consectetur sollicitudin enim a pretium. tincidunt mattis at sit amet sapien. <br />
			 Praesent sed purus quis tellus commodo . Donec sit amet posuere nisl. <br />
			 Sed ac semper urna, id lacinia metus. eu efficitur tortor bibendum. <br />
			</p>

			<Background />
		</main>
	)
}
