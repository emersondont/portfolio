interface Props {
    title: string
}

export default function TitlePage(props: Props) {

    return (
        <div className='flex z-10 w-5/6 mb-6 mt-28'>
            <h1 
            className=' border-b-2 border-purple-400 p-1 font-bold text-2xl custom-text-shadow
            lg:text-4xl md:text-3xl sm:text-2xl
            '
            >
                {props.title}
            </h1>
        </div>
    )
}