import React from 'react';
import Image from 'next/image';
import bannerOne from '../styles/Images/banner5.jpg';
import { motion, useAnimation } from 'framer-motion';

const Greeting = () => {
	return (
		<div className='h-[100vh] w-full'>

        <div className='relative h-full '>
          <Image src={bannerOne} layout='fill' objectFit='cover' />
          <motion.div className='absolute top-[40%] w-full text-center' initial='hidden' animate='visible' variants={{
            hidden: {
              opacity: 0,
              scale: 1
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.3
              }
            }
          }}>
            <p className='text-2xl name-font sm:text-3xl lg:text-4xl font-bold'>Hello I'm,</p>
            <h1 className='text-yellow-400 font-bold italic font-[Poppins] text-[2.75rem] lg:text-6xl'>Heather Murphy</h1>
          </motion.div>
        </div>
		</div>
	);
};

export default Greeting;
