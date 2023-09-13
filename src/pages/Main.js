import Layout from "../layouts/Layout";
import ExcelUpload from "../components/uploadExcel/ExcelUpload";
import ExcelInquire from "../components/uploadExcel/Test";

function Main(){
    return(
        <>
            <Layout/>
            <ExcelUpload/>
            <ExcelInquire/>
        </>
    )
}
export default Main;