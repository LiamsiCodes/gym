import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Nav = () => {
  const [nav,setNav]=useState(false)
 
  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className='py-8 fixed z-10 top-0 right-0 px-12 bg-[#FFE1E0] h-ful w-full'>
        <div className='flex justify-between'>

      <div className='flex gap-12  items-center'>
        <img src={logo} className='w-[px]' alt="" />
        <div className='lg:flex  hidden'>
            <Link to='Home' spy={true} smooth={true} offset={-30} duration={500} className='px-5 cursor-pointer uppercase font-semibold'>Home</Link>
            <Link to='benefits' spy={true} smooth={true} offset={-30} duration={500} className='px-5 cursor-pointer uppercase font-semibold'>Benefits</Link>
            <Link to='classes' spy={true} smooth={true} offset={-60} duration={500} className='px-5 cursor-pointer uppercase font-semibold'>Our classes</Link>
            <Link to='contact' spy={true} smooth={true} offset={-30} duration={500} className='px-5 cursor-pointer uppercase font-semibold'>Contact us</Link>
        </div>
      </div>

      <div className='md:flex hidden md:mr-5 gap-4 items-center'>
        <p className='cursor-pointer uppercase font-semibold'>Sign in</p>
        <button className='bg-[#FEB82A] text-white cursor-pointer px-5 rounded-md py-1'>Become a seller</button>
      </div>
      

      <div onClick={handleNav} className='lg:hidden absolute right-4 flex'>
        <AiOutlineMenu onClick={handleNav} className='cursor-pointer' size={30}/>
     </div>

     <div className={nav ? 'bg-[#FEB82A] z-[100] flex lg:hidden fixed ease-out duration-700 top-0 left-0 w-[300px] h-screen':'left-[-140%]   z-[100]  ease-in duration-700 bg-gray-200 fixed top-0  w-[350px] h-screen'}>
        <div className='py-10'>
         <div className='p-3 absolute right-6  max-w-[50px] flex items-center rounded-full shadow-xl cursor-pointer '>
         <AiOutlineClose onClick={handleNav} className='text-white' size={30}/>
         </div>
         <ul className='mt-24 flex flex-col'>
            <Link to='Home' spy={true} smooth={true} offset={-30} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg text-white cursor-pointer'>Home</Link>
            <Link to='benefits' spy={true} smooth={true} offset={-30} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg text-white cursor-pointer'>Services</Link>
            <Link to='classes' spy={true} smooth={true} offset={-60} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg text-white cursor-pointer'>Benefits</Link>
            <Link to='contact' spy={true} smooth={true} offset={-30} duration={500}  onClick={handleNav}  className='py-5 px-28 text-lg text-white cursor-pointer'>Contact us</Link>
        </ul>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Nav
