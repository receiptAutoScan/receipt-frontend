import Header from "../components/Header";
import ExcelUpload from "../components/uploadExcel/ExcelUpload";
function InputPage(){
    return (
        <>
        <Header/>
        <div className="inputExcelMain">
            <ExcelUpload/>
        </div>
        </>
    )
}
export default InputPage;