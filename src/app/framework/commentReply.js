import Image from "next/image";
import postcss from "@/styles/postpage.module.css";
import profile from "@/assets/profile.png";

export default function commentReply() {
    return (
        <>
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
                            <a role={"button"}>답글쓰기</a>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}