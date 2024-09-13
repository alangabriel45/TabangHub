import Navbar from "../volunteer/navbar/page";
import OrganizationNavbar from "./organizationnavbar/page";

 export default function RootLayout({ children }) {
    return(
        <>
        <OrganizationNavbar />
        {children}
        </>
    );
}