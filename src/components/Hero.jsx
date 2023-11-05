import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-pink-600 text-2xl'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Okunlola Akinwale</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>Passionate about refining user experiences through the artful integration of React, HTML, CSS, and JavaScript, dedicated to crafting optimal web solutions and building highly responsive websites</p>
        <div>
          <a href="https://github.com/Wallex04">
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
