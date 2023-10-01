import { AngleDown, Avatar, Search } from '../../components/icons/icons'
import Logo from '../../components/logo/logo'
import React from 'react'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'

function Page() {
    return (
        <div>
            <div className='border-b border-b-black/10'>
                <div className="max-w-6xl mx-auto">
                    <div className="container mx-auto px-4">
                        <header className='py-8 flex items-center justify-between'>
                            <Logo />
                            <div className='flex items-center gap-2'>
                                <Avatar />
                                <span className='text-title-text'>John Mark</span>
                                <AngleDown/>
                            </div>
                        </header>
                        <div className='flex flex-col md:flex-row gap-6 items-stretch justify-between pb-10 pt-4'>
                            <div>
                                <h2 className='text-title-color text-[2rem] font-sora font-bold'>Hello, John Mark</h2>
                                <p className='text-lg'>Here are your recorded videos</p>
                            </div>
                            <div className='ml-auto rounded-lg border border-primary-50 bg-primary-50/50 flex items-center w-full sm:w-fit gap-4 px-8 py-4'>
                                <Search />
                                <input type="text" placeholder='Search for a particular video'  className='bg-transparent w-full sm:w-[300px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className='py-10'>
                <div className="max-w-6xl mx-auto">
                    <div className="container mx-auto px-4">
                        <section className='mb-10'>
                            <h5 className='text-title-color/80 text-lg font-medium mb-4'>Recent Files</h5>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10'>
                                <Card
                                    src="/cards/card-1.png"
                                    title="How to create Facebook Ad listing"
                                    date="SEPTEMBER 23, 2023"
                                />
                                <Card 
                                    src="/cards/card-2.png"
                                    title="How to create Facebook Ad listing"
                                    date="SEPTEMBER 23, 2023"
                                />
                            </div>
                        </section>
                        <section>
                            <h5 className='text-title-color/80 text-lg font-medium mb-4'>Files from last week</h5>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10'>
                                <Card
                                    src="/cards/card-2.png"
                                    title="How to create Facebook Ad listing"
                                    date="SEPTEMBER 23, 2023"
                                />
                                <Card
                                    src="/cards/card-1.png"
                                    title="How to create Facebook Ad listing"
                                    date="SEPTEMBER 23, 2023"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Page