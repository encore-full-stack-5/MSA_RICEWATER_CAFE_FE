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
import fire from '/src/assets/fire.svg'
import mainbener from '/src/assets/mainbener.jpg'
import arrow from '/src/assets/arrow.svg'
import dot from '/src/assets/dot.svg'

export default function Cafepage() {
    return (
        <>
            <div className={styles.cafe_body_skin}>
                <div className={styles.cafe_search}>
                    <div>
                        {/* 원하는 내용 추가 */}
                    </div>
                </div>
                <form className={styles.searchtap}>
                    <input className={styles.cafe_searchBox}></input>
                    <button>
                        <Image className={styles.searchIcon} style={{ width: "40px", height: "35px" }}
                               src={searchbut} alt={searchbut}/>
                    </button>
                </form>
                <div className={styles.content_area}>
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
                                    <Image style={{ width: "58px", height: "50px" }} src={iconsmp}
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
                                        <Image style={{ width: "18px", height: "17px" }} src={applesvg}
                                               alt={applesvg}/>
                                        <a>열매 4단계</a>
                                    </li>
                                    <li className={styles.info2_text}>
                                        <Image style={{ width: "18px", height: "17px" }} src={people}
                                               alt={people}/>
                                        <a>163,432</a>
                                    </li>
                                    <li className={styles.info2_text}>
                                        <Image style={{ width: "18px", height: "17px" }} src={map}
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
                                                       style={{ width: "10px", height: "11px" }} src={document}/>
                                                <a>전체글보기</a>
                                            </li>
                                        </ul>
                                        <span className={styles.totalvew}>123,523</span>
                                    </div>
                                    <div>
                                        <ul className={styles.documentset}>
                                            <li className={styles.document}>
                                                <Image className={styles.documentimg}
                                                       style={{ width: "10px", height: "11px" }} src={fire}/>
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
                                                           style={{ width: "10px", height: "11px" }} src={document}/>
                                                    <a>자유게시판</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={styles.documentset}>
                                                <li className={styles.document}>
                                                    <Image className={styles.documentimg}
                                                           style={{ width: "10px", height: "11px" }} src={document}/>
                                                    <a>가입인사</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={styles.documentset}>
                                                <li className={styles.document}>
                                                    <Image className={styles.documentimg}
                                                           style={{ width: "10px", height: "11px" }} src={document}/>
                                                    <a>공지사항</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_area}>
                        <div className={styles.main_intro}>
                            <Image className={styles.mainbener} src={mainbener} alt={mainbener}/>
                        </div>
                        <div className={styles.layout_box}>
                            <div className={styles.cb}>
                                <div className={styles.cb_1}>
                                    <div className={styles.article_board}>
                                        <div className={styles.list_tit}>
                                            <h3>Q & A(질문과 답변)</h3>
                                            <button>
                                                <span className={styles.arrowf}>더보기 <Image src={arrow}
                                                                                           alt={arrow}/></span>
                                            </button>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>중고물품 거래시 필독!!!!</a>
                                                    <span> [27]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>공지 읽으세요 제발 </a>
                                                    <span>[127]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div>
                                            <div className={styles.td_article}>
                                                <Image style={{ width: "18px", height: "17px" }} src={dot}
                                                       alt={dot}/>
                                                <div className={styles.board_list_nomal} style={{ width: "100%" }}>
                                                    <a>오늘 날씨가 좋아서 쉬고싶은 날이네요 </a>
                                                    <span>[127]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cb2}>
                                <div className={styles.cb_1}>
                                    <div className={styles.article_board}>
                                        <div className={styles.list_tit}>
                                            <h3>자유게시판</h3>
                                            <button>
                                                <span className={styles.arrowf}>더보기 <Image src={arrow}
                                                                                           alt={arrow}/></span>
                                            </button>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>중고물품 거래시 필독!!!!</a>
                                                    <span> [27]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>공지 읽으세요 제발 </a>
                                                    <span>[127]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div>
                                            <div className={styles.td_article}>
                                                <Image style={{ width: "18px", height: "17px" }} src={dot}
                                                       alt={dot}/>
                                                <div className={styles.board_list_nomal} style={{ width: "100%" }}>
                                                    <a className={styles.aaa}>돈 벌어먹고 살기 어렵다 ! </a>
                                                    <span>[12237]</span>
                                                </div>
                                                <div className={styles.view}> 1,421</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
