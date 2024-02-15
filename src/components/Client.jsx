
import { clients } from "../constants"
import styles from "../styles"

const Client = () =>(
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(client =>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]`}>
          <img src={client.logo} alt='client' className="sm:w-[192px] w-[100px] object-contain"/>
        </div>
      ))}
    </div>

  </section>
)

export default Client
