import Image from "next/image"
import { useRouter } from 'next/navigation';

interface Props {
    title: string
    description: string
    href: string
    img: string
}

export default function Card(props: Props) {
    const router = useRouter();

    function handleClick() {
        router.push(props.href)
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <Image
                src={props.img}
                width={300}
                height={300}
                alt={`Screenshot of website ${props.title}`}
                className="rounded-lg drop-shadow-lg cursor-pointer"
                onClick={handleClick}
            />
            <h1 className="text-xl font-bold text-center custom-text-shadow border-b-2 border-purple-400">
                {props.title}
            </h1>
            <p className="text-center w-2/3">
                {props.description}
            </p>
        </div>
    )
}
//between RGB, HEX, HSL, CMYK, and HSV.