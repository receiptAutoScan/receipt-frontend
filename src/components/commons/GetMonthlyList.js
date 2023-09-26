import { useEffect, useState } from "react";
import { GetMonthlyExpenses } from '../../apis/expense/ExpenseAPI';
import { inquireExcelByMon } from "../../apis/APIs";
import GetMonthlyItem from "./GetMonthlyItem";
export default function GetMonthlyList(props) {

    const [results, setResults] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    async function getData() {
        if(props.stateMenu === 1) {
            setResults(await GetMonthlyExpenses());
        } else {
            setResults(await inquireExcelByMon());
        }

    }

    return (
        <>      
            <table>
            <tbody>
                <tr>
                    <td></td>
                    <td>A</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td></td>
                    <td>거래일월</td>
                    <td>총액</td>
                </tr>
                {results.map((item,index) => <GetMonthlyItem key={item.transactionMonth} data={item} index={index}/>)}
            </tbody>
        </table>
        </>
    );

}