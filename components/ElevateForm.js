import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const ElevateForm = () => {
  



    const sendEmail = (e) => {
        let form = document.querySelector('#revisionForm')
        const success = document.querySelector('#success-message')
        const errorMessage = document.querySelector('#error-message')
        e.preventDefault();

        emailjs.sendForm('service_m39u4t1', 'template_sxh6n5r', e.target, '9Iv1gFcW2SqXdaGMF')
          .then((result) => {
              console.log(result.text);
              form.style.display = 'none'
              success.classList.remove('hide')

          }, (error) => {
              console.log(error.text);
              errorMessage.classList.remove('hide')
          });

    }
  
    return (
    <div className="w-full font-[Poppins] ">

        <form className='max-w-[650px] border-2 border-yellow-400 mx-auto bg-black bg-opacity-40 p-5' id='revisionForm' onSubmit={sendEmail}>

            <div className="flex flex-wrap items-center justify-center space-y-10 md:space-y-0 md:flex-nowrap md:space-x-5">
                <div className="max-w-[300px] border-2 border-white rounded-md ">
                    <input type="text" className='w-[300px] p-3 bg-transparent text-yellow-400 placeholder-yellow-400 outline-none h-[50px] text-sm ' name='name' placeholder='Your Full Name' />
                </div>

                <div className="max-w-[300px] border-2 border-white rounded-md ">
                    <input type="text" className='w-[300px] p-3 bg-transparent text-yellow-400 placeholder-yellow-400 outline-none h-[50px] text-sm ' name='email' placeholder='Your Email' />
                </div>
            </div>

            <div className="flex items-center justify-center mt-10">
                <div className="max-w-[300px] border-2 border-white rounded-md ">
                    <input type="text" className='w-[300px] p-3 bg-transparent text-yellow-400 placeholder-yellow-400 outline-none h-[50px] text-sm ' name='subject' value='Elevate Your Life' readOnly placeholder='Subject: Revisioning Your Life' />
                </div>
            </div>

            <div className="flex items-center mt-10 justify-center">
                <div className="w-full border-2 border-white rounded-md ">
                    <textarea type="text" className='w-full p-3 bg-transparent text-yellow-400 placeholder-yellow-400 outline-none h-[50px] text-sm ' name='message'  placeholder='Message' />
                </div>
            </div>

            <div className="flex items-center mt-10 justify-center">
                <button type='submit' form='revisionForm' className="border-2 border-white font-semibold text-lg py-2 px-4 cursor-pointer text-white hover:text-yellow-400 hover:border-yellow-400 transition duration-500">Send message</button>
            </div>


        </form>
            <div id="success-message" className="text-yellow-400 font-bold text-2xl text-center hide">Message Sent!</div>
            <div id="error-message" className="text-yellow-400 font-bold text-2xl text-center hide">Message Failed! Try again!</div>
    </div>
  )
}

export default ElevateForm