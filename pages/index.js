// import Header from '@components/Header'
// import Footer from '@components/Footer'

import Head from 'next/head'
import Image from 'next/image'
import Greeting from '@components/Greeting'
import Journey from '@components/Journey'
import Navbar from '@components/Navbar'
import ServiceOne from '@components/ServiceOne'
import ServiceTwo from '@components/ServiceTwo'

export default function Home() {
  return (
    <div className='h-[100vh] w-full '>
      
      <Head>
        <title>HMMurphy - Home</title>
      </Head>
      

      <header className="">
        <Navbar />
      </header>

      <section className=''>
        <Greeting />
      </section>

      <section className="pb-[16rem]">
        <ServiceOne />
      </section>

      <section className="pb-[16rem] bg-black ">
        <ServiceTwo />
      </section>

      <section className="pb-[16rem]">
        <Journey />
      </section>






    </div>
  )
}
