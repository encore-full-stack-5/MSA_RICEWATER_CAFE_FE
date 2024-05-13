"use client"
import common from '/src/styles/common.module.css'
import Image from "next/image";
import naverlogo from '/src/assets/naverlogo.png'
import searchImg from '/src/assets/searchImg.png'
import morebutt from '/src/assets/morebutt.png'
import iconsmp from '/src/assets/iconsmp.png'
import starbutt from '/src/assets/starbutt.png'
import onhome from '/src/assets/onhome.png'
import {useState} from "react";
import Link from "next/link";
import razers from "/src/assets/cafelogo2.png"
import jangsa from "/src/assets/logo3.png"
import save from "/src/assets/save.svg"
import comment from "/src/assets/comment_heart.svg"
import hand from "/src/assets/hand.svg"
import home from "/src/assets/home.svg"

export default function Cafemain (){
    const[img, setImg] = useState(false);
    return (
        <>
        <div className={common.mainheder}>
            <div className={common.logo}>
                <Image src={naverlogo} alt={"naverlogo"}/>
                <a className={common.cafelogo}>카페</a>
            </div>
            <div className={common.search}>
                <input style={{width: "80%"}} type="text" placeholder="원하는 카페, 글을 찾아보세요" maxLength="255"/>
                <button type="submit" aria-label="검색" className="btn_search">
                    <Image src={searchImg} alt={"searchlogo"}/>
                </button>
            </div>
        </div>
            <br/>
            <hr className={common.tophr}/>
            <div className={common.mainpage}>
                <div className={common.cafeCategory}>
                    <div>
                        <button className={common.homebutton}>
                            <div style={{width: "40px", height: "40px"}}>
                                <Image src={home} alt={"home"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>카페홈</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton} onClick={() => setImg(!img)}>
                            <div style={{width: "40px", height: "40px"}}>
                                <Image style={{width: "100%", height: "100%"}} src={img == false ? hand : onhome}
                                       alt={''}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                            <a className={common.cafehome}>이웃</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton}>
                            <div style={{width: "40px", height: "40px"}}>
                                <Image style={{width: "40px", height: "40px"}} src={save} alt={"save"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>구독</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton}>
                            <div style={{width: "40px", height: "40px"}}>
                                <Image src={comment} alt={"comment"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>인기글</a>
                            </div>
                        </button>
                        <br/>
                        <hr className={common.cafeCategoryhr}/>
                        <br/>
                        <div className={common.sub_menu}>
                            <a href={"naver.com"} className={common.btn_sub}>주제별 카페</a>
                            <a href={"naver.com"} className={common.btn_sub}>지역별 카페</a>
                            <a href={"naver.com"} className={common.btn_sub}>인기 팬카페</a>
                            <a href={"naver.com"} className={common.btn_sub}>대표 카페</a>
                            <a href={"naver.com"} className={common.btn_sub}>카페 랭킹</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={common.cafehomepage}>
                        <a className={common.hometitle}>카페홈</a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className={common.board_head}>
                            <h3 className={common.popularPosts}>🔥&nbsp;내가 가입한 카페리스트</h3>
                            <a className={common.btn_more}>더보기</a>
                            <Image src={morebutt} alt={morebutt}></Image>
                        </div>
                        <div>
                            <div className={common.mycafe_item2}>
                                <div className={common.mycafe_area}>
                                    <div className={common.mycafe_icon}>
                                        <Image src={iconsmp} alt={iconsmp}/>
                                    </div>
                                    <Link href={'/main/cafepage'}>
                                        <div className={common.mycafe_info}>
                                            <a className={common.mycafe_name}>
                                                <h1>중고나라</h1>
                                            </a>
                                            <a className={common.mycafe_new}>새글 263,431</a>
                                        </div>
                                    </Link>
                                    <div className={common.option_button}>
                                        <button type={"button"} className={common.btn_bookmark}>
                                            <Image src={starbutt} alt={starbutt}></Image>
                                        </button>
                                    </div>
                                </div>
                                <div className={common.mycafe_recent}>
                                    <ul className={common.recent_list}>
                                        <li className={common.li}>
                                            <div>
                                                <div className={common.title}>
                                                <span className={common.word}>
                                                            무선충전 지원하는 보조배터리 NEXT-5007WPB 판매합니다.
                                                </span>
                                                    <div>
                                                <span className={common.name}>
                                                    닉네임짓기어려워
                                                </span>
                                                        <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={common.mycafe_item2}>
                                    <div className={common.mycafe_area}>
                                        <div className={common.mycafe_icon}>
                                            <Image src={razers} alt={razers}/>
                                        </div>
                                        <Link href={'/main/cafepage'}>
                                            <div className={common.mycafe_info}>
                                                <a className={common.mycafe_name}>
                                                    <h1>RAZER Offical Cafe</h1>
                                                </a>
                                                <a className={common.mycafe_new}>새글 263,431</a>
                                            </div>
                                        </Link>
                                        <div className={common.option_button}>
                                            <button type={"button"} className={common.btn_bookmark}>
                                                <Image src={starbutt} alt={starbutt}></Image>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={common.mycafe_recent}>
                                        <ul className={common.recent_list}>
                                            <li className={common.li}>
                                                <div>
                                                    <div className={common.title}>
                                                <span className={common.word}>
                                                            사용하지 않은 레이저 마우스 싸게 팝니다.
                                                </span>
                                                        <div>
                                                <span className={common.name}>
                                                    RAZER MASTER
                                                </span>
                                                            <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={common.mycafe_item}>
                                        <div className={common.mycafe_area}>
                                            <div className={common.mycafe_icon}>
                                                <Image src={jangsa} alt={jangsa}/>
                                            </div>
                                            <Link href={'/main/cafepage'}>
                                                <div className={common.mycafe_info}>
                                                    <a className={common.mycafe_name}>
                                                        <h1>장사의 신 [월 매출 1억 만들기]</h1>
                                                    </a>
                                                    <a className={common.mycafe_new}>새글 263,431</a>
                                                </div>
                                            </Link>
                                            <div className={common.option_button}>
                                                <button type={"button"} className={common.btn_bookmark}>
                                                    <Image src={starbutt} alt={starbutt}></Image>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={common.mycafe_recent}>
                                            <ul className={common.recent_list}>
                                                <li className={common.li}>
                                                    <div>
                                                        <div className={common.title}>
                                                <span className={common.word}>
                                                            돈 버는게 어려워? 내가 알려줄게 [3021]
                                                </span>
                                                            <div>
                                                <span className={common.name}>
                                                    장사의 신
                                                </span>
                                                                <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={common.cafeloginpage}>
                        <div className={common.login_inner}>
                            <div className={common.login_area}>
                                <div className={common.login_box}></div>
                                <div className={common.but_link_login}>
                                    <h1 className={common.naver}>NAVER</h1>
                                    <a>&nbsp;&nbsp;로그인</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}