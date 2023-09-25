import Header from "../components/Header";
import FileUploadComponent from "../components/expense/FileUploadComponent";
function InputPage(){
    return (
        <>
        <Header/>
        <div className="inputExcelMain">
            <FileUploadComponent/>
        </div>
        </>
    )
}
export default InputPage;