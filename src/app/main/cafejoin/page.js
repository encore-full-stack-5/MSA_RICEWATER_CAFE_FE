import join from "/src/styles/cafejoin.module.css"
import modify from "@/styles/modify.module.css";
import boardpages from "@/styles/pageboard.module.css";

export default function cafejoin (){
    return(
        <>
            <div className={join.sub_title}>
                <h1 className={join.pagetitle}>
                    카페 가입하기
                </h1>
                <a className={join.sub_sub_title}>
                    카페 가입을 위한 정보를 입력해주세요.
                </a>
            </div>
            <div className={join.join_board}>
                <div>
                    <div className={join.join_info_grid}>
                        <div className={join.info}>
                            <strong>
                                카페설명
                            </strong>
                        </div>
                        <div className={join.join_info_body}>
                            <a>
                                대한민국 최대 규모 중고거래 중고나라 공식 카페입니다.
                            </a>
                        </div>
                    </div>
                    <div className={join.join_info_grid}>
                        <div className={join.info}>
                            <strong>
                                가입설명
                            </strong>
                        </div>
                        <div className={join.join_info_body}>
                            <a>
                                안녕하세요 중고나라 유저 여러분! 대한민국 최대규모 중고거래의 장에 오신것을 환영합니다
                            </a>
                        </div>
                    </div>
                    <div className={join.join_info_grid2}>
                        <div className={join.info2}>
                            <strong>
                                별명
                            </strong>
                        </div>
                        <div className={join.join_info_body2}>
                            <input className={join.input} type="text" placeholder="별명"/>
                        </div>
                    </div>
                    <div className={join.join_info_grid}>
                        <div className={join.info}>
                            <strong>
                                공개설정
                            </strong>
                        </div>
                        <div className={join.togle_area}>
                            <span>
                                카페 운영진에게 성별 · 연령대 공개<br/>
                                <a className={join.text}>공개 설정은 가입 후 프로필 설정 메뉴에서 자유롭게 변경할 수 있습니다.</a>
                            </span>
                            <div className={modify.right}>
                                <div className={modify.formInputRadio}>
                                    <input id="check0-3" type="radio" name="showSexAndAge"
                                           className="input_radio"
                                           value="false"/>
                                    <label htmlFor={"check0-1"} className={modify.label}>
                                        <span>허용</span>
                                    </label>
                                </div>
                                <div className={modify.formInputRadio}>
                                    <input id="check0-4" type="radio" name="showSexAndAge"
                                           className="input_radio"
                                           value="false"/>
                                    <label htmlFor={"check0-1"} className={modify.label}>
                                        <span>비허용</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={join.join_info_grid3}>
                        <div className={join.info2}>
                            <strong>
                                가입질문
                            </strong>
                        </div>
                        <div>
                            <div className={join.text_box}>
                                <a>
                                    가입시 카페 규정 공지를 꼭 읽어주세요.
                                </a>
                                <textarea className={join.input2} type="text"/>
                            </div>
                            <div className={join.text_box}>
                                <a>
                                    중고거래 경험이 있으십니까?
                                </a>
                                <textarea className={join.input2} type="text"/>
                            </div>
                            <div className={join.text_box}>
                                <a>
                                    사기 치실 생각이 있나요???
                                </a>
                                <textarea className={join.input2} type="text"/>
                            </div>
                        </div>
                    </div>
                    <table className={join.join_info_grid3}>
                        <tbody>
                        <ul>
                            <li>∙ 가입 신청이 수락되면 '내소식'에서 알려드립니다.</li>
                            <li>∙ 가입 신청 후 3개월 이상 수락되지 않으면 자동 신청 해제 됩니다.</li>
                            <li>∙ 이 카페에서 활동하는 동안 원활한 카페 운영을 위하여 (필수) 아이디, 별명, 활동내역, (선택) 성별, 연령대, 이름(단, 이름은 실명 공개 카페에 한해 공개)이 <br/> &emsp;이
                                카페의 운영진에게 공개되며,
                                최소한의 제재 기록은 카페 탈퇴 후에도 보관됩니다. 본 동의를 거부하실 수 있으나, 카페 가입이 불가능합니다.</li>
                        </ul>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={join.prev_next}>
                <button type={"button"} className={join.on}>동의 후 가입하기</button>
            </div>
        </>
    )
}