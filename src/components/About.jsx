import React from 'react'
import AboutImg from '../assets/projects/WALLEXEDIT.jpg'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-96 pb-64 text-center'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 items-center px-4'>
                    <div>
                        <p className='text-left text-4xl font-bold'>Hi, I'm Wallex, nice to meet you. Please take alook around</p>
                        <p className='text-xl py-4 font-thin text-left'>As a software developer, I am passionate about creating innovative solutions that harmonize cutting-edge technology with user-centric design, crafting efficient and scalable code to address real-world challenges</p>
                    </div>
                    <div>
                        <img className='h-2/4 w-3/4 rounded-lg' src={AboutImg} alt="About-pcs" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About;
