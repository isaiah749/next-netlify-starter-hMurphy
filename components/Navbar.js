import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../styles/Images/logo.webp'
import menuIcon from '../styles/Icons/menu-icon.svg'

const Navbar = () => {

    let [open,setOpen] = useState(false);


  return (
    <div className='shadow-md z-50 w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-black py-2 md:px-10 px-4'>
          <a href="/">
                <div className='font-bold text-2xl cursor-pointer flex items-center '>
                    <span className='mr-1 pt-2'>
                        <Image src={logo} alt='logo' height={40} width={40} />
                    </span>
                    <div className="text-white text-2xl md:text-4xl name-font ml-2 font-semibold">Heather M. Murphy</div>
                </div>
            </a>
      
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer hide-menu'>
                <Image src={menuIcon} height={30} width={30} name={open ? 'close':'menu'} />
            </div>

            <ul className={`pb-12 absolute pt-8 bg-black z-[-1] left-0 w-full desktop-nav pl-2 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
    
                <a href="/" className="md:ml-5 text-lg ">
                    <li className="text-yellow-400  hover:text-yellow-200 font-semibold mt-2 md:my-0 duration-500 ">Home</li>
                </a>
            
                <a href="/elevated-life" className="md:ml-5 text-lg  my-7">
                    <li className="text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 duration-500 ">Elevated Life</li>
                </a>
    
                <a href="/story-revision" className="md:ml-5 text-lg  my-7">
                    <li className="text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 duration-500 ">Story Revision</li>
                </a>
    
                <a href="/about-me" className="md:ml-5 text-lg  my-7">
                    <li className="text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 mr-5 duration-500 ">About Me</li>
                </a>
    
                {/* <button className="border-2 cursor-pointer border-yellow-400 py-2 px-3 font-semibold hover:bg-yellow-400 hover:text-black duration-500 mt-5 lg:mt-0 text-yellow-400">Contact me</button> */}
    
            </ul>
        </div>
    </div>
  )
}

export default Navbar