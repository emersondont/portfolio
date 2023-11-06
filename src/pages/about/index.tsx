import TitlePage from '@/components/titlePage'
import Link from 'next/link'
// import { useContext } from 'react';
// import { AppContext } from "@/context/appContext";
import Layout from '@/components/layout';
// import Image from 'next/image';
import {
	SiCss3,
	SiTailwindcss,
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
} from 'react-icons/si';

export default function About() {
	// const { isEnglish } = useContext(AppContext)

	return (
		<Layout>
			<main className="flex flex-col bg-transparent pb-16">
				<TitlePage title={'SOBRE'} />

				<div className='flex flex-col z-10 text-base sm:text-lg gap-4'>
					<p>
						Olá! Sou Emerson, estudante de Ciência da Computação pela Universidade Federal de Pelotas (UFPel).
						Atualmente, estou no último semestre do curso, após ingressar no curso em 2018.<br />
					</p>
					<p>
						A partir de dezembro de 2022, faço parte do <Link href={'https://wp.ufpel.edu.br/petcomp/'} target="_blank"><span className='text-primary'>PET Computação</span></Link> como bolsista,
						 o que me proporcionou inúmeras oportunidades para o meu crescimento pessoal e profissional. Durante esse período, participei de diversos projetos desafiadores,
						  organizei e ministrei cursos de programação e informática, trabalhei em equipe, participei e organizei eventos, além de outras atividades que aprimoraram minhas habilidades de
							 resolução de problemas, trabalho em equipe e comunicação.
					</p>
					<p>
						Durante a minha graduação, além de adquirir experiência com várias linguagens de programação na graduação,
						como <span className='text-primary'>C, C++, Java, Python</span> e até mesmo linguagens de baixo nível como Assembly, busquei também experiência como
						desenvolvedor frontend, onde obtive um amplo entendimento das tecnologias <span className='text-primary'>HTML, CSS e JavaScript</span>.
						Além disso, estou sempre buscando aprimorar minhas habilidades e me aventurei no mundo do <span className='text-primary'>ReactJS</span>, onde adquiri
						conhecimento prático no desenvolvimento de aplicações frontend modernas.
					</p>
					<p>
						Atualmente, estou expandindo meu conjunto de habilidades explorando <span className='text-primary'>TypeScript</span>, <span className='text-primary'>Tailwind</span>,
						 e também o <span className='text-primary'>Next.js</span>, uma poderosa estrutura JavaScript
						para criação de aplicativos web escaláveis e de alto desempenho.
					</p>
					<p>
						Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os <Link href={'/projects'}><span className='text-primary'>projetos</span></Link> que realizei!
					</p>
				</div>

				<div className='text-primary flex w-full justify-center gap-8 mt-8 flex-wrap'>
					<SiHtml5 size={32} />
					<SiCss3 size={32} />
					<SiTailwindcss size={32} />
					<SiJavascript size={32} />
					<SiTypescript size={32} />
					<SiReact size={32} />
					<SiNextdotjs size={32} />
				</div>

			</main>
		</Layout>
	)
}