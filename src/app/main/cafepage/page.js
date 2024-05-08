import styles from '/src/styles/cafepage.module.css'
import Image from "next/image";
import navergreenlogo from "/src/assets/navergreenlogo.png";
import jongonara from "/src/assets/jongonara.png";
import searchbut from "/src/assets/searchbut.png";
import iconsmp from '/src/assets/iconsmp.png'
import applesvg from '/src/assets/applesvg.svg'
import map from '/src/assets/map.svg'
import people from '/src/assets/people.svg'
import document from '/src/assets/document.svg'

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
                    <Image className={styles.searchIcon} style={{width: "40px", height: "35px"}} src={searchbut} alt={searchbut}/>
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
                            <div className={styles.cafe_info_data}>
                                <ul className={styles.info_datas}>
                                    <li>
                                        <Image style={{width: "58px", height: "50px"}} src={iconsmp} alt={iconsmp}/>
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
                                                   alt={applesvg}/>
                                            <a>163,432</a>
                                        </li>
                                        <li className={styles.info2_text}>
                                            <Image style={{width: "18px", height: "17px"}} src={map}
                                                   alt={applesvg}/>
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
                                            <div className={styles.documentset}>
                                                <Image className={styles.document}
                                                       style={{width: "10px", height: "11px"}} src={document}/>
                                                <a>전체글보기</a>
                                            </div>
                                            <span className={styles.totalvew}>123,523</span>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={styles.main_area}>

                    </div>
                </div>

            </div>

        </>

    )
}