"use client";
import postcss from "/src/styles/postpage.module.css"
import Link from "next/link";
import obong from "/src/assets/행복한오둥이.png"
import Image from "next/image";
import mac from "/src/assets/mac.jpg"
import profile from "/src/assets/profile.png"
import {useEffect, useState} from "react";
import CommentReply from "@/app/framework/commentReply"
import axios from "@/api/axiosInstance";

export default function Postpage (){
    const [comment, setComment] = useState(false);
    const [data, setData] = useState();

    const getData = async () => {
        try {
            const response = await axios.get("/boards/1");
            setData(response.data);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    return(
        <>
            <div className={postcss.contentBox}>
                <div className={postcss.article_header}>
                    <div className={postcss.ArticleTitle}>
                        <Link href={'/main/boardpage'}>
                            <div className={postcss.linkbord}>공지사항</div>
                        </Link>
                        <div className={postcss.atc_maintext}>
                            중고나라 최고의 매물 맥북 에어 m2 16gb 미드나이트
                        </div>
                    </div>
                    <div className={postcss.WriterInfo}>
                        <div className={postcss.writer_icon}>
                            <Image src={obong} alt={obong}></Image>
                        </div>
                        <div className={postcss.profile_info}>
                            <div>오둥이</div>
                            <div className={postcss.postdate}>2024.05.08 조회 {data?.boardViews}</div>
                        </div>
                    </div>
                </div>
                <div className={postcss.textmain}>
                    <a>{data?.boardContent}</a>
                    <Image src={mac} alt={mac}></Image>
                </div>
                <div className={postcss.CommentBox}>
                    <div className={postcss.commentbar}>
                        <a>댓글</a>
                    </div>
                    <ul className={postcss.comment_list}>
                        <li className={postcss.CommentItem}>
                            <Image style={{width: "36px", height: "36px", marginTop: "14px", marginRight: "10px"}}
                                   src={profile} alt={profile}></Image>
                            <div className={postcss.comment_box}>
                                <div className={postcss.nickname_box}>
                                    <a>참치캐니</a>
                                </div>
                                <div className={postcss.comment_text_box}>
                                    <p>맥북 얼마에 파시는건가요?</p>
                                </div>
                                <div className={postcss.infoBox}>
                                    <a className={postcss.date}>2024.04.13 18:30</a>
                                    <a onClick={() => setComment(!comment)} role={"button"}>답글쓰기</a>
                                </div>
                                {
                                    comment === false ? "" : <CommentReply />
                                }
                            </div>

                        </li>
                        <li className={postcss.CommentItem_reply}>
                            <li className={postcss.CommentItem2}>
                                <Image style={{width: "36px", height: "36px", marginTop: "14px", marginRight: "10px"}}
                                       src={profile} alt={profile}></Image>
                                <div className={postcss.comment_box}>
                                    <div className={postcss.nickname_box}>
                                        <a>맥북셀러</a>
                                    </div>
                                    <div className={postcss.comment_text_box}>
                                        <p>100만원이요 !</p>
                                    </div>
                                    <div className={postcss.infoBox}>
                                        <a className={postcss.date}>2024.04.13 18:30</a>
                                        <a onClick={() => setComment(!comment)} role={"button"}>답글쓰기</a>
                                    </div>
                                </div>
                            </li>
                        </li>
                    </ul>
                </div>
                <div className={postcss.commentinput}>
                    <div className={postcss.my_nickname}>
                        <a>애플최고</a>
                        <textarea className={postcss.textinput} style={{width:"767px", height:"40px", marginTop: "10px"}}
                                  placeholder={"댓글을 남겨보세요"}></textarea>
                    </div>
                    <div>
                        <a className={postcss.inputbut} role={"button"}>등록</a>
                    </div>
                </div>
            </div>
        </>
    )
}