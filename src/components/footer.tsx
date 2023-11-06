import Link from 'next/link';
import {
	SiGithub,
	SiLinkedin
} from 'react-icons/si';
export default function Footer() {
	return (
		<footer className='flex gap-4 justify-center flex-wrap z-10 md:gap-8'>
			<div className='flex items-center gap-1'>
				<SiGithub size={28} className='text-primary'/>
				<Link target='_blank' href='https://www.github.com/emersondont' className='hover:text-primary'>github.com/emersondont</Link>
			</div>
			<div className='flex items-center gap-1'>
				<SiLinkedin size={28} className='text-primary'/>
				<Link target='_blank' href='https://www.linkedin.com/in/emersondont/' className='hover:text-primary'>linkedin.com/in/emersondont/</Link>
			</div>
		</footer>
	)
}