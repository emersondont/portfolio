import MenuItem from "./menuItem"
// import { useContext } from 'react';
// import { AppContext } from "@/context/appContext";

interface Props {
    home?: boolean
}

export default function Header(props: Props) {
    // const { isEnglish } = useContext(AppContext)
    return (
        <header
            className={
                props.home ?
                    'fixed z-20 top-0 w-full p-4'
                    :
                    'fixed z-20 top-0 w-full p-4 bg-background'
            }
        >
            <nav>
                <ul className='font-bold text-2xl flex justify-center flex-col 2xl:text-4xl md:flex-row md:space-x-20'>
                    <MenuItem href="/">INÍCIO</MenuItem>
                    <MenuItem href="/about">SOBRE</MenuItem>
                    <MenuItem href="/projects">MEUS PROJETOS</MenuItem>
                </ul>
            </nav>
        </header>
    )
}
//