import styles from "@/styles/cafepage.module.css";
import Image from "next/image";
import searchbut from "@/assets/searchbut.png";

export default function search() {
    return (
        <><div className={styles.cafelay}>
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