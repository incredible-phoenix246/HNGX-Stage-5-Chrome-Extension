import React from 'react'
import Header from '../../../components/header/header'
import FilePage from '../../../components/file-page/file-page'
import Link from 'next/link'
import Footer from '../../../components/footer/footer'

function Page() {
    return (
        <div>
            <Header />
            <FilePage />
            <section className='py-12 bg-[#E7E7ED]/20 my-16 px-4'>
                <div className='mx-auto max-w-2xl flex flex-col text-center items-center gap-10 text-xl md:text-2xl'>
                    <h3 className='text-title-color font-semibold font-sora'>To ensure the availability and privacy of your video, we recommend saving it to your account.</h3>
                        <button className='btn'>Save Video</button>
                    <p className='text-[#7E7E7E] font-semibold font-sora'>Don’t have an account? <Link className=' text-primary-main underline' href="/signup">Create account</Link></p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page