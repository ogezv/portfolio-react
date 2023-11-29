import Footer from "../footer/footer.jsx";
import Header from "../header.jsx";

const LayoutMaintenance = ({children})=>{
    return (
        <>
        <main>{children}</main>
            <h1>maintenance</h1>
        </>
    );
};
export default LayoutMaintenance;
