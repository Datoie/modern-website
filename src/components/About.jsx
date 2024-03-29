import React from 'react'
import { aboutText } from '../constants'

function About() {
  
  return (
    <div className=' bg-white w-full reenie-beanie text-black flex p-[2rem] justify-center'>
      <div className='relative'>
        <div className='w-[5px] h-full mr-6 bg--primary rounded-sm' />
        <div className='w-[2rem] h-[2rem] absolute bg-pink-400 rounded-sm top-0 left-[-.8rem]' />
      </div>
      <div className='flex xl:flex-row flex-col gap-5 sm:h-[100%] max-w-[85rem]'>
        {aboutText.map((item, index) => (
          <p key={index} className={`${item.lang} ${item.color} ${index == 0 ? 'text-[2em]' : 'text-[1.6em]'}`}>{item.content}</p>
        ))}
      </div>
    </div>
  )
}

export default About