import common from '/src/styles/common.module.css'
import Image from "next/image";
import naverlogo from '/src/assets/naverlogo.png'
import searchImg from '/src/assets/searchImg.png'
import homelogo from '/src/assets/homelogo.png'
import morebutt from '/src/assets/morebutt.png'
import iconsmp from '/src/assets/iconsmp.png'
import starbutt from '/src/assets/starbutt.png'

export default function Cafemain (){
    return (
        <>
        <div className={common.mainheder}>
            <div className={common.logo}>
                <Image src={naverlogo} alt={"naverlogo"}/>
                <a className={common.cafelogo}>카페</a>
            </div>
            <div className={common.search}>
                <input type="text" placeholder="원하는 카페, 글을 찾아보세요" maxLength="255"/>
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
                            <div>
                                <Image src={homelogo} alt={"homelogo"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>카페홈</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton}>
                            <div>
                                <Image src={homelogo} alt={"homelogo"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>이웃</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton}>
                            <div>
                                <Image src={homelogo} alt={"homelogo"}/>
                            </div>
                            <br/>
                            <div className={common.boxClick}>
                                <a className={common.cafehome}>구독</a>
                            </div>
                        </button>
                        <br/>
                        <button className={common.homebutton}>
                            <div>
                                <Image src={homelogo} alt={"homelogo"}/>
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
                            <h3 className={common.popularPosts}>🔥내가 가입한 카페리스트</h3>

                            <a className={common.btn_more}>더보기</a>
                            <Image src={morebutt} alt={morebutt}></Image>
                        </div>
                        <div className={common.mycafe_item}>
                            <div className={common.mycafe_area}>
                                <div className={common.mycafe_icon}>
                                    <Image src={iconsmp} alt={iconsmp}/>
                                </div>
                                <div className={common.mycafe_info}>
                                    <a className={common.mycafe_name}>
                                        <strong>중고나라</strong>
                                    </a>
                                    <a className={common.mycafe_new}>새글 263,431</a>
                                </div>
                                <div className={common.option_button}>
                                    <button type={"button"} className={common.btn_bookmark}>
                                    <Image src={starbutt} alt={starbutt}></Image>
                                    </button>
                                </div>
                            </div>
                            <div className={common.mycafe_recent}>
                                <ul className={common.recent_list}>
                                    <li className={common.li}>
                                        <a>
                                            <div className={common.title}>
                                                <span className={common.word}>
                                                            무선충전 지원하는 보조배터리 NEXT-5007WPB 판매합니다.
                                                </span>
                                                <span className={common.name}>
                                                    닉네임짓기어려워
                                                </span>
                                                <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <div className={common.title}>
                                                <span className={common.word}>
                                                    (새제품)7500F 4070 SUPER 게임풀옵 게이밍 데스크탑 PC.
                                                </span>
                                                <span className={common.name}>
                                                    zzzzzz
                                                </span>
                                                <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <div className={common.title}>
                                                <span className={common.word}>
                                                   실바니안 아기인형 피규어 옷 드레스 소품 이에요 글자수 맞추..
                                                </span>
                                                <span className={common.name}>
                                                    문자주세요오
                                                </span>
                                                <span className={common.date}>
                                                    - 방금 전
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
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