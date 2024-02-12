import { stats } from '../constants'
import style from '../styles'
const Stats = () =>(

  <section className={`${style.flexCenter} flex-grow flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row mr-3`}>
            <h4 className='font-popins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-popins font-semibold xs:text-[20px] text-[15px] xs:leading-[20px] leading-[21px] text-gradient uppercase  ml-3'>{stat.title}</p>
        </div>
      ))}
  </section>
  )

export default Stats
