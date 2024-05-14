import Header from "@/app/framework/header";
import Side from "@/app/framework/side"

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <div style={{marginLeft: "50px", marginTop: "52px"}}>

                <Side/>

            </div>
            <div style={{
                width: "850px",
                height: "800px",
                marginLeft: "280px",
                unicodeBidi: "isolate"
            }}>
                {children}

            </div>
        </>
    );
}