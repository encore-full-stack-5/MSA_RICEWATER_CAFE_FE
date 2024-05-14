import Header from "@/app/framework/header";
import Side from "@/app/framework/side";
import Serch from "@/app/framework/search"

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <Serch/>
            <div style={{width: "1080px",
                margin: "0 auto",
                padding: "left 20px",
                unicodeBidi: "isolate"}}>
                <Side/>
                {children}

            </div>
        </>
    );
}