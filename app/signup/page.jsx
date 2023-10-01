import Logo from '../../components/logo/logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Signup() {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="container mx-auto px-4">
                <header className='py-4 mb-4 md:mb-0'>
                    <Logo />
                </header>
                <main className=' max-w-[475px] mx-auto'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold font-inter tracking-[0.32px] mb-2'>Log in or Sign up</h2>
                        <p className='text-sm text-[#434343] tracking-[0.14px] font-sen max-w-[364px] mx-auto'>Join millions of others in sharing successful moves on HelpMeOut.</p>
                    </div>
                    <div className='flex flex-col gap-6 py-6'>
                        <button className='social-button'>
                            <Image
                                src="/google.svg"
                                height={24}
                                width={24}
                                alt='Google icon'
                            />
                            Continue with Google
                        </button>
                        <button className='social-button'>
                            <Image
                                src="/facebook.svg"
                                height={24}
                                width={24}
                                alt='Google icon'
                            />
                            Continue with Facebook
                        </button>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div className='flex-1 h-px bg-primary-100'/>
                        <span className='text-sm text-primary-100 font-inter font-semibold tracking-[0.14px]'>or</span>
                        <div className='flex-1 h-px bg-primary-100'/>
                    </div>
                    <form action="" className='pt-6'>
                        <div className='mb-3'>
                            <label htmlFor="email" className='label-style'>Email</label>
                            <input 
                                type="email" 
                                id='email'
                                className='form-input'
                                placeholder='Enter your email address'    
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="password" className='label-style'>Password</label>
                            <input 
                                type="email" 
                                id='password'
                                className='form-input'
                                placeholder='Enter your password'    
                            />
                        </div>
                        <Link href="/home" className='p-3 w-full rounded-lg block text-center text-[#F9F9FF] bg-primary-main text-lg font-medium'>Sign Up</Link>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Signup