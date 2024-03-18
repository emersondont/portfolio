import MenuItem from "./menuItem";
import { sections } from '../pages/index';

export default function Menu() {
	return (
		<nav className="flex order-last md:order-none w-full">
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
		</nav>
	)
}
