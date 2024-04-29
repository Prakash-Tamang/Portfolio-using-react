import React from 'react'

const TestiCard = ({desc="",pic="",job="",userName=""}) => {
  return (
    <div className='flex flex-col gap-5 bg-blue-950 py-5 px-6 rounded-lg'>
        <h1 className='text-7xl font-bold'>"</h1>
        <p className='text-2xl'>{desc}</p>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row gap-2'>
            <h1 className='text-blue-500'>@</h1>
            <h2 className='font-semibold'>{userName}</h2>
          </div>
        <h2 className='text-secondary'>{job}</h2>
        </div>
        <img src={pic} alt="" className='rounded-full h-14'/>
        </div>
    </div>
  )
}

export default TestiCard