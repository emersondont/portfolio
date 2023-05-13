import MenuItem from "./menuItem"

export default function Header() {
    return (
        <header className='flex z-10'>
            <nav>
                <ul className='font-bold text-2xl flex space-x-20'>
                    <MenuItem href="/">HOME</MenuItem>
                    <MenuItem href="/about">ABOUT</MenuItem>
                    <MenuItem href="/projects">MY PROJECTS</MenuItem>
                </ul>
            </nav>
        </header>
    )
}