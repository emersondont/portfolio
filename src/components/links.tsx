import Link from 'next/link';
import {
	SiGithub,
	SiLinkedin,
	SiInstagram
} from 'react-icons/si';

const links = [
	{
		label: 'GitHub',
		href: 'https://www.github.com/emersondont',
		icon: SiGithub
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/emersondont/',
		icon: SiLinkedin
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/emersondont/',
		icon: SiInstagram
	}
]

export default function Links() {
	return (
		<footer className='flex gap-4'>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					target='_blank'
					className='flex items-center gap-3 group'
				>
					<link.icon size={28} className='text-secondary group-hover:text-primary ease-in duration-200' />
					{/* <span className='text-sm font-medium text-secondary group-hover:text-primary ease-in duration-200'>
						{link.label}
					</span> */}
				</Link>
			))}
		</footer>
	);
}