import Header from "@/app/main/cafepage/framework/header";
import Side from  "@/app/main/cafepage/framework/side";

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <div style={{width: "1080px",
                height: "2357px",
                display: "flex",justifyContent: "space-between",
                margin: "0 auto",
                unicodeBidi: "isolate"}}>
                <Side/>
                {children}

            </div>
        </>
    );
}