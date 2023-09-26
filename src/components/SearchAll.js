import { useState } from "react";
import "../css/InputComponent.css";
import { Link } from "react-router-dom";
import ExcelSearch from "./uploadExcel/ExcelSearch";
import "../css/searchAll.css";
import ExpenseList from './expense/ExpenseList';
function SearchAll(){
    const [stateMenu, setStateMenu] = useState(1);

    const onClickHandler = (e) => {
        console.log(document.getElementsByClassName("tbg").length);
        for(let i = 0; i < document.getElementsByClassName("tbg").length;i++){
            document.getElementsByClassName("tbg")[i].className="w50p h50p df pcc pic b1sb hc tbg"
        }
        switch(e.target.textContent){
            case "매출" : setStateMenu(1);e.target.className+=" bgb"; break;
            case "매입" : setStateMenu(2);e.target.className+=" bgb"; break;
            case "수익" : setStateMenu(3);e.target.className+=" bgb"; break;
            default : break;
        }
    }

    return (
        <div className="w100 df fdc">
            <div className="df pcc pic w100 jcc h150p">
                <div className="w30 fileInput">
                    <input type="date" id="search-date" value="2023-09-01"/>-
                    <input type="date" id="search-date" value="2023-09-30"/>
                </div>
                <div className="df w10 pcc jcsb">
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">매출</div>
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">매입</div>
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">수익</div>
                </div>
            </div>
            <div>
                { stateMenu === 1 && 
                    <ExpenseList/>      
                }

                { stateMenu === 2 && 
                    <ExcelSearch/>
                }

                { stateMenu === 3 && 
                    <div>3</div>
                }
            </div>
        </div>
    )
}

export default SearchAll;