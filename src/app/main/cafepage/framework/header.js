import styles from '/src/styles/cafepage.module.css'
import Image from "next/image";
import navergreenlogo from "@/assets/navergreenlogo.png";
import jongonara from "@/assets/jongonara.png";

export default function Header () {
    return (
        <>
            <div className={styles.cafelay}>
                <div className={styles.naver_logo}>
                    <Image src={navergreenlogo} alt={navergreenlogo}/>
                </div>
                <div className={styles.cafe_bener}>
                    <Image src={jongonara} alt={jongonara}/>
                </div>
            </div>
        </>
    )
}