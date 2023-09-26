import { useState, useEffect } from 'react';
import { getExpenses } from '../../apis/expense/ExpenseAPI';
import ExpenseItem from './ExpenseItem';
import '../../css/table.css';

export default function ExpenseList(props) {
    
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        getData();

    }, [])
    
    useEffect(() => {
    }, [results])

    
    const getData = async () => {
        setResults(await getExpenses());
    }
    

    return (
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
                    <td>거래처</td>
                    <td>거래일자</td>
                    <td>금액</td>
                    <td>품목</td>
                </tr>
                {results.map((item,index) => <ExpenseItem key={item.expenseId} data={item} index={index+2}/>)}
            </tbody>
        </table>
    )
}