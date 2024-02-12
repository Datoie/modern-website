import styles from './styles'
import { Navbar, Stats, Buisness, Billing, CardDeal, Testemonial, Client, CTA, Footer, Hero } from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`bg-pirmary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Buisness />
        <Billing />
        <CardDeal />
        <Testemonial />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default App