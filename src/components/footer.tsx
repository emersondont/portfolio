import Link from 'next/link';
import {
	SiGithub,
	SiLinkedin
} from 'react-icons/si';
export default function Footer() {
	return (
		<footer className='flex gap-4'>
			<div className='flex flex-col items-center border-2 rounded-lg border-primary py-4 px-2'>
				<SiGithub size={32} className='text-primary'/>
				<h2 className='text-primary'>GitHub</h2>
				<Link target='_blank' href='https://www.github.com/emersondont' className='hover:text-primary'>github.com/emersondont</Link>
			</div>
			<div className='flex flex-col items-center border-2 rounded-lg border-primary py-4 px-2'>
				<SiLinkedin size={32} className='text-primary'/>
				<h2 className='text-primary'>Linkedin</h2>
				<Link target='_blank' href='https://www.linkedin.com/in/emersondont/' className='hover:text-primary'>linkedin.com/in/emersondont/</Link>
			</div>
		</footer>
	)
}