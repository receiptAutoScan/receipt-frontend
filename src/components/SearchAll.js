import { useState } from "react";
import "../css/InputComponent.css";
import ExcelSearch from "./uploadExcel/ExcelSearch";
import "../css/searchAll.css";
import ExpenseList from './expense/ExpenseList';
import GetMonthlyList from "./commons/GetMonthlyList";
import ProfitList from "./profit/ProfitList";

function SearchAll(){
    const [stateMenu, setStateMenu] = useState(1);
    const [dateScope, setDateScope] = useState(1); // 1 : 일별, 2 : 월별

    const onClickHandler = (e) => {

        e.target.parentNode.childNodes.forEach((node) => {
            node.className = "w50p h50p df pcc pic b1sb hc tbg";
        });

        switch(e.target.textContent){
            case "매출" : setStateMenu(1);e.target.className+=" bgb"; break;
            case "매입" : setStateMenu(2);e.target.className+=" bgb"; break;
            case "수익" : setStateMenu(3);e.target.className+=" bgb"; break;
            default : break;
        }

        setDateScope(1);
    }

    const dateScopeHandler = (e) => {
        setDateScope(parseInt(e.target.id));
    }   

    return (
        <div className="w100 df fdc">
            <div className="df pcc pic w100 jcc h150p">
                <div className="df w10 pcc jcsb">
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">매출</div>
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">매입</div>
                    <div onClick={onClickHandler} className="w50p h50p df pcc pic b1sb hc tbg">수익</div>
                </div>
                { stateMenu !== 3 &&
                    <div className="df w10 pcc jcsb">
                        <div onClick={dateScopeHandler} id="1" className="w50p h50p df pcc pic b1sb hc tbg">일별</div>
                        <div onClick={dateScopeHandler} id="2" className="w50p h50p df pcc pic b1sb hc tbg">월별</div>
                    </div>
                }

            </div>
            <div>
                { dateScope === 1 && stateMenu === 1 &&
                    <ExpenseList/>     
                }

                { dateScope === 1 && stateMenu === 2 &&
                    <ExcelSearch/>
                }

                { dateScope === 2 && stateMenu !== 3 &&
                    <GetMonthlyList stateMenu={stateMenu}/>
                }

                { stateMenu === 3 && 
                    <ProfitList/>
                }
            </div>
        </div>
    )
}

export default SearchAll;