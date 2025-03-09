import Image from "next/image";
import styles from "./page.module.css";
import hero from "@/public/images/hero.svg";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hexashop -Home",
  description: "discover a world of endless shoping possibilities at our online store. Browser , choose , and order your favorite products from the comfort of your home .",
};

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.col}>
        <h1 className={styles.title}>your one-stop e-commerce destination!</h1>
        <p className={styles.description}>Discover a world of endless shopping  possibliities at our online store.</p>
        <button className={styles.button}>Show Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={hero} alt="Hexa Shop" />
      </div>

    </div>
  );
}
export default Home;