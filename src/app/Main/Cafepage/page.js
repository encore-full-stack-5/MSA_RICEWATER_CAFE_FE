import common from '/src/styles/common.cafepage.css'
import Image from "next/image";
import navergreenlogo from "/src/assets/navergreenlogo.png";
import jongonara from "/src/assets/jongonara.png";

export default function Cafepage () {
    return(
        <>
            <div className={common.cafe_body_skin}>
            <div className={common.naver_logo}>
                <Image src={navergreenlogo} alt={navergreenlogo}/>
            </div>
            <div className={common.cafe_bener}>
                <Image src={jongonara} alt={jongonara}/>
            </div>

        </div>

        </>

    )
}