// import Header from '@components/Header'
// import Footer from '@components/Footer'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Greeting from '@components/Greeting'
import Journey from '@components/Journey'
import Navbar from '@components/Navbar'
import ServiceOne from '@components/ServiceOne'
import ServiceTwo from '@components/ServiceTwo'
import HamburgerDropdown from '@components/HamburgerDropdown'
import Footer from '@components/Footer'

export default function Home() {
  
  let [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className='h-[100vh] bg-white w-full overflow-x-hidden lg:overflow-x-visible '>
      
      <Head>
        <title>HMMurphy - Home</title>
        
      </Head>
      

      <header className="">
        <Navbar toggle={toggle} />
        <div className="">
          {/* <HamburgerDropdown isOpen={isOpen} toggle={toggle} /> */}
        </div>
      </header>

      <section className=''>
        <Greeting />
      </section>

      <section className="">
        <ServiceOne />
      </section>

      <section className="bg-black ">
        <ServiceTwo />
      </section>

      <section className="">
        <Journey />
      </section>

      <section className=''>
        <Footer />
      </section>






    </div>
  )
}
