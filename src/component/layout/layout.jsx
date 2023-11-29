import Footer from "../footer/footer.jsx";
import Header from "../header.jsx";

const Layout = ({children})=>{
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
};
export default Layout;
