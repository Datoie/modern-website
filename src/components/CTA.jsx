import styles from "../styles"
import Button from "./Button"

const CTA =() =>(
  <section className={`${styles.flexCenter} ${styles.marginX} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Lets Try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aliquam exercitationem, quibusdam iure voluptates officia
        alias ad dignissimos in molestias reprehenderit? Excepturi
        eveniet ducimus totam veritatis et suscipit doloribus ullam eius.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA
