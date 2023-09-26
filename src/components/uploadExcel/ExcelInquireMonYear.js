import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inquireExcelByDay } from '../../apis/APIs';
const Inquire = ({item,index}) =>{
    return(
        <tr>
            <td>{index}</td>
            <td>{item.monYearDate}</td>
            <td>{item.monYearRevenuePoint}</td>
            <td>{item.monYearRevenueType}</td>
            <td>{item.monYearRevenuePrice}</td>
        </tr>
    )
}
export default Inquire;