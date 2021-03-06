import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../styles/Images/logo.webp';
import menuIcon from '../styles/Icons/menu-icon.svg';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
	let [ open, setOpen ] = useState(false);

	const titleAnimation = useAnimation();
	const linkAnimation = useAnimation();

	return (
		<div className='shadow-md z-50 w-full border-b-2 border-yellow-400 fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-black py-2 md:px-10 px-4'>
				<a href='/'>
					<div className='font-bold text-2xl cursor-pointer flex items-center '>
						<span className='mr-1 pt-2'>
							<Image src={logo} alt='logo' height={40} width={40} />
						</span>
						<motion.div
							className='text-white pt-[3px] text-2xl md:text-4xl name-font ml-2 font-semibold'
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 1,
									opacity: 0
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										delay: 0.3
									}
								}
							}}>
							Heather M. Murphy
						</motion.div>
					</div>
				</a>

				<div
					onClick={() => setOpen(!open)}
					className='text-4xl absolute right-5 top-4 md:top-4 cursor-pointer lg:hidden'>
					<Image src={menuIcon} height={30} width={30} name={open ? 'close' : 'menu'} />
				</div>

				<ul
					className={`pb-12 absolute pt-8 bg-black z-[-1] left-0 w-full lg:flex lg:items-center lg:justify-end lg:pb-0 lg:w-[max-content] lg:pt-0 lg:static lg:z-20 lg:pl-0 pl-2 transition-all duration-500 ease-in ${open
						? 'top-10 '
						: 'top-[-320px]'}`}>
					<a href='/' className='md:ml-5 text-lg '>
						<motion.li
							className='text-yellow-400  hover:text-yellow-200 font-semibold mt-2 md:my-0 duration-500 '
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 1,
									opacity: 0
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										delay: 0.3
									}
								}
							}}>
							Home
						</motion.li>
					</a>

					<a href='/elevated-life' className='md:ml-5 text-lg  my-7'>
						<motion.li
							className='text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 duration-500 '
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 1,
									opacity: 0
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										delay: 0.2
									}
								}
							}}>
							Elevated Life
						</motion.li>
					</a>

					<a href='/story-revision' className='md:ml-5 text-lg  my-7'>
						<motion.li
							className='text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 duration-500 '
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 1,
									opacity: 0
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										delay: 0.2
									}
								}
							}}>
							Story Revision
						</motion.li>
					</a>

					<a href='/about-me' className='md:ml-5 text-lg  my-7'>
						<motion.li
							className='text-yellow-400  hover:text-yellow-200 font-semibold my-7 md:my-0 mr-5 duration-500 '
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 1,
									opacity: 0
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										delay: 0.2
									}
								}
							}}>
							About Me
						</motion.li>
					</a>

					{/* <button className="border-2 cursor-pointer border-yellow-400 py-2 px-3 font-semibold hover:bg-yellow-400 hover:text-black duration-500 mt-5 lg:mt-0 text-yellow-400">Contact me</button> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

// import React, { useState } from 'react'
// import Image from 'next/image'
// import logo from '../styles/Images/logo.webp'
// import menuIcon from '../styles/Icons/menu-icon.svg'
// import Link from 'next/link'

// const Navbar = ({toggle}) => {

//   return (
//     <div className='flex items-center z-50 w-screen fixed justify-between bg-black h-16'>
//     {/* Title */}
//     <div className='text-3xl pl-2 cursor-pointer text-white name-font flex items-center'>
//         <a href='/'><Image src={logo} height={30} width={30} /></a>
//         <a href="/"><a className='pl-2'>Heather M. Murphy</a></a>
//     </div>
//     {/* Nav Menu For Larger Screens */}
//     <div className="hidden pr-8 md:inline-flex pt-2 text-lg">
//         <ul className="text-white flex lg:space-x-8 md:space-x-4 tracking-widest">
//             <li className="text-yellow-400 hover:text-yellow-200 duration-500 transition hover:underline-offset-4"><Link href="/"><a>Home</a></Link></li>
//             <li className="text-yellow-400 hover:text-yellow-200 duration-500 transition hover:underline-offset-4"><Link href="/elevated-life"><a>Elevated Life</a></Link></li>
//             <li className="text-yellow-400 hover:text-yellow-200 duration-500 transition hover:underline-offset-4"><Link href="/story-revision"><a>Story Revision</a></Link></li>
//             <li className="text-yellow-400 hover:text-yellow-200 duration-500 transition hover:underline-offset-4"><Link href="/about-me"><a>About Me</a></Link></li>
//         </ul>
//     </div>
//     {/* Hamburger Menu For Smaller Screens */}
//     <div className='pr-2 pt-1 md:hidden'>
//         <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" onClick={toggle} xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
//     </div>
// </div>

//   )
// }

// export default Navbar
