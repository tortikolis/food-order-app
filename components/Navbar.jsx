import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

const Navbar = () => {
    return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src='/img/telephone.png' alt='call' width='32' height='32'/>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>ORDER NOW!</div>
                <div className={styles.text}>064857584</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Home</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <li className={styles.listItem}><Image src='/img/logo.png' alt='logo' width='160px' height='69px' className={styles.logo}/></li>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>About</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <Image src="/img/cart.png" alt="cart" width='36' height='36'/>
            <div className={styles.counter}>0</div>
        </div>
    </div>
    );
}
 
export default Navbar;