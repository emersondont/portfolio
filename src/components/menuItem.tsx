import Link from 'next/link'
interface Props {
    children: string
    href: string
}

export default function MenuItem(props: Props) {
    return (
        <li className='border-b-2 border-primary p-1 hover:border-secundary ease-in duration-100 cursor-pointer'>
            <Link href={props.href}>
                {props.children}
            </Link>
        </li>
    )
}