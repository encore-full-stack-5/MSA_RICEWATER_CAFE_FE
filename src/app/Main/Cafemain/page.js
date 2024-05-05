import common from '/src/styles/common.module.css'
import Image from "next/image";
import naverlogo from '/src/assets/naverlogo.png'
import searchImg from '/src/assets/searchImg.png'
import homelogo from '/src/assets/homelogo.png'

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
            <hr/>
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
                        <hr className={common.cafeCategoryhr}/>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={common.cafehomepage}>
                        <a>카페홈</a>
                    </div>
                </div>
                <div>
                    <div className={common.cafeloginpage}>
                        <a>로그인페이지</a>
                     </div>
                </div>
            </div>
        </>
    )
}