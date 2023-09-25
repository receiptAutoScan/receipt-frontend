import "../css/InputComponent.css";
import { Link } from "react-router-dom";

function InputComponentYoung(){
    return (
        <Link to="/input/expense">
        <div className="input_one_dep youngd1">
            <div className="input_two_dep_one">
                <div className="input_two_dep_one_one"></div>
                <div className="input_two_dep_one_two">영수증 자료입력</div>
            </div>
            <div className="input_two_dep_two">영수증이미지를 업로드하여<br/>데이터화 합니다.</div>
            <div className="input_two_dep_thr">영수증으로 지출내역을<br/>관리 할 수 있어요.</div>
        </div>
        </Link>
    )
}

export default InputComponentYoung;