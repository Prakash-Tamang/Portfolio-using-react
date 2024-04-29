import React, { useState } from 'react'
import Card from '../components/Card'
import Frontend from '../images/mobile.png'
import Backend from '../images/backend.png'
import Developer from '../images/creator.png'
import Fullstack from '../images/web.png'

const About = () => {
  const skillList = [
    {
      title:"Frontend",
      work:"Developer",
      pic: Frontend
    },
    {
      title:"React.js",
      work:"Developer",
      pic: Developer
    },
    {
      title:"Backend",
      work:"Developer",
      pic: Backend
    },
    {
      title:"Full Stack",
      work:"Developer",
      pic: Fullstack
    }
  ]
  return (
    <div id='About' className="mx-[8%] flex flex-col text-white py-20">
      <h1 className='text-secondary sm:text-lg md:text-2xl  lg:text-3xl font-semibold mb-3 '>Introduction</h1>
      <h2 className="sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-5">OverView.</h2>
      <p className='max-w-[800px]sm:text-sm md:text-md lg:text-lg text-secondary mb-16'>
        I'm a skilled Full Stack software developer with experience in
        TypeScript and JavaScript, and expertise in frameworks like React,
        Node.js, MongoDB and Express.js. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </p>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          skillList.map((item,index)=>{
            return(
              <Card title={item?.title} pic={item?.pic} work={item?.work}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default About