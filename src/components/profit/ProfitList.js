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
            <thead>
                <tr>
                    <th>거래일월</th>
                    <th>매출액</th>
                    <th>지출액</th>
                    <th>순수익</th>
                </tr>
            </thead>
            <tbody>
                {results.map(item => <ProfitItem key={item.transactionMonth} data={item}/>)}
            </tbody>
        </table>
        </>
    );
} 