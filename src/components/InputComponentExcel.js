import { Link } from "react-router-dom";
import "../css/InputComponent.css";

function InputComponentExcel(){
    return (
        <Link to="/input/excel">
        <div className="input_one_dep exceld1">
            <div className="input_two_dep_one">
                <div className="input_two_dep_one_one excelimg"></div>
                <div className="input_two_dep_one_two">엑셀 자료입력</div>
            </div>
            <div className="input_two_dep_two excelp1">엑셀파일을 업로드하여<br/>데이터화 합니다.</div>
            <div className="input_two_dep_thr excelp2">포스에서 받은 엑셀파일로<br/>매출을 관리하세요.</div>
        </div>
        </Link>
    )
}

export default InputComponentExcel;