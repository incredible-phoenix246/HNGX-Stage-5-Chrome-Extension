import Feature from '../components/feature/feature'
import Header from '../components/header/header'
import HowItWorks from '../components/how-it-works/how-it-works'
import { Arrow, Circle, Share, Sync } from '../components/icons/icons'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/footer/footer'
import Link from 'next/link'

function Page() {
    return (
        <div className='bg-[#F4F6F8]'>
            <Header />
            <section className='bg-white mt-1 pt-10 pb-20'>
                <div className="mx-auto max-w-6xl">
                    <div className="container mx-auto flex flex-col sm:flex-row items-center px-4 gap-10 sm:gap-0">
                        <article className='sm:w-[45%] text-center sm:text-left'>
                            <h1 className='font-sora text-[2.5rem] lg:text-6xl font-bold leading-none mb-6 text-title-color'>Show Them Don’t Just Tell</h1>
                            <p className='font-xl leading-[140%] text-black/75 font-inter mb-8 lg:mb-12 pr-4'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                            <Link
                                href="https://drive.google.com/file/d/1VKWuzHOyJ0VDFxX1_3KdlSrrh27MGZck/view?usp=drive_link" 
                                className='text-white font-semibold md:font-lg flex items-center gap-3 py-3 lg:py-5 px-4 lg:px-6 bg-primary-main rounded-lg mx-auto md:mx-0 w-fit'
                            >
                                Install HelpMeOut
                                <Arrow />
                            </Link>
                        </article>
                        <div className='w-full sm:w-[55%] aspect-[1.45/1] sm:aspect-[unset] pb-6 sm:pb-14 lg:pb-[86px] pr-5 sm:pr-8 lg:pr-12 pl-4 sm:pl-9 lg:pl-[52px] pt-5 sm:pt-10 lg:pt-14 relative'>
                            <div className='w-2/5 aspect-[1.054/1] top-0 right-0 absolute'>
                                <Image
                                    src="/frames/grid-top.png"
                                    fill
                                    alt="Grid"
                                />
                            </div>
                            <div className='w-2/5 aspect-[1.054/1] bottom-0 left-0 absolute'>
                                <Image
                                    src="/frames/grid-bottom.png"
                                    fill
                                    alt="Grid"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className='aspect-[1.45/1] relative '>
                                    <Image
                                        src="/frames/frame1.png"
                                        fill
                                        alt='Woman image'
                                        className='object-cover'
                                    />
                                </div>
                                <div className='relative row-span-2'>
                                    <Image
                                        src="/frames/frame3.png"
                                        fill
                                        alt='Woman image'
                                        className='object-cover rounded-lg'
                                    />
                                </div>
                                <div className='aspect-[1.45/1] relative'>
                                    <Image
                                        src="/frames/frame2.png"
                                        fill
                                        alt='Woman image'
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className='mt-14 bg-white py-20'> 
                <div className="max-w-6xl mx-auto">
                    <div className="container mx-auto px-4">
                        <h4 className='title'>Features</h4>
                        <p className="text-center text-xl text-grey mt-2">Key Highlights of Our Extension</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-12 mt-8 md:mt-16">
                            <ul>
                                <Feature
                                    Icon={Circle}
                                    title="Simple Screen Recording"
                                    note="Effortless screen recording for everyone. Record with ease, no tech expertise required."
                                />
                                <Feature
                                    Icon={Share}
                                    title="Easy-to-Share URL"
                                    note="Share your recordings instantly with a single link. No attachments, no downloads."
                                />
                                <Feature
                                    Icon={Sync}
                                    title="Revisit Recordings"
                                    note="Access and review your past content effortlessly. Your recordings, always at your fingertips."
                                />
                            </ul>
                            <div className='aspect-[1.44/1] relative'>
                                <Image
                                    src="/feature.png"
                                    fill
                                    alt='Dashboard UI'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="mt-14 bg-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="container mx-auto">
                        <h4 className="title mb-14">How It Works</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-20">
                            <HowItWorks
                                number={1}
                                title="Record Screen"
                                note='Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.'
                            />
                            <HowItWorks
                                number={2}
                                title="Share Your Recording"
                                note='We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.'
                            />
                            <HowItWorks
                                number={3}
                                title="Learn Effortlessly"
                                note='Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page