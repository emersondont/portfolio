import Link from 'next/link';
import { useState } from 'react';
import {
	SiGithub,
	SiLinkedin,
	SiInstagram
} from 'react-icons/si';

const links = [
	{
		label: 'GitHub',
		href: 'https://www.github.com/emersondont',
		icon: SiGithub,
		spanHref: 'github.com/'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/emersondont/',
		icon: SiLinkedin,
		spanHref: 'linkedin.com/in/'
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/emersondont/',
		icon: SiInstagram,
		spanHref: 'instagram.com/'
	}
]

export default function Links() {
	const [linkHover, setLinkHover] = useState('');
	const [show, setShow] = useState(false);
	return (
		<footer className='flex flex-col items-start relative'>
			{
				show &&
				<p className='text-end absolute -top-10 text-sm hidden md:block'
					style={{ width: '27ch' }}
				>
					<span className='text-secondary text-animation' key={linkHover}>{linkHover}</span>
					<span className='font-semibold text-animation'>emersondont</span>
				</p>
			}
			<div className='flex gap-1 sm:gap-4 ssm:gap-2'
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => [setShow(false), setLinkHover('')]}
			>
				{links.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						target='_blank'
						className='flex items-center group'
						onMouseEnter={() => setLinkHover(link.spanHref)}
					>
						<link.icon className='
					text-3xl text-secondary group-hover:text-primary ease-in duration-200
					' />
					</Link>
				))}
			</div>
		</footer>
	);
}