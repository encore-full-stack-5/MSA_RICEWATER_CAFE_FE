"use client"
import styles from '/src/styles/cafepage.module.css'
import Image from "next/image";
import mainbener from '/src/assets/mainbener.jpg'
import arrow from '/src/assets/arrow.svg'
import dot from '/src/assets/dot.svg'
import Link from "next/link";
import axios from "@/api/axiosInstance";
import {useEffect, useState} from "react";



export default function Cafepage() {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get("/boards");
            setData(response.data.content);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }
    const [categorie, setCategorie] = useState([]);
    const getCategoriesData = async () => {
        try {
            const response = await axios.get("/categories");
            setCategorie(response.data.content);
        } catch (e) {
            console.error(e.response?.data.message);
        }
    }

    useEffect(() => {
        getData();
        getCategoriesData();
    }, []);
    console.log(data);
    console.log(categorie);
    return (
        <>
            <div className={styles.cafe_body_skin}>
                <div className={styles.content_area}>
                    <div className={styles.main_area}>
                        <div className={styles.main_intro}>
                            <Image className={styles.mainbener} src={mainbener} alt={mainbener}/>
                        </div>
                        <div className={styles.layout_box}>
                            <div className={styles.cb}>
                                <div className={styles.cb_1}>
                                    <div className={styles.article_board}>
                                        <div className={styles.list_tit}>
                                            <Link style={{display: "flex", justifyContent: "space-between"}} href={"/main/boardpage"}>
                                            <h3>공지사항</h3>
                                            <button>
                                                <span style={{marginLeft: "279px"}} className={styles.arrowf}>더보기 <Image src={arrow}
                                                                                           alt={arrow}/></span>
                                            </button>
                                            </Link>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <Link href={"/main/boardpage"}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>중고물품 거래시 필독!!!!</a>
                                                    <span> [27]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>공지 읽으세요 제발 </a>
                                                    <span>[127]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    { data.map ((el, i) =>
                                    <div className={styles.article_board}>
                                        <div>
                                            <div className={styles.td_article}>
                                                <Image style={{ width: "18px", height: "17px" }} src={dot}
                                                       alt={dot}/>
                                                <Link href={{
                                                pathname: `/main/postpage`,
                                                query: {
                                                id: `${el.id}`
                                                 }
                                                }}
                                                >
                                                        <div className={styles.board_list_nomal} style={{ width: "100%" }} key={i}>
                                                        <a>{el.boardTitle}</a>
                                                            <span>[12]</span>
                                                        </div>

                                                <div className={styles.view}> 1,321</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className={styles.cb2}>
                                <div className={styles.cb_1}>
                                    <div className={styles.article_board}>
                                        <div className={styles.list_tit}>
                                            <Link style={{display: "flex", justifyContent: "space-between"}} href={"/main/boardpage"}>
                                            <h3>자유게시판</h3>
                                            <button>
                                                <span style={{marginLeft: "265px"}} className={styles.arrowf}>더보기 <Image src={arrow} alt={arrow}/></span>
                                            </button>
                                            </Link>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>중고물품 거래시 필독!!!!</a>
                                                    <span> [27]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div className={styles.board_type_main}>
                                            <div className={styles.td_article}>
                                                <strong className={styles.board_tag}>
                                                    공지
                                                </strong>
                                                <div className={styles.board_list} style={{ width: "100%" }}>
                                                    <a>공지 읽으세요 제발 </a>
                                                    <span>[127]</span>
                                                </div>
                                                <div className={styles.view}> 1,321</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.article_board}>
                                        <div>
                                        </div>
                                        <div>
                                            <div className={styles.td_article}>
                                                <Image style={{ width: "18px", height: "17px" }} src={dot}
                                                       alt={dot}/>
                                                <div className={styles.board_list_nomal} style={{ width: "100%" }}>
                                                    <a className={styles.aaa}>돈 벌어먹고 살기 어렵다 ! </a>
                                                    <span>[12237]</span>
                                                </div>
                                                <div className={styles.view}> 1,421</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
