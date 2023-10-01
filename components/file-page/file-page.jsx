'use client'

import React, { useRef, useState } from 'react'
import { Edit, Play, Settings, Volume } from '../icons/icons'
import Image from 'next/image'
import ShareButton from '../share-button/share-button'
import Modal from './modal'

function FIlePage() {
    const [showModal, setShowModal] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [email, setEmail] = useState('');
    const formRef = useRef(null)
    const videoUrl = "https://www.helpmeout/Untitled_Video_20232509"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(emailRegex.test(email)){
            setShowModal(true);
            formRef.current.classList.replace('border-red-500', 'border-primary-50')
        } else {
            formRef.current.classList.replace('border-primary-50', 'border-red-500')
        }
    }


    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(videoUrl);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }
    return (
            <div className="max-w-6xl mx-auto">
                {showModal && <Modal close={setShowModal} email={email} />}
                {showNotification && <div className='bg-primary-main whitespace-nowrap top-10 left-1/2 -translate-x-1/2 py-2 px-4 rounded-lg fixed  text-white font-sora font-medium w-fit'>
                    Item copied to clipboard
                </div>}
                <div className="container mx-auto px-4">
                    <main className='grid grid-cols-1 md:grid-cols-2 py-10 gap-10 md:gap-0'>
                        <section className='md:pr-5 lg:pr-10'>
                            <h2 className='text-title-color text-4xl lg:text-5xl mb-6 font-bold font-sora'>Your video is ready!</h2>
                            <div className='font-sora mb-10'>
                                <span className='text-[#727272] font-medium'>Name</span>
                                <p className='flex  items-center gap-2 text-2xl font-semibold text-primary-400'>Untitled_Video_20232509 <Edit /></p>
                            </div>

                            <form 
                                className='mb-6 py-2 px-4  rounded-2xl bg-primary-300/20 border border-primary-50 flex items-center gap-4 justify-between '
                                onSubmit={handleSubmit}
                                ref={formRef}
                            >
                                <input 
                                    type="text"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)} 
                                    className='bg-transparent placeholder-title-color focus:outline-0 w-full flex-1' 
                                    placeholder='enter email or receiver'
                                 />
                                <button className='bg-primary-300 rounded-lg py-2 px-[18px] text-white font-medium font-manrope'>Send</button>
                            </form>

                            <div className='flex flex-col gap-2 mb-6'>
                                <span className='font-sora text-title-color text-xl font-semibold gap-4'>Video Url</span>
                                <div className='flex gap-2 items-center justify-between py-2 lg:py-3 rounded-xl px-3 bg-[#FAFAFA] border border-[#929292]'>
                                    <p className='text-sm flex-1 overflow-hidden'>{videoUrl}</p>
                                    <button onClick={copyToClipboard} className='flex items-center gap-2 text-primary-main whitespace-nowrap font-manrope font-medium py-2 px-[18px] rounded-lg border border-primary-main'>
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
                        </section>

                        <section className='md:border-l border-l-[#939393] md:pl-5 lg:pl-10'>
                            <div className='border border-primary-400 rounded-lg overflow-hidden'>
                                <video poster='/video-frame.png' className='object-cover aspect-video'>

                                </video>
                                <div className='h-1 bg-[#DFE0E1]'><div className='h-full w-1/6 bg-primary-main rounded-3xl'/></div>
                                <div className='px-4 lg:px-10 py-4 flex items-center justify-between'>
                                    <span className='text-[#939393] font-medium text-2xl font-inter'>0:30/3:00</span>
                                    <div className='flex gap-4   lg:gap-10'>
                                        <button className='flex flex-col gap-1.5 items-center text-title-color text-xs font-medium'>
                                            <Play />
                                            Play
                                        </button>
                                        <button className='flex flex-col gap-1.5 items-center text-title-color text-xs font-medium'>
                                            <Volume />
                                            Volume
                                        </button>
                                        <button className='flex flex-col gap-1.5 items-center text-title-color text-xs font-medium'>
                                            <Settings />
                                            Settings
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-10'>
                                <h5 className='text-primary-900 text-xl font-medium'>Transcript</h5>
                                <div className='p-2 rounded border border-[#CFCFCF] w-fit mt-2 mb-10'>
                                    <select name="" id="" className='text-[#9D9D9D] bg-white pr-10'>
                                        <option value="english">English</option>
                                    </select>
                                </div>
                                <div className='flex gap-1 sm:gap-10'>
                                    <ul className='px-2 flex flex-col gap-6 text-black font-medium leading-[163%] font-inter'>
                                        <li className='flex'>
                                            <span className='block w-12'>0.01</span>
                                            <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the</p>
                                        </li>
                                        <li className='flex'>
                                            <span className='block w-12'>0.15</span>
                                            <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the</p>
                                        </li>
                                        <li className='flex'>
                                            <span className='block w-12'>0.30</span>
                                            <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the</p>
                                        </li>
                                        <li className='text-[#CFCFCF] flex'>
                                            <span className='block w-12 '>1.00</span>
                                            <p className='flex-1'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the</p>
                                        </li>
                                    </ul>
                                    <div className='w-1.5 shrink-0 bg-[#F5F5F5] rounded'><div className='h-1/2 w-1 mx-auto rounded bg-[#D9D9D9]'/></div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
    )
}

export default FIlePage