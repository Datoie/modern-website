import React from 'react'
import { socialLinks } from '../constants'
function Contact() {
  return (
    <div className='flex justify-center items-center gap-[3rem]
     flex-wrap text-center sm:h-[50rem] h-full sm:p-[10rem] p-[5rem] bg-black text-white'>

      {socialLinks.map(item => (
        <div key={item.id} className=' hover:translate-y-[-1rem] hover:bg-[white]
         hover:text-[black] hover:rounded-md transition-all reenie-beanie text-[1em]'>
          <a   href={item.link} target='blank'>
            <img src={item.img}  alt={item.id} className=' w-[10rem] ' />
            <span target='_black'>{item.id}</span>
          </a>
        </div>
      ))}

    </div>
  )
}

export default Contact