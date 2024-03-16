// import { useContext } from 'react';
// import { AppContext } from "@/context/appContext";
import Layout from '@/components/layout';
import About from '@/components/sections/about';

export default function Home() {
	// const { isEnglish } = useContext(AppContext)

	return (
		<Layout>
			<About />
		</Layout>
	)
}
