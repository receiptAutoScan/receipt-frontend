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
                            </tr>
                            <tr>     
                                <td>1</td>                      
                                <td>일자</td>
                                <td>지점</td>                                
                                <td>품목</td>
                                <td>금액</td>
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
                            </tr>
                            <tr>
                            <td>1</td>                      
                                <td>일자</td>
                                <td>지점</td>                                
                                <td>품목</td>
                                <td>금액</td>
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
                            </tr>
                            <tr>
                                <td>1</td>                      
                                <td>일자</td>
                                <td>지점</td>                                
                                <td>품목</td>
                                <td>금액</td>
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