import styles from "./Navbar.module.css"
import Link from "next/link"
import { links } from "./data"
import Button from '@/components/Button/Button'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
const Navbar = () => {
    return (
        <div className={styles.container_g}>
            <Link href="/" className={styles.logo}>HEXASHOP</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map(link =>
                    <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
                )}
                <Button />
            </div>
        </div>
    )
}
export default Navbar;