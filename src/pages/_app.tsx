import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuProvider } from '@/context/menuContext';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MenuProvider>
			<Head>
				<title>Emersondont - Desenvolvedor</title>
			</Head>
			<Component {...pageProps} />
		</MenuProvider>
	)
}
