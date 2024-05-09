import Header from "@/app/framework/header";

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <div style={{width: "1080px",
                height: "2357px",
                display: "flex",justifyContent: "space-between",
                margin: "0 auto",
                unicodeBidi: "isolate"}}>
                {children}

            </div>
        </>
    );
}