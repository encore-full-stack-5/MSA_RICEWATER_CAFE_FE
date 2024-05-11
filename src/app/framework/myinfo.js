import styles from "@/styles/cafepage.module.css";
import Link from "next/link";
import Image from "next/image";
import myinfos from "@/styles/myinfo.module.css"
import applesvg from "@/assets/applesvg.svg";
import people from "@/assets/people.svg";
import document from "@/assets/document.svg"
import profile from "@/assets/profile.png"


export default function myinfo(){
    return(
        <>
            <div className={myinfos.cafe_info}>
                <div className={myinfos.cafe_info_data}>
                    <table>
                      <tbody>
                        <ul className={styles.info_datas}>
                            <li>
                            <Image style={{width: "58px", height: "58px"}} src={profile}
                                   alt={profile}/>
                            </li>
                         <li style={{marginLeft: "8px"}}>
                            <a className={styles.info_nickname}>쌀뜬물</a>
                            <Link href={'/main/modifyProfile'}>
                            <button>
                                <a className={styles.info_manege}>수정</a>
                            </button>
                            </Link>
                            <div style={{marginTop: "7px"}} className={styles.info_date}>
                                <a> 2023.01.16 가입</a>
                            </div>
                         </li>
                    </ul>
                    </tbody>
                    </table>
                    <br/>
                    <div className={myinfos.cafe_info2}>
                        <ul>
                            <li className={styles.info2_text}>
                                <Image style={{width: "18px", height: "17px"}} src={applesvg}
                                       alt={applesvg}/>
                                <div>
                                    <a>열매 회원</a>
                                </div>
                                <div className={myinfos.text}>
                                    <a>등급 안내</a>
                                </div>
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
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}