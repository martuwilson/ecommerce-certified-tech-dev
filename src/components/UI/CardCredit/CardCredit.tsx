import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css'
import { useState } from 'react';
import { toast } from 'sonner';


export const CardCredit = () => {

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const {number, name, expiry, cvc} = cardData;

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e:React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: e.target.name
        })
    } 

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validar campos que no esten vacios

        if([number, name, expiry, cvc].includes('')){
            toast.error('All fields are required')
            return
        }

        //limpiar el estado
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: ''
        })
    }

  return (
    <div className={styles.container}>
        <div>
            {/* cards */}
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={
                    cardData.focus as 'number' | 'name' | 'expiry' | 'cvc'
                }
            />
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input type="text" name="number" id="number" value={number} onChange={handleInputChange} onFocus={handleInputFocus}/>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Owner Name</label>
                <input type="text" name="name" id="name" value={name} onChange={handleInputChange} onFocus={handleInputFocus}/>
            </div>

            {/* grupo */}
            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiracy</label>
                    <input type="text" name="expiry" id="expiry" value={expiry} onChange={handleInputChange} onFocus={handleInputFocus}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">CVV</label>
                    <input type="text" name="cvc" id="cvc" value={cvc} onChange={handleInputChange} onFocus={handleInputFocus}/>
                </div>
            </div>

            
                <button type='submit' className={styles.buyButton}>
                    Buy now
                </button>
            
        </form>
    </div>
  )
}
