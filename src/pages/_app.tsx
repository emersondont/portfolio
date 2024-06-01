import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuProvider } from '@/context/menuContext';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MenuProvider>
			<Head>
				<title>Emerson - Desenvolvedor</title>
				<link rel="icon" href="icon.png" sizes="any" />
				<meta name="description" content="Olá! Sou o Emerson, formado em Ciência da Computação pela UFPel e Desenvolvedor Full Stack. Sinta-se à vontade para explorar meu portfólio e conhecer mais sobre os projetos que realizei!" />
			</Head>
			<Component {...pageProps} />
		</MenuProvider>
	)
}
