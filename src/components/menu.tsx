import MenuItem from "./menuItem";

const menuOptions = [
	{
		label: "SOBRE",
		href: "/about",
	},
	{
		label: "PROJETOS",
		href: "/projects",
	},
	{
		label: "EXPERIÊNCIA",
		href: "/experience",
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
