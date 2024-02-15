import React from 'react'

const Button= ( { styles } ) =>(
  <div type='button' className={`cursor-pointer py-4 px-6 bg-blue-gradient 
  font-medium text-[18px] text-primary outline-none rounded-[10px] overflow-hidden
  ${styles}
  `}>
    Get Started      
  </div>
)

export default Button
