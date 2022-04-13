import React from 'react'
import Link from 'next/link'

function HamburgerDropdown({isOpen, toggle, reload}) {
    return (
        <div className={isOpen ? 'grid grid-flow-rows z-30 text-center w-full items-center mt-16 text-yellow-400 fixed bg-black transition duration-500 ease-in' : 'hidden'} onClick={toggle}>

            <Link href="/">
                <div onClick={reload} className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'>
                    <a>Home</a>
                </div>
            </Link>

            <Link href="/elevated-life">
                <div onClick={reload} className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'>
                    <a>Elevated Life</a>
                </div>
            </Link>

            <Link href="/story-revision">
                <div onClick={reload} className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'>
                    <a>Story Revision</a>
                </div>
            </Link>

            <Link href="/about-me">
                <div onClick={reload} className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'>
                    <a>About Me</a>
                </div>
            </Link>

        </div>
    )
}

export default HamburgerDropdown
