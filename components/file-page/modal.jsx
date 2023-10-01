'use state'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CloseAlt } from '../icons/icons'

function Modal({close, email}) {
    return (
        <div className='fixed h-screen w-full top-0 left-0 z-20'>
            <div onClick={()=>close(false)} className='hover:scale-125 absolute h-full w-full top-0 left-0 bg-black/[32%]' />
            <div className='bg-[#F2F4F7] p-8 pb-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-[398px] text-center rounded-3xl'>
                <button onClick={()=>close(false)} className='absolute right-8 top-8 z-50'><CloseAlt /></button>
                <div className='h-[200px] relative mx-auto aspect-[1.11/1]'>
                    <Image
                        src="/success.gif"
                        fill
                        alt='Success'
                    />
                </div>
                <h4 className='text-xl font-medium text-primary-900 mb-10'>Your video link has been sent to <span className='text-primary-main'>{email}</span></h4>
                <div className='flex flex-col gap-6'>
                    <p className='text-title-color text-lg'>Would you need to view this video later? Save to your account now!</p>
                    <button className='btn'>Save Video</button>
                </div>

                <p className='text-[#7E7E7E] font-semibold mt-10'>
                    Don’t have an account? 
                    <Link href='/signup' className='text-primary-main font-sora'>Create account</Link>
                </p>
            </div>
        </div>
    )
}

export default Modal