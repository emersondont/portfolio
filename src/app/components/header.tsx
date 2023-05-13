import MenuItem from "./menuItem"

export default function Header() {
    return (
        <header className='flex z-10 mb-48'>
            <nav>
                <ul className='font-bold text-2xl flex space-x-20'>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                    <MenuItem>MY PROJECTS</MenuItem>
                </ul>
            </nav>
        </header>
    )
}