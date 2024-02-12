import { useState } from 'react'

import {close, logo, menu } from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () =>{
    setToggle(!toggle)
  } 
    return(<div className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='hoobar' className='w-[124px]'/>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((nav,  index) => (
                <li key={nav.id}
                className={`font-poppinns
                            font-normal cursor-pointer text-[16px]
                            ${index == navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}
                >
                  <a href={`${nav.id}`}
                  className='w-[25px] h-[25px] object-contain'
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-start'>
                <img src={toggle ? close : menu} onClick={handleClick}/>
            </div>

                
            <div 
              className={`${toggle ? 'flex' : 'hidden'}
              p-6 bg-black-gradient absolute top-20 right-0 mx-4
              my-2 min-w-[140px] rounded-lg sidebar `}>

              <ul className='list-none flex justify-end
              items-center flex-1 flex-col
              
              '>
              {navLinks.map((nav,  index) => (
                <li key={nav.id}
                className={`font-poppinns
                            font-normal cursor-pointer text-[16px]
                            ${index == navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a href={`${nav.id}`}
                  className='w-[25px] h-[25px] object-contain'
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

      </div>
      
    </div>
  )}

export default Navbar