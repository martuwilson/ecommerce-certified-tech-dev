import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { FC } from 'react';
import useCartContext from '../../../hook/useCartContext';
import { CartProduct } from '../../../interfaces';

interface Props {
    handleShowCartModal: () => void;
}

export const CartModal:FC<Props> = ({handleShowCartModal}) => {


    const { state:{cartItems}, dispatch } = useCartContext(); 
    
    const handleRemoveItem = (item: CartProduct) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item})
    }

    const handleAddItem = (item: CartProduct) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    const totalPay = () => {
        const total = cartItems.reduce((acumulador, item) => {
            return acumulador + item.price * item.quantity
        }, 0)

        return total
    }

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="close" />
        </button>
        <table className={styles.modalTable}>
            <thead>
            <tr>
                <th>Product</th>
                <th>Delete</th>
                <th>Quantity</th>
                <th>Add</th>
            </tr>
            </thead>
            <tbody>
                {
                    cartItems.map(item => (
                        <tr key={item.id}>
                    <td>
                        <p>
                            {item.name}
                        </p>
                    </td>
                    <td>
                        <button className={styles.modalButtonRemove}
                        onClick={
                            () => handleRemoveItem(item)
                        }
                        >
                            -1
                        </button>
                    </td>
                    <td>
                        <p>
                            {item.quantity}
                        </p>
                    </td>
                    <td>
                        <button className={styles.modalButtonAdd} onClick={
                            () => handleAddItem(item)
                        }>
                            +1
                        </button>
                    </td>
                </tr>
                    ))
                }
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>
                Total: {totalPay()}
            </h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>
                Checkout
            </button>
        </div>
    </div>
  )
}
