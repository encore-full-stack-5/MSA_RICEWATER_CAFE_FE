import modify from "@/styles/modify.module.css"
import Image from "next/image";
import profile from "/src/assets/profile.png"

export default function modifyProfile() {
    return (
        <>
            <div className={modify.pop_profile_set}>
                <div className={modify.pop_header}>
                    <h1 className={modify.pop_topword}>프로필 설정</h1>
                </div>
                <div className={modify.pop_content}>
                    <div className={modify.profile_img}>
                        <Image style={{
                            width: "88px",
                            height: "88px"
                        }} src={profile} alt={profile}/>
                        <a className={modify.txt_guide}>프로필은 카페별로 설정할 수 있습니다.</a>
                    </div>
                    <div className={modify.profile_info}>
                        <div className={modify.profile_form}>
                        <span className={modify.tit}>
                            별명
                        </span>
                        </div>
                        <div className={modify.text_area}>
                            <input style={{backgroundColor: "#f5f6f8"}} type="text" placeholder="별명을 입력해주세요"
                                   maxLength="255"/>
                        </div>
                        <div className={modify.profile_form}>
                        <span className={modify.tit}>
                            소개
                        </span>
                        </div>
                        <div className={modify.text_area2}>
                                <textarea style={{backgroundColor: "#f5f6f8", width: "100%", height: "100%", padding: "10px"}} placeholder="자기소개를 입력해주세요"
                                   maxLength="255"/>
                        </div>
                        <div className={modify.profile_form2}>
                            <ul>
                                <li>
                                    <div className={modify.togle_area}>
                                        <span>
                                            카페 운영진에게 성별 · 연령대 공개
                                        </span>
                                        <div className={modify.right}>
                                            <div className={modify.formInputRadio}>
                                                <input id="check0-1" type="radio" name="showSexAndAge"
                                                       className="input_radio"
                                                       value="false"/>
                                                <label htmlFor={"check0-1"} className={modify.label}>
                                                    <span>허용</span>
                                                </label>
                                            </div>
                                            <div className={modify.formInputRadio}>
                                                <input id="check0-2" type="radio" name="showSexAndAge"
                                                       className="input_radio"
                                                       value="false"/>
                                                <label htmlFor={"check0-2"} className={modify.label}>
                                                    <span>비허용</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                </li>
                            </ul>
                            <div className={modify.profile_confirm}>
                                <a className={modify.button} role={"button"}>
                                    <span>
                                        취소
                                    </span>
                                </a>
                                <a className={modify.button2} role={"button"}>
                                    <span>
                                        확인
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}