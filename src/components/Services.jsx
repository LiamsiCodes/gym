import React, { useEffect } from 'react'
import png from '../assets/png.png'
import "aos/dist/aos.css"
import Aos from 'aos'

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])
  return (
    <div id='contact' className='px-12 pt-40 bg-white w-full h-full'>
       <div>
        <div data-aos="fade-up">
            <h1 className='text-[#5E0000] font-bold text-3xl'><span className='text-[#FF6B66]'>JOIN NOW</span> TO GET IN SHAPE</h1>
            <p className='mt-4 text-[#5E0000] font-semibold'>Contact us by sending an email that contains our questions or what you need to know more about <span className='text-[#FF6B66]'>EVOGYM</span> <br /> and the support will get back to you as soon as possible <br /> Thanks!</p>
        <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36'>
            <div className='mt-6'>
            <form className='flex flex-col'>
                <input type="text"  className='bg-[#FFA6A3] p-4 border-none outline-none font-semibold rounded-md my-5 placeholder:text-white'  placeholder='NAME' />
                <input type="email"  className='bg-[#FFA6A3] p-4 border-none outline-none font-semibold rounded-md my-5 placeholder:text-white'  placeholder='EMAIL' />
                <textarea   className='bg-[#FFA6A3] p-4 border-none outline-none font-semibold rounded-md my-5 placeholder:text-white' placeholder='MESSAGE' cols="30" rows="5"></textarea>
            </form>
                <button className='bg-[#FEB82A] text-white cursor-pointer px-10 rounded-md py-1'>Submit</button>
            </div>
            <img src={png} className='mt-10' alt="" />
        </div>
        </div>
       </div>
    </div>
  )
}

export default Services
