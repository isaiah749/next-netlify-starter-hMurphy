import React, { useEffect } from 'react'
import Image from 'next/image'
import vertTwo from '../styles/Images/vert2.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceTwo = () => {
    const {ref: textRef, inView: textVisible} = useInView()
    const {ref: titleRef, inView: titleVisible} = useInView();

    const titleAnimation = useAnimation();
    const animation = useAnimation();
    const imageAnimation = useAnimation();

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
            imageAnimation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: .9,
                    bounce: 0.3
                }
            })
        }
        if (!textVisible) {
            imageAnimation.start({
                x: '100vw'
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
        <div className='h-[max-content] px-2 relative py-[3rem] w-full'>
            
            <div className="flex items-center pb-2 md:pb-0 md:my-8 lg:my-5 justify-center">
                <div ref={titleRef} className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <motion.div initial='hidden' animate={titleAnimation}>
                    <h1 className="text-center text-2xl text-white sm:text-5xl title-font font-bold ">Rewrite Your Story</h1>
                
                </motion.div>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>
            
                <div className="md:flex md:items-center md:justify-center w-full md:px-5 md:py-5 px-2 py-2 ">

                    
                    <div ref={textRef} className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] relative ">
                        <Image src={vertTwo} layout='fill' objectFit='contain' />
                    </div>
                    
                    <motion.div animate={animation} className="font-[Poppins] mt-5 md:mt-0 w-full">
                        
                        <p className="text-2xl md:text-4xl italic text-yellow-400 ">Re-Create Yourself and</p>
                        <p className="text-xl md:text-3xl italic text-gray-400 ml-5">Find New Experiences</p>

                        <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                        <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                        <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>

                        <div className="flex w-full items-center xl:-ml-[5rem] justify-center mb-5 ">
                            <a href="/story-revision" className="">
                                <button className="font-[Poppins] text-lg text-yellow-400 md:text-xl border-2 border-yellow-400 py-2 px-4 font-semibold hover:bg-yellow-400 hover:text-black transition duration-500 ml-5 ">Learn More</button>
                            </a>
                        </div>

                    </motion.div>
                </div>
            


            
    
        </div>
      )
}

export default ServiceTwo