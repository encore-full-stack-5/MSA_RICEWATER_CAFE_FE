import styles from "@/styles/cafepage.module.css";
import Link from "next/link";
import Image from "next/image";
import iconsmp from "@/assets/iconsmp.png";
import applesvg from "@/assets/applesvg.svg";
import people from "@/assets/people.svg";
import map from "@/assets/map.svg";

export default function cafeinfo() {
    return (
        <>
            {/*<div>*/}
            {/*    <div className={styles.cafe_info_data}>*/}
            {/*        <ul className={styles.info_datas}>*/}
            {/*            <li>*/}
            {/*                <Image style={{width: "58px", height: "50px"}} src={iconsmp}*/}
            {/*                       alt={iconsmp}/>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a className={styles.info_nickname}>중고나라마스터</a>*/}
            {/*                <button>*/}
            {/*                    <a className={styles.info_manege}> 매니저</a>*/}
            {/*                </button>*/}
            {/*                <div className={styles.info_date}>*/}
            {/*                    <a> 2014.10.23 개설</a>*/}
            {/*                </div>*/}
            {/*                <div className={styles.info_date}>*/}
            {/*                    <a> 카페소개 </a>*/}
            {/*                </div>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*        <br/>*/}
            {/*        <div className={styles.cafe_info2}>*/}
            {/*            <table>*/}
            {/*                <tbody>*/}
            {/*                <ul>*/}
            {/*                    <li className={styles.info2_text}>*/}
            {/*                        <Image style={{width: "18px", height: "17px"}} src={applesvg}*/}
            {/*                               alt={applesvg}/>*/}
            {/*                        <a>열매 4단계</a>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.info2_text}>*/}
            {/*                        <Image style={{width: "18px", height: "17px"}} src={people}*/}
            {/*                               alt={people}/>*/}
            {/*                        <a>163,432</a>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.info2_text}>*/}
            {/*                        <Image style={{width: "18px", height: "17px"}} src={map}*/}
            {/*                               alt={map}/>*/}
            {/*                        <a>서울특별시 강남구</a>*/}
            {/*                    </li>*/}
            {/*                    <br/>*/}
            {/*                    <       Link href={'/main/cafejoin'}>*/}
            {/*                        <div className={styles.cafe_write}>*/}
            {/*                            <button>*/}
            {/*                                <a className={styles.cafe_joinbar}>카페 가입하기</a>*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                    </Link>*/}
            {/*                </ul>*/}
            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </>
            )
            }
