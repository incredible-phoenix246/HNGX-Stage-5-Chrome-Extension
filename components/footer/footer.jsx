import Image from 'next/image'
import React from 'react'
import FooterItem from '../footer-item/footer-item'

function Footer() {
    return (
        <footer className='bg-primary-main py-24'>
            <div className="max-w-6xl mx-auto">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-5">
                    <Image
                        src="/logo-white.png"
                        height={40}
                        width={137}
                        alt='Logo'
                    />
                    <FooterItem
                        title="Menu"
                        items={['Home', "Converter", 'How it Works']}
                    />
                    <FooterItem
                        title="About Us"
                        items={['About', "Contact Us", 'Privacy Policy']}
                    />
                    <FooterItem
                        title="Screen Record"
                        items={['Browser Window', "Desktop", 'Application']}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer