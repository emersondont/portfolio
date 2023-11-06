import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer';
import BackgroundHome from './backgroundHome'
// import LanguageSwitch from './languageSwitch';

interface Props {
    children: ReactNode
    home?: boolean
}

export default function Layout(props: Props) {
    return (
        <div className="flex min-h-screen flex-col items-center px-8 pb-10 pt-40 md:py-20 md:pb-20 bg-background justify-between">
            <Header home={props.home} />
            {props.home && <BackgroundHome />}
            {/* <LanguageSwitch /> */}
            {props.children}
            <Footer />
        </div>
    )
}