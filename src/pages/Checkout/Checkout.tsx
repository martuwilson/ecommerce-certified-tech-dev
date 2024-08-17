import { Table } from "../../components/UI/Table/Table"
import styles from './Checkout.module.css'

export const Checkout = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Checkout
        </h1>
        <div className={styles.grid}>
            <div>
                <Table />
            </div>
            {/* form pay */}
            <div>
                
            </div>
        </div>
    </div>
  )
}
