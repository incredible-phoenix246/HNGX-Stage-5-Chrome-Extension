import React from 'react'

function FooterItem({title, items}) {
    return (
        <div className='text-white'>
            <h6 className='font-sora font-semibold mb-[26px]'>{title}</h6>
            <ul className='flex flex-col gap-6'>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default FooterItem