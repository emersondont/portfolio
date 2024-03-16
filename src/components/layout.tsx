import React, { ReactNode } from 'react';
import Menu from './menu'
import Links from './links';
import Emersondont from './emersondont';
import BackgroundHome from './backgroundHome'


interface Props {
    children: ReactNode
}

export default function Layout(props: Props) {
    return (
        <main className="flex items-center bg-background font-Inter h-screen w-full z-20">
            {/* <BackgroundHome /> */}
            <section className='z-20 flex flex-col w-1/2 p-24 justify-between h-screen'>
                <Emersondont />
                <Menu />
                <Links />
            </section>
            <section className='w-1/2 overflow-y-auto h-full pr-24'>
                {props.children}
            </section>
        </main>
    )
}