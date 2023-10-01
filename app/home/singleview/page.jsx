import React from 'react'
import { AngleDown, Avatar, Edit } from '../../../components/icons/icons'
import Logo from '../../../components/logo/logo'
import ShareButton from '../../../components/share-button/share-button'
import Link from 'next/link'
import Image from 'next/image'

function Page() {
    return (
        <div>
            <div className="max-w-6xl mx-auto pb-20">
                <div className="container mx-auto px-4">
                    <header className='py-8 flex items-center justify-between'>
                        <Logo />
                        <div className='flex items-center gap-2'>
                            <Avatar />
                            <span className='text-title-text'>John Mark</span>
                            <AngleDown/>
                        </div>
                    </header>
                    <h3 className='text-title-color/70 text-sm md:text-base lg:text-lg mb-6'><Link href="/home" className='cursor-pointer'>Home</Link> / <span className='cursor-pointer'>Recent Videos</span> / <span className=' text-primary-400 font-medium'>How To Create A Facebook Ad Listing     </span></h3>
                    <main>
                        <h1 className='text-title-color font-semibold mb-8 text-lg md:text-2xl font-sora flex sm:items-center gap-3'>How To Create A Facebook Ad Listing <Edit /></h1>
                        <div className='video'>
                            <div className="relative aspect-[2.64/1] ">
                                <Image
                                    src="/video-frame.png"
                                    fill
                                    alt='Video Poster'
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 py-10'>
                            <div className='py-2 lg:py-3.5 px-4 lg:px-6 rounded-xl bg-primary-300/50 border opacity-40 border-primary-50 flex items-center gap-4 justify-between '>
                                <input type="text" className='bg-transparent placeholder-title-color' placeholder='enter email or receiver' />
                                <button className='bg-primary-300 rounded-lg py-2.5 px-[18px] text-white font-medium font-manrope'>Send</button>
                            </div>
                            <div className='flex gap-2 items-center justify-between py-2 lg"py-3.5 rounded-xl px-3 bg-[#FAFAFA] border border-[#929292]'>
                                <p className='text-sm flex-1 overflow-hidden'>https://www.helpmeout/Untitled_Video_20232509</p>
                                <button className='flex items-center gap-2 text-primary-main whitespace-nowrap font-manrope font-medium py-2.5 px-[18px] rounded-lg border border-primary-main'>
                                    <Image 
                                        src="/copy.svg"
                                        height={20}
                                        width={20}
                                        alt='Copy Icon'
                                    />
                                    Copy URL
                                </button>
                            </div>
                        </div>

                        <div>
                            <h5 className='text-primary-900 text-xl font-medium'>Share your video</h5>
                            <div className='flex py-4 gap-4 flex-wrap'>
                                <ShareButton image="/facebook.png" text="Facebook" />
                                <ShareButton image="/whatsapp.png" text="Whatsapp" />
                                <ShareButton image="/telegram.png" text="Telegram" />
                            </div>
                        </div>

                        <div className='pt-10'>
                            <h5 className='text-primary-900 text-xl font-medium'>Transcript</h5>
                            <div className='p-4 rounded border border-[#CFCFCF] w-fit mt-4 mb-10'>
                                <select name="" id="" className='text-[#9D9D9D] bg-white pr-2'>
                                    <option value="english">English</option>
                                </select>
                            </div>
                            <div className='flex gap-1 sm:gap-10 md:gap-20'>
                                <ul className='px-2 flex flex-col gap-10 text-sm sm:text-lg md:text-xl'>
                                    <li className='text-title-color font-medium flex'>
                                        <span className='block w-12 sm:w-20'>0.01</span>
                                        <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </p>
                                    </li>
                                    <li className='text-title-color font-medium flex'>
                                        <span className='block w-12 sm:w-20'>0.15</span>
                                        <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </p>
                                    </li>
                                    <li className='text-title-color font-medium flex'>
                                        <span className='block w-12 sm:w-20'>0.30</span>
                                        <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </p>
                                    </li>
                                    <li className='text-[#CFCFCF] font-medium flex'>
                                        <span className='block w-12 sm:w-20'>1.00</span>
                                        <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </p>
                                    </li>
                                </ul>
                                <div className='w-1.5 shrink-0 bg-[#F5F5F5] rounded'><div className='h-1/2 w-1 mx-auto rounded bg-[#D9D9D9]'/></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Page