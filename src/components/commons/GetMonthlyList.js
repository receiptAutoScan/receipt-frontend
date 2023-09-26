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
            <thead>
                <tr>
                    <th>거래일월</th>
                    <th>총액</th>
                </tr>
            </thead>
            <tbody>
                {results.map(item => <GetMonthlyItem key={item.transactionMonth} data={item}/>)}
            </tbody>
        </table>
        </>
    );

}