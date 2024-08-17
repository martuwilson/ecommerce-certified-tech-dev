import useCartContext from '../../../hook/useCartContext';
import { CartProduct } from '../../../interfaces';
import styles from './Table.module.css'

export const Table = () => {

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
    <>
    <table className={styles.modalTable}>
            <thead>
            <tr>
                <th>Image</th>
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
                                <img src={item.image} alt={item.name} className={styles.modalImage}/>
                            </td>
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
    </>
  )
}
