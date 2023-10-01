import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href="/">
            <Image
                src="/logo-blue.png"
                height={40}
                width={137}
                alt='Logo'
            />
        </Link>
    )
}

export default Logo