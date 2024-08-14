import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from './CartModal';

export const Navbar = () => {

    const [showCartModal, setShowCartModal] = useState(false)


    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    return(
        <div className={styles.navbarContainer}>
           <div className={styles.navbarDetail}>
                <img src={Logo} alt="Logo del Ecommerce" width={50} height={50}/>
                <div>
                    <span>
                        DH Ecommerce
                    </span>
                </div>
           </div>

           <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>2</p>
                <img src={Cart} alt="cart" onClick={handleShowCartModal}/>
           </div>
           {
            showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)
           }
        </div>
    )
}