import MenuItem from "./menuItem"

interface Props {
    home?: boolean
}

export default function Header(props: Props) {
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
                <ul className='font-bold text-xl flex flex-col justify-center 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl sm:flex-row sm:space-x-20'>
                    <MenuItem href="/">HOME</MenuItem>
                    <MenuItem href="/about">ABOUT</MenuItem>
                    <MenuItem href="/projects">MY PROJECTS</MenuItem>
                </ul>
            </nav>
        </header>
    )
}