import styles from '/src/styles/cafepage.module.css'
import Image from "next/image";
import navergreenlogo from "/src/assets/navergreenlogo.png";
import jongonara from "/src/assets/jongonara.png";
import searchbut from "/src/assets/searchbut.png";

export default function Cafepage () {
    return(
        <>
            <div className={styles.cafe_body_skin}>
                <div className={styles.cafelay}>
                        <div className={styles.naver_logo}>
                            <Image src={navergreenlogo} alt={navergreenlogo}/>
                        </div>
                        <div className={styles.cafe_bener}>
                            <Image src={jongonara} alt={jongonara}/>
                        </div>
                </div>
                <div className={styles.cafe_search}>
                    <div>

                    </div>

                </div>
                <form className={styles.searchtap}>
                    <input className={styles.cafe_searchBox}></input>
                    <button>
                    <Image className={styles.searchIcon} style={{width: "56px", height: "35px"}} src={searchbut} alt={searchbut}/>
                    </button>
                </form>
                <div className={styles.content_area}>
                    <div className={styles.group_area}>
                        <div className={styles.cafe_info}>
                            <ul className={styles.info_action}>
                                <li className={styles.info_on}>
                                    <button className={styles.infobutt}>카페정보</button>
                                </li>
                                <li className={styles.info_off}>
                                    <button className={styles.infobutt}>나의정보</button>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles.main_area}>

                    </div>
                </div>

            </div>

        </>

    )
}