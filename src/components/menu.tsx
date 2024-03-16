import MenuItem from "./menuItem";

const menuOptions = [
	{
		label: "INÍCIO",
		href: "/",
	},
	{
		label: "SOBRE",
		href: "/about",
	},
	{
		label: "MEUS PROJETOS",
		href: "/projects",
	},
];


export default function Menu() {
	return (
		<nav className="flex">
			<ul className='flex justify-center flex-col'>
				{menuOptions.map(menu => {
					return (
						<MenuItem
							key={menu.href}
							href={menu.href}
						>
							{menu.label}
						</MenuItem>
					)
				})}
			</ul>
		</nav>
	)
}
