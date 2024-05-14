import boardpages from "/src/styles/pageboard.module.css"
import styles from "@/styles/cafepage.module.css";
import Link from "next/link";

export default function boardpage (){
    return (
        <>
            <div className={boardpages.main_area}>
                <div className={boardpages.sub_title}>
                    <h1 className={boardpages.pagetitle}>
                        공지사항
                    </h1>
                </div>
                <tr className={boardpages.article_board}>
                    <th className={boardpages.tab1}>

                    </th>
                    <th className={boardpages.tab2}>
                        제목
                    </th>
                    <th className={boardpages.tab3}>
                        작성자
                    </th>
                    <th className={boardpages.tab4}>
                        작성일
                    </th>
                </tr>
                <div className={boardpages.board_type_main}>
                    <div className={boardpages.td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.board_tag}>
                                공지
                            </strong>
                        </div>
                        <div className={boardpages.board_list}>
                            <a>중고물품 거래시 필독!!!!</a>
                            <span> [27]</span>
                        </div>
                        <div className={boardpages.view}> 중고나라마스터</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.board_type_main}>
                    <div className={boardpages.td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.board_tag}>
                                공지
                            </strong>
                        </div>
                        <div className={boardpages.board_list}>
                            <a>공지 제대로 읽으세요</a>
                            <span> [44]</span>
                        </div>
                        <div className={boardpages.view}> 중고나라마스터</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.board_type_main}>
                    <div className={boardpages.td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.board_tag}>
                                공지
                            </strong>
                        </div>
                        <div className={boardpages.board_list}>
                            <a>사기치지 마라</a>
                            <span> [444]</span>
                        </div>
                        <div className={boardpages.view}> 중고나라마스터</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.board_type_main}>
                    <div className={boardpages.td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.board_tag}>
                                공지
                            </strong>
                        </div>
                        <div className={boardpages.board_list}>
                            <a>걸리면 뒤진다</a>
                            <span> [4444]</span>
                        </div>
                        <div className={boardpages.view}> 중고나라마스터</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                1
                            </strong>
                        </div>
                        <Link href={"/main/postpage"}>
                        <div className={boardpages.nomal_board_list}>
                            <a>중고나라 최고의 매물 맥북 에어 m2 16gb 미드나이트</a>
                            <span> [11]</span>
                        </div></Link>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>

                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                2
                            </strong>
                        </div>
                        <div className={boardpages.nomal_board_list}>
                            <a>자유롭게 작성하는 게시판입니다</a>
                            <span> [11]</span>
                        </div>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                3
                            </strong>
                        </div>
                        <div className={boardpages.nomal_board_list}>
                            <a>자유롭게 작성하는 게시판입니다</a>
                            <span> [11]</span>
                        </div>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                4
                            </strong>
                        </div>
                        <div className={boardpages.nomal_board_list}>
                            <a>자유롭게 작성하는 게시판입니다</a>
                            <span> [11]</span>
                        </div>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                5
                            </strong>
                        </div>
                        <div className={boardpages.nomal_board_list}>
                            <a>자유롭게 작성하는 게시판입니다</a>
                            <span> [11]</span>
                        </div>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.nomaltext}>
                    <div className={boardpages.nomal_td_article}>
                        <div className={boardpages.board_tags}>
                            <strong className={boardpages.nomal_num}>
                                6
                            </strong>
                        </div>
                        <div className={boardpages.nomal_board_list}>
                            <a>자유롭게 작성하는 게시판입니다</a>
                            <span> [11]</span>
                        </div>
                        <div className={boardpages.view}> 중고장인</div>
                        <div className={boardpages.date}> 2024.05.07</div>
                    </div>
                </div>
                <div className={boardpages.prev_next}>
                    <button type={"button"} className={boardpages.on}>1</button>
                </div>
            </div>
        </>
    )

}