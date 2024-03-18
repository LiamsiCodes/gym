import React, { useEffect } from 'react'
import { FaWarehouse } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import "aos/dist/aos.css"
import Aos from 'aos'


const About = () => {
    useEffect(()=>{
        Aos.init({duration:1700})
       },[])
  return (
    <div id='classes' className='bg-white w-full h-full px-12 pt-16'>
       <div data-aos="fade-up">
        <h1 className='uppercase font-bold text-3xl text-[#5E0000]'>more than just a gym.</h1>
        <p  className='font-semibold w-md mt-5 text-[#5E0000]'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease, <br /> We provide true care into each
        and every member.</p>
       </div>
       <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <div data-aos="fade-up" className='w-full shadow-xl mt-8 p-10 rounded-md border border-[#D7D5D7] h-full'>
            <div className='flex justify-center'>
            <div className='flex w-[70px] p-5 rounded-full bg-[#FFE1E0] justify-center'>
            <FaWarehouse className='text-[#5E0000]' size={25}/>
            </div>
            </div>
            <div className='mt-4 text-center'>
                <h1 className='font-bold text-[#5E0000]  text-lg'>State of the Art Facilities</h1>
                <p className='text-[#5E0000] mt-5 font-semibold '>At EVOGYM you will find many branches and you can go and train to the closest branch to you</p>
            </div>
        </div>

        <div data-aos="fade-up" className='w-full shadow-xl mt-8 p-10 rounded-md border border-[#D7D5D7] h-full'>
            <div className='flex justify-center'>
            <div className='flex w-[70px] p-5 rounded-full bg-[#FFE1E0] justify-center'>
            <FaPeopleGroup className='text-[#5E0000]' size={25}/>
            </div>
            </div>
            <div className='mt-4 text-center'>
                <h1 className='font-bold text-[#5E0000]  text-lg'>100's of Diverse Classes</h1>
                <p className='text-[#5E0000] mt-5 font-semibold '>At EVOGYM you will find several classes and you can choose any sport you like with only one subscription </p>
            </div>
        </div>

        <div data-aos="fade-up" className='w-full shadow-xl mt-8 p-10 rounded-md border border-[#D7D5D7] h-full'>
            <div className='flex justify-center'>
            <div className='flex w-[70px] p-5 rounded-full bg-[#FFE1E0] justify-center'>
            <FaGraduationCap className='text-[#5E0000]' size={25}/>
            </div>
            </div>
            <div className='mt-4 text-center'>
                <h1 className='font-bold text-[#5E0000]  text-lg'>Expert and Pro Trainers</h1>
                <p className='text-[#5E0000] mt-5 font-semibold '>At EVOGYM you will find the best expert coaches who will help you during your process and developing your dream shape </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About
