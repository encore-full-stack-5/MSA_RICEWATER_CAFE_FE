import styles from '/src/styles/cafepage.module.css'
import Image from "next/image";
import navergreenlogo from "@/assets/navergreenlogo.png";
import jongonara from "@/assets/jongonara.png";
import searchbut from "@/assets/searchbut.png";

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
                <div className={styles.cafe_search}>
                    <div>
                        {/* 원하는 내용 추가 */}
                    </div>
                </div>
                <form className={styles.searchtap}>
                    <input className={styles.cafe_searchBox}></input>
                    <button>
                        <Image className={styles.searchIcon} style={{width: "40px", height: "35px"}}
                               src={searchbut} alt={searchbut}/>
                    </button>
                </form>
            </div>
        </>
    )
}