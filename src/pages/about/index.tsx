import Header from '../../components/header'
import LanguageSwitch from '@/components/languageSwitch'
import TitlePage from '@/components/titlePage'
import Link from 'next/link'
import { useContext } from 'react';
import { AppContext } from "@/context/appContext";

export default function About() {
	const { isEnglish } = useContext(AppContext)

	return (
		<main className="flex min-h-screen flex-col items-center p-6  bg-purple-950">
			<Header />
			<LanguageSwitch />
			<TitlePage title={isEnglish ? 'ABOUT' : 'SOBRE'} />
			{
				isEnglish ?
					<div className='flex flex-col z-10 font-Rubik text-lg gap-4'>
						<p>
							Hello! I'm Emerson, a Computer Science student passionate about programming and technology.<br />
							Currently, I'm in the final year of my course at the Federal University of Pelotas (UFPel), where I enrolled in 2018.<br />
						</p>
						<p>
							Throughout my academic and professional journey, I have had the opportunity to work on various challenging projects,<br />
							which have allowed me to enhance my problem-solving, teamwork, and communication skills.<br />
							I am highly motivated and always seek new challenges to expand my knowledge.<br />
						</p>
						<p>
							Over the past four years, in addition to gaining experience with several programming languages during my studies,<br />
							such as <span className='text-purple-300'>C, C++, Java, Python</span>, and even low-level languages like Assembly, I also sought experience as a<br />
							frontend developer, where I acquired a deep understanding of <span className='text-purple-300'>HTML, CSS, and JavaScript</span> technologies.<br />
							Furthermore, I am constantly seeking to improve my skills and have ventured into the world of <span className='text-purple-300'>ReactJS</span>,<br />
							where I gained practical knowledge in developing modern frontend applications.<br />
						</p>
						<p>
							Currently, I am expanding my skill set by exploring <span className='text-purple-300'>Next.js</span>, a powerful JavaScript framework for creating scalable<br />
							and high-performance web applications. I am excited about the possibilities that Next.js offers and<br />
							determined to become an expert in this technology.<br />
						</p>
						<p>
							Feel free to explore my portfolio and learn more about the <Link href={'/projects'}><span className='text-purple-300'>projects</span></Link> I have worked on!
						</p>
					</div> :
					<div className='flex flex-col z-10 font-Rubik text-lg gap-4'>
						<p>
							Olá! Sou Emerson, um estudante de Ciência da Computação apaixonado por programação e tecnologia.<br />
							Atualmente, estou no último ano do curso na Universidade Federal de Pelotas (UFPel), onde me matriculei em 2018.<br />
						</p>
						<p>
							Ao longo do meu percurso acadêmico e profissional, tive a oportunidade de trabalhar em vários projetos desafiadores,<br />
							que me permitiram aprimorar minhas habilidades de resolução de problemas, trabalho em equipe e comunicação. <br />
							Sou altamente motivado e sempre busco enfrentar novos desafios para expandir meu conhecimento.<br />
						</p>
						<p>
							Durante os últimos quatro anos, além de adquirir experiência com várias linguagens de programação na graduação,<br />
							como <span className='text-purple-300'>C, C++, Java, Python</span> e até mesmo linguagens de baixo nível como Assembly, busquei também experiência como <br />
							desenvolvedor frontend, onde obtive um amplo entendimento das tecnologias <span className='text-purple-300'>HTML, CSS e JavaScript</span>.<br />
							Além disso, estou sempre buscando aprimorar minhas habilidades e me aventurei no mundo do <span className='text-purple-300'>ReactJS</span>, onde adquiri<br />
							conhecimento prático no desenvolvimento de aplicações frontend modernas.<br />
						</p>
						<p>
							Atualmente, estou expandindo meu conjunto de habilidades explorando o <span className='text-purple-300'>Next.js</span>, uma poderosa estrutura JavaScript<br />
							para criação de aplicativos web escaláveis e de alto desempenho. Estou animado com as possibilidades que o Next.js<br />
							oferece e determinado a me tornar um especialista nessa tecnologia.<br />
						</p>
						<p>
							Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os <Link href={'/projects'}><span className='text-purple-300'>projetos</span></Link> que realizei!
						</p>
					</div>
			}
		</main>
	)
}