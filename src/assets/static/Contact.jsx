import React, { useState } from 'react'
import ContactPic from '../images/contactme.png'

const Contact = () => {
  const [inputData, setInputData] = useState({
    name:"",
    email:"",
    message:""
  })
  const [error, setError] = useState({})
  const [isValidate, setIsValidate] = useState(false)
  const validation = (value)=>{
    let newErr= {};
    if(!value.name){
      newErr={...newErr,name:"No Name"}
    }
    if(!value.email){
      newErr={...newErr,email:"No Email"}
    }
    if(!value.message){
      newErr={...newErr,message:"No Message"}
    }
    return newErr;
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(validation(inputData));
    setIsValidate(true);
  }
  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    setInputData((pre)=>{
      return{
        ...pre,
        [name]:value
      };
    });
  };
  return (
    <form id='Contact' onSubmit={handleSubmit} className='sm:w-1/2 lg:w-1/3 flex flex-col text-white bg-[#1d1836] mx-auto rounded-lg py-6 px-8 gap-8 h-full'>
      <div className='flex flex-col gap-2'>
      <h2 className='text-secondary'>GET IN TOUCH</h2>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>Contact.</h1>
      </div>
      <div className='flex flex-col gap-7'>
      <div className='contactInput flex flex-col gap-2'>
        <label htmlFor="" className='font-semibold text-lg'>Your Name</label>
        <input type="text" name="name" value={inputData.name} onChange={handleChange} id="" placeholder="What's your good name?"/>
        <p className='text-sm text-red-500'>{error?.name}</p>
      </div>
      <div className='contactInput flex flex-col gap-2'>
        <label htmlFor="" className='font-semibold text-lg'>Your email</label>
        <input type="text" name="email" value={inputData.email} onChange={handleChange} id="" placeholder="What's your web address?"/>
        <p className='text-sm text-red-500'>{error?.email}</p>
      </div>
      <div className='contactInput flex flex-col gap-2'>
        <label htmlFor="" className='font-semibold text-lg'>Your Message</label>
        <textarea name="message" value={inputData.message} onChange={handleChange} id="" cols="20" rows="5" placeholder='What you want to say?' className='text-white py-4 rounded-lg px-3 bg-tertiary'></textarea>
        <p className='text-sm text-red-500'>{error?.message}</p>
      </div>
      <button type='submit' className='bg-blue-700 w-28 rounded-lg py-3 px-3 font-bold'>Send</button>
      </div>
    </form>
  )
}

export default Contact