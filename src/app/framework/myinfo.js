import styles from "@/styles/cafepage.module.css";
import Image from "next/image";
import myinfos from "@/styles/myinfo.module.css"
import applesvg from "@/assets/applesvg.svg";
import people from "@/assets/people.svg";
import document from "@/assets/document.svg"
import profile from "@/assets/profile.png"
import {useState} from "react";
import ModifyProfile from "@/app/main/modifyProfile/page";
import Link from "next/link";
import one from "/src/assets/1_120.jpg"


export default function myinfo() {
    const [showModal, setShowModal] = useState(false);
    const clickModal = () => setShowModal(!showModal);
    return (
        <>
            <div className={myinfos.cafe_info}>
                <div className={myinfos.cafe_info_data}>
                    <ul className={styles.info_datas}>
                        <li>
                            <Image style={{width: "58px", height: "58px"}} src={profile}
                                   alt={profile}/>
                        </li>
                        <li style={{marginLeft: "8px"}}>
                            <a className={styles.info_nickname}>쌀뜬물</a>
                                <button onClick={clickModal}>
                                    <a className={styles.info_manege}>수정</a>
                                </button>

                            <div style={{marginTop: "7px"}} className={styles.info_date}>
                                <a> 2023.01.16 가입</a>
                            </div>
                        </li>
                    </ul>
                    <br/>
                    <div className={myinfos.cafe_info2}>
                        <ul>
                            <li className={styles.info2_text}>
                                <Image style={{width: "18px", height: "17px"}} src={one}
                                       alt={one}/>
                                <div>
                                    <a>성실 맴버</a>
                                </div>
                                <Link href={"/main/admin"}>
                                <div className={myinfos.text}>
                                    <a>등급 안내</a>
                                </div>
                                </Link>

                            </li>
                            <li className={styles.info2_text}>
                                <Image style={{width: "18px", height: "17px"}} src={people}
                                       alt={people}/>
                                <div>
                                    <a>방문</a>
                                </div>
                                <div className={myinfos.text2}>
                                    <a>2회</a>
                                </div>
                            </li>
                            <li className={styles.info2_text}>
                                <Image style={{width: "18px", height: "17px"}} src={document}
                                       alt={document}/>
                                <div>
                                    <a>내가 쓴 게시글</a>
                                </div>
                                <div className={myinfos.text3}>
                                    <a>0회</a>
                                </div>
                            </li>
                            <li className={styles.info2_text}>
                                <Image style={{width: "18px", height: "17px"}} src={document}
                                       alt={document}/>
                                <div>
                                    <a>내가 쓴 댓글</a>
                                </div>
                                <div className={myinfos.text4}>
                                    <a>0회</a>
                                </div>
                            </li>
                            <br/>
                            <Link href={'/main/board'}>
                                <div className={styles.cafe_write}>
                                    <button>
                                        <a className={myinfos.cafe_bar}>카페 글쓰기</a>
                                    </button>
                                </div>
                            </Link>
                            <br/>
                        </ul>
                    </div>
                </div>
            </div>
            {
                showModal && <ModifyProfile clickModal={clickModal}/>
            }
        </>
    )
}