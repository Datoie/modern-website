import style from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = ()=> (

  <section id='home' className={`flex md:flex-row flex-col ${style.paddingY}`}>
    <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className='w-[32px] h-4[32px]' />
        <p className={`${style.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Dicount For {" "}
          <span className='text-white'>1 month</span> Account
        </p>

      </div>
        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]' >
              The next <br className='sm:block hidden' />
              <span
               className='text-gradient'>Generation</span>{' '}
            </h1>
            <div className='ss:flex hidden mb:mr-4 mr-0'>
              <GetStarted/>
            </div>
        </div>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method.</h1>
            <p className={`${style.paragraph} max-w-[450px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, autem enim reiciendis modi doloribus totam sunt dignissimos asperiores minus error sapiente esse vitae assumenda hic quae, iure et fugit tenetur!</p>
      </div>

      <div className={`flex-1 flex ${style.flexCenter} mb:my-0 relative`}>
          <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
          
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
          <div className='absolute z-[1] w-[80%] h-[80%] top rounded-full white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 top-0 blue__gradient'/>
      </div>

      <div>
        <div className={`ss:hidden ${style.flexCenter}`}>
          <GetStarted/>
        </div>
      </div>
  </section>

  )

export default Hero
