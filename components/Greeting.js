import React from 'react';
import Image from 'next/image';
import bannerOne from '../styles/Images/banner5.jpg';
import { motion } from 'framer-motion';

const Greeting = () => {
	return (
		<div className='h-[100vh] pt-[4rem] w-full'>

        <div className='relative h-full '>
          <Image src={bannerOne} layout='fill' objectFit='cover' />
          <div className='absolute top-[40%] w-full text-center'>
            <p className='text-2xl name-font sm:text-3xl font-bold'>Hello I'm,</p>
            <h1 className='text-yellow-400 font-bold italic font-[Poppins] text-[2.75rem]'>Heather Murphy</h1>
          </div>
        </div>
		</div>
	);
};

export default Greeting;
