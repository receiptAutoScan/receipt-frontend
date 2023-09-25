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
            <div className='excelSearch'>
                <table>
                    {btnState === 'btn1'&&
                        <tbody>
                            <tr>
                                <td></td>
                                <td>A</td>
                                <td>B</td>                                
                                <td>C</td>
                                <td>D</td>
                                <td>E</td>
                                <td>F</td>
                                <td>G</td>
                                <td>H</td>
                                <td>I</td>
                            </tr>
                            <tr>     
                                <td>1</td>                      
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
                        
                            {results.map((item,index) => <ExcelInquire key={item.receiptNum} item={item} index={index+2}/>)}
                        </tbody>
                    }

                    {btnState === 'btn2'&&
                        <tbody>
                            <tr>
                                <td></td>
                                <td>A</td>
                                <td>B</td>                                
                                <td>C</td>
                                <td>D</td>
                                <td>E</td>
                                <td>F</td>
                                <td>G</td>
                                <td>H</td>
                                <td>I</td>
                            </tr>
                            <tr>
                                <td>1</td>
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
                        
                            {results.map((item,index) => <ExcelInquireMonYear key={item.monYearDate} item={item} index={index+2}/>)}
                        </tbody>
                    }
                    {btnState === 'btn3'&&
                        <tbody>
                            <tr>
                                <td></td>
                                <td>A</td>
                                <td>B</td>                                
                                <td>C</td>
                                <td>D</td>
                                <td>E</td>
                                <td>F</td>
                                <td>G</td>
                                <td>H</td>
                                <td>I</td>
                            </tr>
                            <tr>
                                <td>1</td>
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
                        
                            {results.map((item,index) => <ExcelInquireMonYear key={item.monYearDate} item={item} index={index+2}/>)}
                        </tbody>
                    }
                </table>
            </div>
        </>
    )
}
export default Menu;