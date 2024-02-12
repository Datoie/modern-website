import React from 'react'

const Button= ( { styles } ) =>(
  <div type='button' className={`py-4 px-6 bg-blue-gradient 
  font-medium text-[18px] text-primary outline-none
  ${styles}
  `}>
    Get Started      
  </div>
)

export default Button
