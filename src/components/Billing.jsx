import React from 'react'
import { apple ,bill, google } from '../assets'
import styles, { layout} from '../styles'
const Billing =() =>(
  <section id='product' className={layout.sectionReverse}>   
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
    
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your 
      <br className='sm:hidden'/>billing & inoicing.</h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit dolorem nesciunt esse quia. Corporis, molestiae
        deleniti tempora illum, itaque, ea iste voluptates explicabo
        cum necessitatibus sed impedit ratione esse nam?
      </p>

      <div className='flex flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" 
        className='w-[127px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img src={google} alt="google_paly" 
        className='w-[127px] h-[42px] object-contain mr-5 cursor-pointer'
        />

      </div>

    </div> 
  </section>
)

export default Billing
