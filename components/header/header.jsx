'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Close, HarmBurger } from '../icons/icons'
import Logo from '../logo/logo'
import Link from 'next/link'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='bg-white'>
            <div className="max-w-6xl mx-auto">
                <div className='container mx-auto flex items-center justify-between p-3 px-4'> 
                    <Logo />

                    <nav className='hidden sm:block'>
                        <ul className='flex text-black font-medium gap-4 sm:gap-10'>
                            <li>Features</li>
                            <li>How It Works</li>
                        </ul>
                    </nav>

                    <Link href="/signup" className='hidden sm:block font-semibold text-primary-main font-sora text-lg p-3 rounded-[5px] transition-all hover:bg-primary-main hover:text-white'>
                        Get Started
                    </Link>
                    <button onClick={()=>setShowMenu(true)} className='sm:hidden'>
                        <HarmBurger />
                    </button>
                </div>
            </div>
            <div className={`fixed sm:hidden transition-all top-0 ${showMenu ? 'left-0' : '-left-full'} h-screen w-full z-50 bg-primary-main p-20`}>
                    <button onClick={()=>setShowMenu(false)} className='absolute right-8 top-8'><Close/></button>
                    <ul className='flex flex-col text-white font-medium gap-10'>
                        <li>Features</li>
                        <li>How It Works</li>
                        <li>
                            <Link href="/signup" className='border border-white bg-white font-semibold text-primary-main font-sora text-lg py-3 px-6 rounded-[5px]'>
                                Get Started
                            </Link>
                        </li>
                    </ul>
            </div>
        </header>
    )
}

export default Header