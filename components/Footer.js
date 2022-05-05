import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../styles/Images/logo.webp';
import data from '../context/images.json';
import Slideshow from './Slideshow';
import igIcon from '../styles/Icons/ig-icon.svg';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='h-[max-content] border-t-2 flex-col border-yellow-400 items-center py-[3rem] justify-center text-white w-full bg-black '>
			<div className='w-full flex items-center justify-center'>
				<div className='flex-col max-w-[500px] min-w-[500px] items-center justify-center '>
					<div className='flex items-center justify-center mb-5 '>
						<Image src={logo} className='' height={50} width={50} />
					</div>

					<h2 className='text-center name-font text-4xl my-3 '>Heather M. Murphy</h2>

					<div className='h-[1px] w-36 bg-white mx-auto' />

					<p className='text-lg text-center font-[Poppins] mt-6 '>heathermmurphy@gmail.com</p>
					<p className='text-lg text-center font-[Poppins] -mt-[5px] '>phone number</p>

					<div className='flex items-center justify-center cursor-pointer mt-8'>
						<Link href='https://www.instagram.com/hmmmurphy/'>
							<Image src={igIcon} className='text-white' height={25} width={25} />
						</Link>
					</div>
				</div>
			</div>

			<div className='w-full  mt-10 '>
				<Slideshow />
			</div>
		</footer>
	);
};

export default Footer;
