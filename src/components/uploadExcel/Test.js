import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inquireExcelByDay ,inquireExcelByMon ,inquireExcelByYear} from '../../apis/APIs';
import ExcelInquire from './ExcelInquire'
import ExcelInquireMonYear from './ExcelInquireMonYear'
function Menu(){
    const [results,setResults] = useState([])
    const [btnState,setBtnState] = useState("btn1");
    useEffect(
        ()=>{         
            async function inquireExcel (){
                console.log(btnState)
                if(btnState === 'btn1'){
                    setResults(await inquireExcelByDay())
                }else if(btnState === 'btn2'){
                    setResults(await inquireExcelByMon())
                }else if(btnState === 'btn3'){
                    setResults(await inquireExcelByYear())
                }
            }

            inquireExcel();
        }
        ,[btnState]
    )

    const handleBtn = async (e)=>{
        setBtnState(e.target.className)
    }

    return(
        <> 
            <button onClick={handleBtn} className='btn1'>btn1</button>
            <button onClick={handleBtn} className='btn2'>btn2</button>
            <button onClick={handleBtn} className='btn3'>btn3</button>
            <h1>데이터 목록</h1>
            <div>
                <table>
                    {btnState === 'btn1'&&
                        <tbody>
                            <tr>                           
                                <td>년-월</td>
                                <td>영업일수</td>                                
                                <td>총매출</td>
                                <td>총할인</td>
                                <td>실매출</td>
                                <td>영수건수</td>
                                <td>영수단가</td>
                                <td>가액</td>
                                <td>부가세</td>
                            </tr>
                        
                            {results.map(item => <ExcelInquire key={item.receiptNum} item={item}/>)}
                        </tbody>
                    }

                    {btnState === 'btn2'&&
                        <tbody>
                            <tr>
                                <td>년-월</td>
                                <td>영업일수</td>                                
                                <td>총매출</td>
                                <td>총할인</td>
                                <td>실매출</td>
                                <td>영수건수</td>
                                <td>영수단가</td>
                                <td>가액</td>
                                <td>부가세</td>
                            </tr>
                        
                            {results.map(item => <ExcelInquireMonYear key={item.monYearDate} item={item}/>)}
                        </tbody>
                    }
                    {btnState === 'btn3'&&
                        <tbody>
                            <tr>
                                <td>년-월</td>
                                <td>영업일수</td>                                
                                <td>총매출</td>
                                <td>총할인</td>
                                <td>실매출</td>
                                <td>영수건수</td>
                                <td>영수단가</td>
                                <td>가액</td>
                                <td>부가세</td>
                            </tr>
                        
                            {results.map(item => <ExcelInquireMonYear key={item.monYearDate} item={item}/>)}
                        </tbody>
                    }
                </table>
            </div>
        </>
    )
}
export default Menu;