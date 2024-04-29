import React from 'react'
import Experience from '../components/Experience'

const Work = () => {
  return (
    <div id='Work' className='flex flex-col gap-20 mb-10'>
      <div className='flex flex-col items-center gap-5'>
        <h2 className='text-secondary text-lg font-bold mx-auto'>WHAT I HAVE DONE SO FAR</h2>
        <h1 className='text-white text-4xl md:text-5xl lg:text-7xl font-bold mx-auto'>Work Experience.</h1>
      </div>
        <Experience/>
    </div>
  )
}

export default Work