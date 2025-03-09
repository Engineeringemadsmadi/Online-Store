'use client'
import styles from './button.module.css'

const Butoon = () => {
    return (
        <button className={styles.logout} onClick={() => { console.log("logout") }}>
            Logout</button>
    )
}
export default Butoon;