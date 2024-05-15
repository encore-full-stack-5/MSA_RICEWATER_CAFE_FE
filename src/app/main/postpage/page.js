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
import Replies from "/src/app/framework/replies"

export default function Postpage(props) {
    const [comment, setComment] = useState(false);
    const [boardData, setBoardData] = useState();
    const [commentData, setCommentData] = useState();
    const [replies, setReplies] = useState();

    const date = new Date(boardData?.createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;

    const id = parseInt(props.searchParams.id);
    const getBoardsData = async () => {
        try {
            const response = await axios.get(`/boards/${id}`);
            setBoardData(response.data);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }
    const getCommentData = async () => {
        try {
            const response = await axios.get(`/comments/board/${id}`);
            setCommentData(response.data);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }

    useEffect(() => {
        getBoardsData();
        getCommentData();
    }, []);
    console.log(commentData);
    console.log(boardData);
    return (
        <>
            <div className={postcss.contentBox}>
                <div className={postcss.article_header}>
                    <div className={postcss.ArticleTitle}>
                        <Link href={'/main/boardpage'}>
                            <div className={postcss.linkbord}>공지사항</div>
                        </Link>
                        <div className={postcss.atc_maintext}>
                            {boardData?.boardTitle}
                        </div>
                    </div>
                    <div className={postcss.WriterInfo}>
                        <div className={postcss.writer_icon}>
                            <Image src={obong} alt={obong}></Image>
                        </div>
                        <div className={postcss.profile_info}>
                            <div>오둥이</div>
                            <div className={postcss.postdate}>{dateStr} 조회 {boardData?.boardViews}</div>
                        </div>
                    </div>
                </div>
                <div className={postcss.textmain}>
                    <a>{boardData?.boardContent}</a>
                    <Image src={mac} alt={mac}></Image>
                </div>
                <div className={postcss.CommentBox}>
                    <div className={postcss.commentbar}>
                        <a>댓글</a>
                    </div>
                    <ul className={postcss.comment_list}>
                        {
                            commentData?.map((el, i) =>
                                <li className={postcss.CommentItem} key={i}>
                                    <div className={postcss.comment_box}>
                                        <Image style={{width: "36px", height: "36px", marginRight: "10px"}}
                                               src={profile} alt={profile}></Image>
                                        <div className={postcss.nickname_box}>
                                            {el?.id}
                                        </div>
                                    </div>
                                    <div className={postcss.comment_text_box}>
                                        {el?.content}
                                    </div>
                                    <div className={postcss.infoBox}>
                                        <a className={postcss.date}>2024.04.13 18:30</a>
                                        <a onClick={() => setComment(!comment)} role={"button"}>답글쓰기</a>
                                    </div>
                                    {
                                        comment === false ? "" : <CommentReply/>
                                    }
                                </li>)
                        }
                        <Replies/>
                    </ul>
                </div>
                <div className={postcss.commentinput}>
                    <div className={postcss.my_nickname}>
                        <a>애플최고</a>
                        <textarea className={postcss.textinput}
                                  style={{width: "767px", height: "40px", marginTop: "10px"}}
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