import MenuItem from "./menuItem";
import { sections } from '../pages/index';

export default function Menu() {
	return (
		<nav className="flex">
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
