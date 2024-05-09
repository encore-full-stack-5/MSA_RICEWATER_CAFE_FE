import Header from "@/app/main/cafepage/framework/header";

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            <div>{children}</div>
        </>
    );
}