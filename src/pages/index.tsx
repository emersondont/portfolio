import Layout from '@/components/layout';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';

export const sections = [
	{
		label: "SOBRE",
		id: "about",
		component: About
	},
	{
		label: "PROJETOS",
		id: "projects",
		component: Projects
	},
	// {
	// 	label: "EXPERIÊNCIA",
	// 	href: "experience",
	// },
];

export default function Home() {
	return (
		<Layout >
			{sections.map(({ id, component: Component }) => (
				<Component key={id} id={id}/>
			))}
		</Layout>
	)
}
