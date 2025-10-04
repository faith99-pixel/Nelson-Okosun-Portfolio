'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { Logo1 } from './logo/logoImg';

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const [loaderIsVisible, setLoaderIsVisible] = useState(true);
    const iswindow = typeof window !== 'undefined' ? true : false;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    return (
        <>
            {!loaderIsVisible && (
                <>
                    <Navbar />
                    {children}
                    <Footer />
                </>
            )}
            {loaderIsVisible && (
                <div className='w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center bg-white'>
                    <div className='w-44 h-40 border-white border text-black bg-white rounded-full flex items-center justify-center'>
                        <Logo1/>
                    </div>
                </div>
            )}
        </>
    )
}