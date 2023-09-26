import { useState, useEffect } from 'react';
import { GetProfit } from '../../apis/expense/ExpenseAPI';
import ProfitItem from './ProfitItem';

export default function ProfitList() {
    
    const [results, setResults] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    async function getData() {

        setResults(await GetProfit());
    }

    return (
        <>      
            <table>
            <tbody>
                <tr>
                    <td></td>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>거래일월</td>
                    <td>매출액</td>
                    <td>지출액</td>
                    <td>순수익</td>
                </tr>            
                {results.map((item,index) => <ProfitItem key={item.transactionMonth} data={item} index={index+2}/>)}
            </tbody>
        </table>
        </>
    );
} 