interface Props {
    title: string
}

export default function TitlePage(props: Props) {

    return (
        <div className='flex z-10 w-5/6 mb-6 mt-36 md:mt-28'>
            <h1 
            className=' border-b-2 border-purple-700 p-1 font-bold text-3xl custom-text-shadow
            lg:text-4xl
            '
            >
                {props.title}
            </h1>
        </div>
    )
}