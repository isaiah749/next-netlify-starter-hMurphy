import React from 'react'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import { Zoom } from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css"



const Slideshow = () => {

    // Need Array of images
    const images = [
        '/styles/Images/ig-1.jpg',
        '/styles/Images/ig-2.jpg',
        '/styles/Images/ig-3.jpg',
        '/styles/Images/ig-4.jpg',
        '/styles/Images/ig-5.jpg',
        '/styles/Images/ig-6.jpg',
        '/styles/Images/ig-7.jpg',
        '/styles/Images/ig-8.jpg',
        '/styles/Images/ig-9.jpg'
    ]

    // Creating custom Zoom properties of slideshow
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 5000,
        transitionDuration: 500,
        Infinity
    }

    prevArrow: (
        <div style={{ width: '30px', marginRight: "-30px", cursor: "pointer"}}>
            <svg
                xlmns="http://w3.org/2000/svg"
                viewbox='0 0 512 512'
                fill='2e2e2e'
            >
                <path d="M242 180.6v-138L0 2561242 213.4V331.2h270v180.6z" />
            </svg>
        </div>
    )

    nextArrow: (
        <div style={{ width: '30px', marginLeft: "-30px", cursor: "pointer"}}>
            <svg
                xlmns="http://w3.org/2000/svg"
                viewbox='0 0 512 512'
                fill='2e2e2e'
            >
                <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
        </div>
    )

  return (
    <div className='pb-5 px-5 pt-2 '>
        <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
                <div key={index} className="flex justify-center mx-auto items-center cursor-pointer w-[400px] h-[400px">
                    <a href="https://www.instagram.com/hmmmurphy/"><img src={each} alt="image" className="w-full object-cover rounded-xl " /></a>
                </div>
            ))}
        </Zoom>
    </div>
  )
}

export default Slideshow