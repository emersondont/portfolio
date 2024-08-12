import { motion } from 'framer-motion'

export default function Emersondont() {
	const itemVariants = {
		hidden: { opacity: 0, x: -40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.5 }
		},
	};
	return (
		<motion.div
			variants={itemVariants}
			className="flex flex-col gap-1 cursor-default">
			<h1 className='
				text-xl text-secondary font-bold custom-text-shadow tracking-widest
				xl:text-5xl
				lg:text-4xl
				sm:text-3xl
				'>
				EMERSONDONT
			</h1>
			<p className='
				text-xs text-primary font-medium
				lg:text-lg
				sm:text-base
				'>
				CIENTISTA DA COMPUTAÇÃO<br />
				DESENVOLVEDOR FULL-STACK
			</p>
		</motion.div>
	)
}
