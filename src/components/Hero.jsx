import React, { useEffect } from 'react'
import Txt from '../assets/Text.png'
import Her from '../assets/Hero.png'
import Txt1 from '../assets/Text1.png'
import "aos/dist/aos.css"
import Aos from 'aos'


const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])

  return (
    <div id='Home' className='lg:pt-[7%] relative md:pt-[13%] pt-[28%] bg-[#F7F2E7]  w-full h-full px-12'>
        <div data-aos="fade-up" className='flex justify-between '>
          <div className='mt-[5%]'> 
              <img src={Txt} className='w-[470px]' alt="" />
              <img src={Txt1} className='w-[350px]' alt="" />
              <div>
                <p className='text-[#856B64] font-semibold mt-5'>Unrivaled Gym Unparalleled Training Fitness Classes. World Class Studios to get <br /> the Body Shapes That you Dream of. Get Your Dream Body Now.</p>
              </div>
          </div> 
          <img src={Her} className='lg:flex hidden w-[540px]' alt="" /> 
        </div>
    </div>
  )
}

export default Hero
