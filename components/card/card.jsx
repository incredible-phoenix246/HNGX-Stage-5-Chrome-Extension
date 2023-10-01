import Image from 'next/image'
import React from 'react'
import { Ellipsis, Links } from '../icons/icons'
import Link from 'next/link'

function Card({src, title, date}) {
    return (
        <Link href="/home/singleview" className='flex flex-col gap-2 lg:gap-4 video pb-4 lg:pb-6'>
            <div className='relative aspect-[2.52/1] rounded-xl border border-primary-50 overflow-hidden'>
                <Image
                    src={src}
                    fill
                    alt='Image Poster'
                    className=' object-cover object-left-top overflow-hidden'
                />
            </div>
            <div>
                <div className='flex gap-1 lg:gap-3 lg:pb-0.5'>
                    <h6 className='flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-title-color  text-lg font-medium capitalize'>{title}</h6>
                    <Links />
                    <Ellipsis/>
                </div>
                <span className='text-primary-100 uppercase text-sm'>{date}</span>
            </div>
        </Link>
    )
}

export default Card