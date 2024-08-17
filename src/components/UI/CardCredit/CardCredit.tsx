import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css'


export const CardCredit = () => {
  return (
    <div className={styles.container}>
        <div>
            {/* cards */}
            <Cards
                number={'1234 5678 1234 5678'}
                name={'Card Owner Name'}
                expiry={'12/34'}
                cvc={'123'}
                focused={''}
            />
        </div>
        <form>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input type="text" name="number" id="number"/>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Owner Name</label>
                <input type="text" name="name" id="name"/>
            </div>

            {/* grupo */}
            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiracy</label>
                    <input type="text" name="expiry" id="expiry"/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">CVV</label>
                    <input type="text" name="cvc" id="cvc"/>
                </div>
            </div>
        </form>
    </div>
  )
}
