import Image from "next/image"
import Link from 'next/link'
import { SiGithub } from 'react-icons/si';

interface Props {
    title: string
    description: string
    href: string
    github: string
    img: string
}

export default function Card(props: Props) {
    return (
        <div className="flex flex-col items-center gap-2 w-80">
            <Link href={props.href} target="_blank" className='hover:text-primary'>
                <Image
                    src={props.img}
                    width={300}
                    height={200}
                    alt={`Screenshot of website ${props.title}`}
                    className="rounded-lg drop-shadow-lg cursor-pointer"
                />
                <h1 className="text-xl font-bold text-center custom-text-shadow border-b-2 border-purple-700">
                    {props.title}
                </h1>
            </Link>
            <Link href={props.github} target="_blank" className="flex items-center gap-2 hover:text-primary">
                <SiGithub size={24} />
                <p>Acessar o projeto no GitHub</p>
            </Link>
            <p className="text-center w-2/3">
                {props.description}
            </p>
        </div>
    )
}