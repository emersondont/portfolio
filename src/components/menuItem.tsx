import Link from 'next/link'
interface Props {
    children: string
    href: string
}

export default function MenuItem(props: Props) {
    return (
        <li className='border-b-2 border-purple-700 p-1 hover:border-purple-900 ease-in duration-100 cursor-pointer'>
            <Link href={props.href}>
                {props.children}
            </Link>
        </li>
    )
}