import Link from 'next/link'
interface Props {
    children: string
    href: string
}

export default function MenuItem(props: Props) {
    return (
        <li className='border-b-2 border-primary cursor-pointer'>
            <Link href={props.href} className='hover:text-primary ease-in duration-100 p-1'>
                {props.children}
            </Link>
        </li>
    )
}