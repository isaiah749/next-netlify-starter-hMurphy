import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../styles/Images/logo.webp'
import data from '../context/images.json'
import IgPics from './IgPics'


// const images = [
//     '/styles/Images/ig-1.jpg',
//     '/styles/Images/ig-2.jpg',
//     '/styles/Images/ig-3.jpg',
//     '/styles/Images/ig-4.jpg',
//     '/styles/Images/ig-5.jpg',
//     '/styles/Images/ig-6.jpg',
//     '/styles/Images/ig-7.jpg',
//     '/styles/Images/ig-8.jpg',
//     '/styles/Images/ig-9.jpg',
// ]




const Footer = () => {

    

  return (
    <footer className='h-[max-content] flex-col items-center py-[3rem] justify-center text-white w-full bg-black '>
        
        <div className="w-full flex items-center justify-center">

            <div className="flex-col max-w-[500px] min-w-[500px] items-center justify-center ">
                <div className="flex items-center justify-center">
                    <Image src={logo} className='' height={60} width={60} />
                </div>

                <h2 className="text-center name-font text-4xl my-3 ">Heather M. Murphy</h2>

                <div className="h-[1px] w-36 bg-white mx-auto" />

                <p className="text-lg text-center font-[Poppins] mt-6 ">heathermmurphy@gmail.com</p>
                <p className="text-lg text-center font-[Poppins] -mt-[5px] ">phone number</p>

                <div className="flex items-center justify-center mt-8">
                    <Image src={logo} height={30} width={30} />
                </div>
            </div>

        </div>
            
        <div className="w-full  mt-10 ">
            <IgPics />
        </div>


    </footer>
  )
}

export default Footer