import React from 'react'
import Ecommerce from '../assets/projects/E-comerce.png';
import EventPlanning from '../assets/projects/EventPlanning.png'
import Form from '../assets/projects/Form.png'
import EcommerceMobile from '../assets/projects/E-commerce.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-80'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
        <p className='py-6 text-2xl'>// Check out some of my recent work</p>
      </div>

      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

{/* Grid item */}
        <div  style={{backgroundImage: `url(${Ecommerce})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>React and Firebase Application </span>
              <div className='p-8 text-center'>
                <a href="https://github.com/Wallex04/TeamWorkEcommerce/blob/main/README.md">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Wallex04/TeamWorkEcommerce">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
          </div>
        </div>

        <div  style={{backgroundImage: `url(${EventPlanning})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'> HTML, CSS and Javascript Application </span>
              <div className='p-8 text-center'>
                <a href="https://github.com/Wallex04/EVENTPLAN/blob/main/README.md">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Wallex04/EVENTPLAN">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
          </div>
        </div>

        <div  style={{backgroundImage: `url(${Form})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>CSS Application </span>
              <div className='p-8 text-center'>
                <a href="https://github.com/Wallex04/loruki/blob/main/README.md">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Wallex04/loruki">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
          </div>
        </div>

        <div  style={{backgroundImage: `url(${EcommerceMobile})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>React and Paystack Application </span>
              <div className='p-8 text-center'>
                <a href="https://github.com/Wallex04/ECOMMERCE/blob/main/README.md">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Wallex04/ECOMMERCE/tree/main/e-commerce">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Work
