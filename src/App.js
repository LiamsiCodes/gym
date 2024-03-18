import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  // bg-[#F7F2E7] 
  return (
    <div className='h-full w-full'>
      <Nav/>
      <Hero/>
      <About/>
      <Benefits/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App

