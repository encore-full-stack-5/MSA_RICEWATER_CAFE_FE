import admins from "/src/styles/admin.module.css"
import rating from "/src/assets/rating.png"
import Image from "next/image";
import baby from "/src/assets/one.png"
import boards from "@/styles/board.module.css";
import one from "/src/assets/1_110.jpg"
import two from "/src/assets/1_120.jpg"
import the from "/src/assets/1_130.jpg"
import fo from "/src/assets/1_140.jpg"
import fiv from "/src/assets/1_150.jpg"

export default function admin() {
    return (
        <>
            <div className={admins.section_top}>
                <div className={admins.h_cont}>
                    <a>
                        맴버 등급 관리
                    </a>
                </div>
                <div style={{fontSize: "12px"}} className={admins.infobox}>
                    <p>&nbsp;이 메뉴는 <span className={admins.fontCol}>등급 사용 카페</span>에서 사용하는 메뉴입니다.<br/>
                        &nbsp;체크 후 설정을 완료하시면 등급 사용 카페로 변경됩니다.</p>
                    <br/>
                    <ul>
                        <li className={admins.list}>
                            <a>등급 사용 카페로 변경하시면 등급을 사용하지 않는 카페로 변경이 불가능합니다.</a>
                        </li>
                        <li className={admins.list}>
                            <a>등급 사용 카페에서는 내용이 일부 공개되는 블로그형, 카드형 게시판을 사용하실 수 없습니다.</a>
                        </li>
                    </ul>
                </div>
                <div className={admins.rating}>
                    <Image style={{width: "205px", height: "30px"}} src={rating} alt={rating}/>
                </div>
                <table className={admins.table}>
                    <thead>
                    <tr>
                        <th style={{width: "33px", height: "31px"}}>

                        </th>
                        <th style={{width: "100px", height: "31px"}}>
                            등급명
                        </th>
                        <th style={{width: "190px", height: "31px"}}>
                            설명
                        </th>
                    </tr>
                    </thead>
                    <tbody className={admins.tbody}>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={baby} alt={baby}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="새싹멤버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px"}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="가입 후 막 활동을 시작하는 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={one} alt={one}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="일반맴버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px"}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="카페 일반 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={two} alt={two}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="성실맴버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px",}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="카페활동을 성실히 하는 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={the} alt={the}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="열심맴버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px"}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="카페 열심 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={fo} alt={fo}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="우수맴버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px"}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="카페 우수 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <tr>
                        <Image style={{width: "20px", height: "20px", marginLeft: "50px"}} src={fiv} alt={fiv}/>
                        <td>
                            <input style={{marginLeft: "60px"}} className={admins.inputbox} type="text"
                                   placeholder="감사맴버"
                                   maxLength="6"/>
                        </td>
                        <td style={{width: "300px", height: "31px"}}>
                            <input style={{width: "300px", height: "31px"}} type="text" placeholder="최고 고마운 VIP 멤버"
                                   maxLength="30"/>
                        </td>
                    </tr>
                    <br/>
                    </tbody>
                </table>
                <div className={admins.btn_area}>
                    <a>
                        <a role="button" className={boards.mainbut}>
                            <span>등록</span></a>
                    </a>

                    <a>
                        <a role="button" className={boards.mainbut}>
                            <span>취소</span></a>
                    </a>
                </div>
            </div>
        </>
    )
}