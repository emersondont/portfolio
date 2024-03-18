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
		<footer className='flex gap-2 sm:gap-4'>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					target='_blank'
					className='flex items-center group'
				>
					<link.icon className='
					text-2xl text-secondary group-hover:text-primary ease-in duration-200
					sm:text-3xl
					' />
				</Link>
			))}
		</footer>
	);
}