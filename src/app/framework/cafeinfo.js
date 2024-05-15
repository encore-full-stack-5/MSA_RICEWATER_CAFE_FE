import styles from "@/styles/cafepage.module.css";
import Image from "next/image";
import iconsmp from "@/assets/iconsmp.png";
import applesvg from "@/assets/applesvg.svg";
import people from "@/assets/people.svg";
import map from "@/assets/map.svg";
import top from "/src/assets/gear_738853.png"
import Link from "next/link";

export default function cafeinfo(props) {
    const {data} = props;
    const date = new Date(data?.createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;
    console.log(data);

    return (
        <>
            <div className={styles.cafeinfomain}>
                <ul className={styles.info_datas}>
                    <li>
                        <Image style={{width: "58px", height: "50px"}} src={iconsmp}
                               alt={iconsmp}/>
                    </li>
                    <li>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <a className={styles.info_nickname}>{data?.name}</a>
                            <button>
                                <a className={styles.info_manege}> 매니저</a>
                            </button>
                            <Link href={"/main/admin"}>
                                <div style={{width: "30px", height: "30px"}}>
                                    <button style={{maginBottom: "10px"}}>
                                        <Image src={top} alt={top} style={{width: "20px", height: "20px"}}
                                               className={styles.info_manege}/>
                                    </button>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.info_date}>
                            <a> {dateStr}개설</a>
                        </div>
                        <div className={styles.info_date}>
                            <a> 카페소개 </a>
                        </div>
                    </li>
                </ul>
                <br/>
                <ul className={styles.cafe_info2}>
                    <ul>
                        <li className={styles.info2_text}>
                            <Image style={{width: "18px", height: "17px"}} src={applesvg}
                                   alt={applesvg}/>
                            <a>열매 4단계</a>
                        </li>
                        <li className={styles.info2_text}>
                            <Image style={{width: "18px", height: "17px"}} src={people}
                                   alt={people}/>
                            <a>163,432</a>
                        </li>
                        <li className={styles.info2_text}>
                            <Image style={{width: "18px", height: "17px"}} src={map}
                                   alt={map}/>
                            <a>서울특별시 강남구</a>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    )
}
