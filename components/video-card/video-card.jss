import Image from 'next/image'
import React from 'react'
import { Ellipsis, Links } from '../icons/icons'

function VideoCard({src, title, date}) {
    return (
        <div className='flex flex-col gap-6 px-4 pt-4 pb-6 rounded-3xl overflow-hidden border border-primary-100/60] bg-[#FBFBFB]/50'>
            <div className='relative aspect-[2.52/1] rounded-xl border border-primary-50 overflow-hidden'>
                <Image
                    src={src}
                    fill
                    alt='Image Poster'
                />
            </div>
            <div>
                <div className='flex gap-1 pb-0.5'>
                    <h6 className='flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-title-color text-xl font-medium capitalize'>{title}</h6>
                    <Links />
                    <Ellipsis/>
                </div>
                <span className='text-primary-100 uppercase'>{date}</span>
            </div>
        </div>
    )
}

export default VideoCard