import MenuItem from "./menuItem"
import { useContext } from 'react';
import { AppContext } from "@/context/appContext";

interface Props {
    home?: boolean
}

export default function Header(props: Props) {
    const { isEnglish } = useContext(AppContext)
    return (
        <header

            className={
                props.home ?
                    'fixed z-20 top-0 w-full p-4'
                    :
                    'fixed z-20 top-0 w-full p-4 bg-purple-950'
            }
        >
            <nav>
                {
                    isEnglish ?
                        <ul className='font-bold text-2xl flex flex-col justify-center 2xl:text-4xl md:flex-row md:space-x-20'>
                            <MenuItem href="/">HOME</MenuItem>
                            <MenuItem href="/about">ABOUT</MenuItem>
                            <MenuItem href="/projects">MY PROJECTS</MenuItem>
                        </ul> :
                        <ul className='font-bold text-2xl flex flex-col justify-center 2xl:text-4xl md:flex-row md:space-x-20'>
                            <MenuItem href="/">INÍCIO</MenuItem>
                            <MenuItem href="/about">SOBRE</MenuItem>
                            <MenuItem href="/projects">MEUS PROJETOS</MenuItem>
                        </ul>
                }
            </nav>
        </header>
    )
}