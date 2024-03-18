import React from 'react'
import logo from '../assets/Logo.png'


const Footer = () => {
  return (
    <div className='bg-[#FFE1E0] mt-16 h-full w-full'>
      <div className='p-12 lg:flex  justify-between'>
        <div className=''>
          <div>
            <img src={logo} alt="" />
          </div>
          <p className='mt-4 text-[#5E0000] font-semibold'><span className='text-[#FF6B66]'>EVOGYM</span> is a modern gym with the latest machines and technologies that will help you <br /> build your dream body with the help of our our coaches  At EVOGYM you will find the best <br />atmosphere  to make a body transformation so dont't hesitate to join <span className='text-[#FF6B66]'>EVOGYM!</span></p>
        </div>
        <div className='md:mt-0 mt-6'>
          <h1 className='text-[#5E0000] font-bold'>Contact Us</h1>
          <h2 className='text-[#5E0000] mt-4 font-semibold'>Evogym@gmail.com</h2>
          <h1 className='text-[#5E0000] font-semibold'>(333)425-6825</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
