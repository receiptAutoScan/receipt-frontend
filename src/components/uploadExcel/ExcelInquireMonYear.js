import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inquireExcelByDay } from '../../apis/APIs';
const Inquire = ({item}) =>{
    return(
        <tr>
            <td>{item.monYearDate}</td>
            <td>{item.monYearDay}</td>
            <td>{item.monYearTotal}</td>
            <td>{item.monYearSale}</td>
            <td>{item.monYearActual}</td>            
            <td>{item.monYearReceiptNum}</td>
            <td>{item.monYearReceiptPrice}</td>
            <td>{item.monYearReceiptValue}</td>
            <td>{item.monYearlySurtax}</td>
        </tr>
    )
}
export default Inquire;