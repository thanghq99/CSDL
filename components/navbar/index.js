import Link from 'next/link'
import React from 'react'

import Seachbar from './Seachbar'

const navLinks = [
    {
        url: '/',
        name: 'Home',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
        url: '/transaction',
        name: 'Transaction',
        icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },
    {
        url: '/book',
        name: 'Book',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
        url: '/user',
        name: 'User',
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
]

function index() {
    return (
        <>
            <div className='flex space-x-3 items-center justify-center '>
                {
                    navLinks.map(item => (
                        <Link href={item.url}>
                            <div className='relative group hover:cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                </svg>
                                <p className='absolute hidden z-10 drop-shadow-sm text-xl font-bold pointer-events-none group-hover:block'>{item.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className='flex justify-center '>
                <Seachbar></Seachbar>
            </div>
        </>
    )
}

export default index