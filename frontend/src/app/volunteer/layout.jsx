import Navbar from "./navbar/page";

 export default function RootLayout({ children }) {
    return(
        <>
        <Navbar />
        {children}
        </>
    );
}