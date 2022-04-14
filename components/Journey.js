import React, { useEffect } from 'react'
import Image from 'next/image'
import bannerFive from '../styles/Images/banner5.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Journey = () => {

    const {ref: textRef, inView: textVisible} = useInView()
    const {ref: titleRef, inView: titleVisible} = useInView();

    const titleAnimation = useAnimation();
    const animation = useAnimation();

    useEffect(() => {
        if (titleVisible) {
            titleAnimation.start({
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .2,
                }
            })
        }
        if (!titleVisible) {
            titleAnimation.start({
                scale: 1,
                opacity: 0,
            })
        }
    })


    useEffect(() => {
        if (textVisible) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: .9,
                    bounce: 0.3
                }
            })
        }
        if (!textVisible) {
            animation.start({
                x: '100vw'
            })
        }
        console.log('use effect hook, inview = ', textVisible)
    }, [textVisible])

    return (
        <div className='h-[max-content] pr-2 relative py-[2rem] md:py-[3rem] w-full'>
            
            <div className="flex items-center md:my-8 lg:my-5 justify-center">
                <div ref={titleRef} className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <motion.div initial='hidden' animate={titleAnimation}>
                    <h1 className="text-center text-4xl text-black sm:text-5xl title-font font-bold ">My Journey</h1>
                </motion.div>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="md:flex md:items-center md:justify-center w-full md:pr-5 md:py-5 pr-2 py-2 ">
                
                <div ref={textRef} className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] -mt-[4rem] md:-mt-0 relative ">
                    <Image src={bannerFive} layout='fill' className='rounded-r-full' objectFit='contain' />
                </div>


                <motion.div animate={animation} className="font-[Poppins] xl:pl-[5rem] -mt-[3rem] md:mt-0 w-full">
                    
                    <p className="text-2xl pl-4 md:text-4xl italic text-yellow-400 ">About Heather Murphy</p>
                    <p className="text-xl pl-6 md:text-3xl italic text-gray-400 ml-5">Who Am I?</p>

                    <p className="my-6 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>

                    <div className="flex w-full items-center xl:-ml-[5rem] justify-center mb-5 ">
                        <button className="font-[Poppins] text-lg text-black md:text-xl border-2 border-yellow-400 py-2 px-4 font-semibold hover:bg-black hover:text-yellow-400 transition duration-500 mt-2 ">More About Me</button>
                    </div>

                </motion.div>


            </div>

            
    
        </div>
      )
}

export default Journey