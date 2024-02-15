import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () =>(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
      in few steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur at possimus tempore dignissimos voluptatum
        repellendus, quas architecto, cupiditate accusantium ad
        esse iste nihil ratione molestiae nesciunt quam corporis
        aperiam excepturi.</p>
        <Button  styles='mt-10'/>
    </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-full h-full ' />

      </div>
  </section>
)

export default CardDeal
