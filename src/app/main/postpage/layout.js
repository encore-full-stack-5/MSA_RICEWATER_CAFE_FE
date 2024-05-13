import Header from "@/app/framework/header";
import Side from "@/app/framework/side";
import Serch from "@/app/framework/search"
import CommentRe from "@/app/framework/commentReply"

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <Serch/>
            <div style={{width: "1080px",
                height: "700px",
                display: "flex",justifyContent: "space-between",
                margin: "0 auto",
                unicodeBidi: "isolate"}}>
                <Side/>
                {children}

            </div>
        </>
    );
}