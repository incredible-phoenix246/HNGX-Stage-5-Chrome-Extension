import Image from 'next/image'
import React from 'react'

function HowItWorks({number,title, note}) {
    return (
        <div className='text-center flex flex-col'>
            <span className='h-16 w-16 bg-primary-main rounded-full grid place-content-center text-white text-2xl font-bold font-inter mb-8 mx-auto'>{number}</span>
            <h5 className='text-[#1B233D] font-inter text-xl lg:text-[1.75rem] font-semibold mb-4'>{title}</h5>
            <p className='text-grey text-lg lg:text-xl mb-9'>{note}</p>
            <div className='relative aspect-[1.4/1] mt-auto'>
                <Image
                    src="/recs.png" 
                    fill
                    alt='Recording Illustration'
                />
            </div>
        </div>
    )
}

export default HowItWorks