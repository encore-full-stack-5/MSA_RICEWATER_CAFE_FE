"use client"
import styles from "@/styles/cafepage.module.css";
import Image from "next/image";
import document from "@/assets/document.svg";
import fire from "@/assets/fire.svg";
import Link from "next/link";
import {useEffect, useState} from "react";
import CafeInfo from "./cafeinfo"
import MyInfo from "./myinfo"
import axios from "/src/api/axiosInstance";

export default function side() {
    const [myInfo, setMyInfo] = useState(false);
    const [data, setData] = useState();

    const getData = async () => {
        try {
            const response = await axios.get("/cafes/1");
            setData(response.data);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className={styles.cafe_info}>
                <ul className={styles.info_action}>
                    <li className={styles.info_on}>
                        <button onClick={() => setMyInfo(false)} className={styles.infobutt}>카페정보</button>
                    </li>
                    <li className={styles.info_off}>
                        <button onClick={() => setMyInfo(true)} className={styles.infobutt}>나의정보</button>
                    </li>
                </ul>
                {
                    myInfo === false && data ? <CafeInfo data={data}/> : <MyInfo></MyInfo>
                }
                <div className={styles.cafe_info_data}>
                    <Link href={'/main/cafejoin'}>
                        <div className={styles.cafe_write}>
                            <button>
                                <a className={styles.cafe_joinbar}>카페 가입하기</a>
                            </button>
                        </div>
                    </Link>
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
                </div>
            </div>
        </>
    )
}