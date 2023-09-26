import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inquireExcelByDay } from '../../apis/APIs';
const Inquire = ({item,index}) =>{
    return(
        <tr>
            <td>{index}</td>
            <td>{item.revenueDate}</td>
            <td>{item.revenuePoint}</td>            
            <td>{item.revenuePrice}</td>
            <td>{item.revenueType}</td>
        </tr>
    )
}
export default Inquire;