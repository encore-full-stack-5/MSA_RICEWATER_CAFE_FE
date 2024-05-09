import boards from "/src/styles/board.module.css"
import arrdown from "/src/assets/angle-down_3916916.svg"
import Image from "next/image";

export default function board (){
    return(
        <>
            <div className={boards.container}>
                <div className={boards.writingHeader}>
                    <h1>카페 글쓰기</h1>
                    <div className={boards.tool}>
                        <a role="button" className={boards.mainbut}>
                            <span> 등록</span></a>
                    </div>
                </div>
                <div className={boards.editer_wrap}>
                    <div className={boards.ArticleWritingTitle}>
                        <div className={boards.rowWrap}>
                            <div className={boards.row}>
                                <div className={boards.column_title}>
                                    <button type="button" aria-haspopup="true" aria-expanded="selectboxLayer"
                                            aria-pressed="selectboxLayer" className={boards.button}> 게시판을 선택해 주세요.
                                        <Image className={boards.arr} src={arrdown} alt={arrdown}/>
                                    </button>
                                </div>
                            </div>
                            <div className={boards.row}>
                                <div className={boards.column_title}>
                                    <button type="button" aria-haspopup="true" aria-expanded="selectboxLayer"
                                            aria-pressed="selectboxLayer" className={boards.button}> 말머리 선택
                                        <Image className={boards.arr} src={arrdown} alt={arrdown}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={boards.FlexableTextArea}>
                            <textarea placeholder="제목을 입력해 주세요." className={boards.textarea_input} style={{height: "48px"}}>
                        </textarea>
                    </div>
                </div>
            </div>
                <div className={boards.board}>
                    <textarea style={{backgroundColor: "#f5f6f8", width: "100%", height: "600px", padding: "10px", resize: "none"}}
                              placeholder="내용을 입력하세요."
                              maxLength="500"/>
                </div>
            </div>
        </>
    )
}