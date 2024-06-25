import Layout from '@/components/layout';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Head from 'next/head';

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
		<>
			<Head>
				<title>Emerson - Desenvolvedor</title>
				<link rel="icon" href="icon.png" sizes="any" />
				<meta name='theme-color' content='#3b0764'/>
				<meta name="description" content="Olá! Sou o Emerson, formado em Ciência da Computação pela UFPel e Desenvolvedor Full Stack. Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os projetos que realizei!" />
			</Head>
			<Layout >
				{sections.map(({ id, component: Component }) => (
					<Component key={id} id={id} />
				))}
			</Layout>
		</>
	)
}
