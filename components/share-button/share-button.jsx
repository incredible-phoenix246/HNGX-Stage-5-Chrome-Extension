import Image from 'next/image'
import React from 'react'

function ShareButton({image, text}) {
    return (
        <button className='flex items-center gap-2 text-primary-900 font-inter tracking-[0.16px] font-medium py-3 px-4 rounded-md border border-primary-800'>
            <Image 
                src={image}
                height={20}
                width={20}
                alt='Copy Icon'
            />
            {text}
        </button>
    )
}

export default ShareButton