import Link from 'next/link';
import { useState } from 'react';
import {
	SiGithub,
	SiLinkedin,
	SiInstagram
} from 'react-icons/si';
import { motion } from 'framer-motion'
import LinkIcon from './linkIcon';

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
	const itemVariants = {
		hidden: { opacity: 0, x: -40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.5 }
		},
	};
	return (
		<motion.footer
			variants={itemVariants}
			className='flex flex-col items-start relative'>
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
					<LinkIcon
						href={link.href}
						icon={link.icon}
						label={link.label}
						onMouseEnter={() => setLinkHover(link.spanHref)}
					/>
				))}
			</div>
		</motion.footer>
	);
}