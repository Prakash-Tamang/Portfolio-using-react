import React from 'react'
import Me from '../images/me.jpg'

const Section1 = () => {
  return (
    <div className='mx-[8%] flex flex-col justify-between md:flex-row items-center py-20 text-white gap-20'>
      <div className='flex flex-col gap-4'>
      <h1 className='text-6xl lg:text-8xl font-bold'>Hi,I'm <span className='text-purple-500'>Prakash</span></h1>
      <h2 className='text-3xl lg:text-4xl font-semibold'>I Develop Attractive, user <br></br> interfaces and web applications</h2>
      </div>
      <div>
        <img src={Me} alt="" className='max-h-[400px] w-full rounded-full'/>
      </div>
    </div>
  )
}

export default Section1