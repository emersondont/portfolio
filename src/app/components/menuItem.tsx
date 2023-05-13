interface Props {
    children: string
}

export default function MenuItem(props: Props) {
    return (
        <li className='border-b-2 border-purple-400 p-1 hover:border-purple-900 ease-in duration-100 cursor-pointer'>
            <a href="">{props.children}</a>
        </li>
    )
}