import postcss from "@/styles/postpage.module.css";

export default function commentReply(props) {
    const {comment} = props;
    return (
        <>
            <div style={{width: "754px", height: "116px"}} className={postcss.commentinput2}>
                <div className={postcss.my_nickname}>
                    <a>애플최고</a>
                    <textarea className={postcss.textinput} style={{width: "700px", height: "30px", marginTop: "10px"}}
                              placeholder={"댓글을 남겨보세요"}></textarea>
                </div>
                <div>
                    <a className={postcss.inputbut2} role={"button"}>등록</a>
                </div>
            </div>
        </>
    )
}