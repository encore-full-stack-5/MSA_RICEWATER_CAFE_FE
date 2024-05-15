import postcss from "@/styles/postpage.module.css";
import Image from "next/image";
import profile from "@/assets/profile.png";
import CommentReply from "@/app/framework/commentReply";
import axios from "@/api/axiosInstance";
import {useEffect, useState} from "react";

//여기 리플 데이터 받아와야함

export default function replies(props) {
    const {data} = props;
    console.log(props);
    const [ReplyData, setReplyData] = useState();

    const getReplyData = async () => {
        try {
            const response = await axios.get(`replies/commnet/${commentId}`);
            setReplyData(response.data);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }
    useEffect(() => {
        getReplyData();
    }, []);
    console.log(ReplyData);

    return (
        <>
            <li className={postcss.CommentItem_reply}>
                <li className={postcss.CommentItem2}> {
                    ReplyData?.map((el, i) =>
                        <li className={postcss.CommentItem} key={i}>
                            <div className={postcss.comment_box}>
                                <Image style={{width: "36px", height: "36px", marginRight: "10px"}}
                                       src={profile} alt={profile}></Image>
                                <div className={postcss.nickname_box}>
                                    <a>sdasdad</a>
                                </div>
                            </div>
                            <div className={postcss.comment_text_box}>
                                <a>asd</a>
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
                </li>
            </li>
        </>
    )
}