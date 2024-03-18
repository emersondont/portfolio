import Layout from '@/components/layout';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';

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
	{
		label: "EXPERIÊNCIA",
		id: "experience",
		component: Experience
	},
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
