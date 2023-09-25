import Header from "../components/Header";
import "../css/inputPage.css";
import InputComponentY from "../components/InputComponentYoung";
import InputComponentE from "../components/InputComponentExcel";
function InputPage(){
    return (
        <>
        <Header/>
        <div className="inputpageMain">
            <InputComponentY/>
            <InputComponentE/>
        </div>
        </>
    )
}
export default InputPage;