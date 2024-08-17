import { CardCredit } from "../../components/UI/CardCredit/CardCredit"
import { Table } from "../../components/UI/Table/Table"
import styles from './Checkout.module.css'

export const Checkout = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Checkout
        </h1>
        <div className={styles.grid}>
        <div className={styles.tableContainer}> 
            <Table />
        </div>
            <div>

        <CardCredit/>
            </div>
        </div>
            <div>
                <button className={styles.buyButton}>
                    Buy now
                </button>
            </div>
        
    </div>
  )
}
