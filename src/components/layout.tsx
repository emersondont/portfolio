import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer';
import BackgroundHome from './backgroundHome'

interface Props {
    children: ReactNode
    home?: boolean
}

export default function Layout(props: Props) {

    return (
        <div className="flex min-h-screen flex-col items-center p-2 gap-6 md:p-10 bg-background justify-between">
            <Header home={props.home} />
            {props.home && <BackgroundHome />}
            {/* <LanguageSwitch /> */}
            {props.children}
            <Footer />
        </div>
    )
}