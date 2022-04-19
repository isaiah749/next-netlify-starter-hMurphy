import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import personal from '../styles/Images/personal.jpg'
import bannerOne from '../styles/Images/banner1.jpg'
import bannerTwo from '../styles/Images/banner2.jpg'
import bannerThree from '../styles/Images/banner3.jpg'
import Typed from 'react-typed'
import Footer from '@components/Footer'

const aboutMe = () => {



  return (
    <main className='w-full bg-white min-h-screen'>
        <Head>
            <title>HMMurphy - About</title>
        </Head>

        <header className='pb-[5rem] '>
            <Navbar />
        </header>

        <div className="flex items-center pb-2 pt-7 md:pb-0 md:my-8 lg:my-5 justify-center">
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <h1 className="text-center text-3xl text-black sm:text-5xl title-font font-bold ">About Me</h1>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
        </div>

            
        <div className="w-full flex flex-wrap-reverse lg:flex-nowrap pb-5 lg:items-center lg:justify-center py-2">
            {/* Left Container */}
            <div className="w-full max-w-full font-[Poppins] lg:-mt-[10rem] ">
                <h2 className='text-2xl lg:text-5xl italic mb-3 font-semibold pl-[2rem] lg:pl-[10rem] '>Meet Heather Murphy,</h2>
                {/* Typewriter Text */}
                <span className="text-xl lg:text-3xl italic text-yellow-400 font-semibold  pl-[4rem] lg:pl-[13rem] ">
                    <Typed 
                        strings={["Entrepenuer", "Reiki Teacher/Healer", "Energy Medicine Practitioner", "Mother"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </span>

                <div className="border-2 border-yellow-400 h-[.25px] ml-[3rem] lg:ml-[10rem] w-[12rem] lg:w-[28rem] my-2 lg:my-12 "></div>

                <h2 className="lg:my-16 my-6 text-center text-gray-400 tracking-wider text-[1.1rem] lg:text-[1.5rem] ">Heather's life exemplifies asymmetrical balance.</h2>

                <div className="pb-5 lg:-mb-[5rem] ">
                    <p className="text-[.9rem] mx-auto px-[1rem] lg:px-0 lg:pl-[5rem] text-gray-400 py-5 max-w-[600px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim quos odit itaque voluptas fuga facere voluptatem. Autem aliquid inventore, delectus quas voluptatibus, maxime totam fugit modi molestiae magni tempore.</p>
                    <p className="text-[.9rem] mx-auto px-[1rem] lg:px-0 lg:pl-[5rem] text-gray-400 max-w-[600px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae, atque exercitationem commodi vitae adipisci asperiores ad officia! Vitae, accusantium molestiae! Harum, assumenda. Illum ipsam molestiae, qui velit omnis animi?</p>

                </div>
            </div>
            {/* Right Container */}
            <div className="w-full max-w-full px-2 mb-3 lg:mb-0">
                <div className="h-[350px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] relative ">
                    <Image src={personal} layout='fill' className='rounded-full lg:rounded-l-full ' objectFit='cover' objectPosition='center center' />
                </div>
            </div>
        </div>
        
        {/* <div className="border-2 border-yellow-400 w-[90%] mx-auto my-5 "></div> */}

        <div className="grid grid-cols-1 bg-black text-white border-t-4 border-yellow-400 px-5">

            {/* Left Container */}
            <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:space-x-[3rem] font-[Poppins] py-5 px-5 ">

                <div className="h-[300px] w-full lg:w-[50%] relative ">
                    <Image src={bannerOne} layout='fill' className='' objectFit='cover' />
                </div>

                <p className="max-w-[600px] mt-5 lg:mt-0 text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at, provident consectetur aspernatur enim aut eveniet animi qui architecto vel perferendis corrupti aliquid ullam? Nihil molestias error labore quaerat dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nisi expedita quas in aliquam nemo laudantium repudiandae sapiente consequatur natus dignissimos repellendus possimus, ipsam quia sequi impedit quaerat perspiciatis architecto!</p>

            </div>

            <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:space-x-[3rem] font-[Poppins] py-5 px-5 ">

                <div className="h-[300px] w-full lg:w-[50%] relative ">
                    <Image src={bannerThree} layout='fill' className='' objectFit='cover' />
                </div>

                <p className="max-w-[600px] mt-5 lg:mt-0 text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at, provident consectetur aspernatur enim aut eveniet animi qui architecto vel perferendis corrupti aliquid ullam? Nihil molestias error labore quaerat dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nisi expedita quas in aliquam nemo laudantium repudiandae sapiente consequatur natus dignissimos repellendus possimus, ipsam quia sequi impedit quaerat perspiciatis architecto!</p>

            </div>
            


        </div>

        <section className="">
            <Footer />
        </section>



    </main>
  )
}

export default aboutMe