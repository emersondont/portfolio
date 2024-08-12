import MenuItem from "./menuItem";
import { sections } from '../pages/index';
import { motion } from 'framer-motion'

export default function Menu() {
	const itemVariants = {
		hidden: { opacity: 0, x: -40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.5 }
		},
	};
	return (
		<motion.nav
			variants={itemVariants}
			className="flex order-last md:order-none w-full">
			<ul className='flex justify-center flex-col'>
				{sections.map(section => {
					return (
						<MenuItem
							key={section.id}
							id={section.id}
						>
							{section.label}
						</MenuItem>
					)
				})}
			</ul>
		</motion.nav>
	)
}
