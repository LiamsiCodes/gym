import React, { useEffect } from 'react'
import man from '../assets/back.jpg'
import wave from '../assets/waves.png'
import sparkle from '../assets/Sparkles.png'
import "aos/dist/aos.css"
import Aos from 'aos'

const Benefits = () => {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])
  return (
    <div id='benefits' className='bg-white w-full h-full px-12 pt-40'>
      <div  className='grid grid-cols-1 lg:grid-cols-2 '>
        <div  className='flex items-center justify-center'>
        <img data-aos="fade-up" src={man} className='rounded-xl w-[500px]' alt="" />
        </div>
       <div data-aos="fade-up" className='mt-5 md:mt-0'>
        <img src={wave} alt="" />
        <div className='md:ml-16  mt-5'>
        <h1 className='text-[#5E0000] font-bold text-3xl'>MILLIONS OF HAPPY MEMBERS <br /> GETTING <span className='text-[#FF6B66]'>FIT</span></h1>
        <p className='mt-4 text-[#5E0000] md:text-center font-semibold'>
        Find your nearest EVOGYM club and benefit from access 7 days a week, from 6 a.m. to 11 p.m.
        With your EVOGYM card, you have free access to all of our clubs, open from 6 a.m. to 11 p.m.* in USA, Spain and the French Overseas Territories.
        non-stop, 7 days a week, 365 days a year, to train, surpass yourself, and achieve your goals without constraints.
        </p>
        <div className='flex items-center justify-between'>
        <button className='bg-[#FEB82A] text-white mt-5 cursor-pointer px-5 capitalize rounded-md py-1'>Join Now</button>
        <img src={sparkle} className='mt-6' alt="" />
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Benefits
