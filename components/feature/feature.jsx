import React from 'react'

function Feature({Icon, title, note}) {
    return (
        <li className='flex items-start gap-2 lg:gap-4 mb-6 lg:mb-10 last:mb-0'>
            <div className='shrink-0 scale-75 lg:scale-100'>
                <Icon/>
           </div>
           <div>
                <h5 className='font-semibold font-inter text-xl lg:text-[1.75rem] text-[#1B233D] mb-2'>{title}</h5>
                <p className='text-grey text-base md:text-sm lg:text-lg'>{note}</p>
            </div> 
        </li>
    )
}

export default Feature