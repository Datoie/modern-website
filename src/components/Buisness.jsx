import { features } from '../constants'
import style, { layout } from '../styles'
import Button from './Button'

const FeatureCard = ( {icon, title, content,
   index} ) => (
  <div className={`flex felx-row p-6 rounded-[20px] ${index !== features.length -1} ? 'mb-6': 'mb-0' feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-pipins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-semibold text-dimWhite leading-[20px] '> 
          {content}
        </p>
      </div>
  </div>
   )
const Buisness = () =>(
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>You do the buisness, <br className='sm:blcok hidden'/> we'll
      handle the money.</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5 `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Voluptatibus possimus quod ipsa rem officia autem, odit 
         sapiente delectus quibusdam cum hic minima quidem 
         blanditiis enim sint doloremque neque ab similique!</p>
    <Button styles='mt-10'/>
    </div>

    <div className={`${layout.sectionImg}  flex flex-col`}>
      {features.map( (feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index}/>
      ) )}
    </div>
  </section>
)

export default Buisness
