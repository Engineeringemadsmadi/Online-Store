import Image from "next/image";
import styles from "./Footer.module.css"
import facebook from '@/public/images/icon-facebook.png'
import instgram from '@/public/images/icon-instgram.png'
import telegram from '@/public/images/icon-telegram.png'
import twiter from '@/public/images/icon-twiter.png'
import youtube from '@/public/images/icon-youtube.png'
const Footer = () => {

    return (
        <>
            <div className={styles.container}>
                <p>@2023 Hexashop. All rights reserved</p>
                <div className={styles.social}>
                    <Image
                        src={facebook}
                        width={20}
                        height={20}
                        className={styles.icon}
                        alt='Hexashop Facebook link'
                    />
                    <Image
                        src={instgram}
                        width={20}
                        height={20}
                        className={styles.icon}
                        alt='Hexashop Facebook link'
                    />
                    <Image
                        src={telegram}
                        width={20}
                        height={20}
                        className={styles.icon}
                        alt='Hexashop Facebook link'
                    />
                    <Image
                        src={twiter}
                        width={20}
                        height={20}
                        className={styles.icon}
                        alt='Hexashop Facebook link'
                    />
                    <Image
                        src={youtube}
                        width={20}
                        height={20}
                        className={styles.icon}
                        alt='Hexashop Facebook link'
                    />
                </div>
            </div>
        </>
    )
}
export default Footer;