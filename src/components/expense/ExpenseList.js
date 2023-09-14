import { useState, useEffect } from 'react';
import { getExpenses } from '../../apis/expense/ExpenseAPI';
import ExpenseItem from './ExpenseItem';
import '../../css/table.css';

export default function ExpenseList() {
    
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        getData();

    }, [])
    
    useEffect(() => {

        

        console.log(results);

        
    }, [results])

    
    const getData = async () => {
        const data = await getExpenses();
        setResults(data);
    }
    

    return (
        <table>
            <thead>
                <tr>
                    <th>거래처</th>
                    <th>거래일자</th>
                    <th>금액</th>
                    <th>품목</th>
                </tr>
            </thead>
            <tbody>
                {results.map(item => <ExpenseItem key={item.expenseId} data={item}/>)}
            </tbody>
        </table>
    )
}