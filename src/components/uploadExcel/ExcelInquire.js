import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inquireExcelByDay } from '../../apis/APIs';
const Inquire = ({item,index}) =>{
    return(
        <tr>
            <td>{index}</td>
            <td>{item.revenueDate}</td>
            <td>{item.revenueDay}</td>
            <td>{item.revenueTotal}</td>
            <td>{item.revenueSale}</td>
            <td>{item.revenueActual}</td>            
            <td >{item.receiptNum}</td>
            <td>{item.receiptPrice}</td>
            <td>{item.receiptValue}</td>
            <td>{item.revenueSurtax}</td>
        </tr>
    )
}
export default Inquire;