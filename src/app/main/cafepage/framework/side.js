import styles from "@/styles/cafepage.module.css";
import Image from "next/image";
import iconsmp from "@/assets/iconsmp.png";
import applesvg from "@/assets/applesvg.svg";
import people from "@/assets/people.svg";
import map from "@/assets/map.svg";
import document from "@/assets/document.svg";
import fire from "@/assets/fire.svg";

export default function side () {
    return (
        <>
            <div className={styles.cafe_info}>
                <ul className={styles.info_action}>
                    <li className={styles.info_on}>
                        <button className={styles.infobutt}>카페정보</button>
                    </li>
                    <li className={styles.info_off}>
                        <button className={styles.infobutt}>나의정보</button>
                    </li>
                </ul>
                <div className={styles.cafe_info_data}>
                    <ul className={styles.info_datas}>
                        <li>
                            <Image style={{width: "58px", height: "50px"}} src={iconsmp}
                                   alt={iconsmp}/>
                        </li>
                        <li>
                            <a className={styles.info_nickname}>중고나라마스터</a>
                            <button>
                                <a className={styles.info_manege}> 매니저</a>
                            </button>
                            <div className={styles.info_date}>
                                <a> 2014.10.23 개설</a>
                            </div>
                            <div className={styles.info_date}>
                                <a> 카페소개 </a>
                            </div>
                        </li>
                    </ul>
                    <br/>
                    <div className={styles.cafe_info2}>
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
                            <br/>
                            <div className={styles.cafe_write}>
                                <button>
                                    <a className={styles.cafe_joinbar}>카페 가입하기</a>
                                </button>
                            </div>
                            <br/>
                            <div className={styles.cafe_category}>
                                <ul className={styles.documentset}>
                                    <li className={styles.document}>
                                        <Image className={styles.documentimg}
                                               style={{width: "10px", height: "11px"}} src={document}/>
                                        <a>전체글보기</a>
                                    </li>
                                </ul>
                                <span className={styles.totalvew}>123,523</span>
                            </div>
                            <div>
                                <ul className={styles.documentset}>
                                    <li className={styles.document}>
                                        <Image className={styles.documentimg}
                                               style={{width: "10px", height: "11px"}} src={fire}/>
                                        <a>인기글보기</a>
                                    </li>
                                </ul>
                                <br/>
                                <hr className={styles.cafehr}/>
                                <br/>
                                <div>
                                    <ul className={styles.documentset}>
                                        <li className={styles.document}>
                                            <Image className={styles.documentimg}
                                                   style={{width: "10px", height: "11px"}} src={document}/>
                                            <a>자유게시판</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className={styles.documentset}>
                                        <li className={styles.document}>
                                            <Image className={styles.documentimg}
                                                   style={{width: "10px", height: "11px"}} src={document}/>
                                            <a>가입인사</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className={styles.documentset}>
                                        <li className={styles.document}>
                                            <Image className={styles.documentimg}
                                                   style={{width: "10px", height: "11px"}} src={document}/>
                                            <a>공지사항</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}