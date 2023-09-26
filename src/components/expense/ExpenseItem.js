import { useState } from 'react';

export default function ExpenseItem({data}) {
    
    const [businessPartner, setBusinessPartner] = useState(data.businessPartner);
    const [transactionDate, setTransactionDate] = useState(data.transactionDate);
    const [itemPrice, setItemPrice] = useState(data.itemPrice);
    const [itemName, setItemName] = useState(data.itemName);

    const onChangeHandler = (e) => {
        switch (e.target.id) {
            case "1":
                setBusinessPartner(e.target.value);
                break;
            case "2":
                setTransactionDate(e.target.value);
                break;
            case "3":
                setItemPrice(e.target.value);
                break;
            case "4":
                setItemName(e.target.value);
                break;
            default:
                break;
        }
    }

    const onKeyDownHandler = (e) => {
        if(e.key==="Enter")
            if(e.target.readOnly === true) {
                e.target.parentNode.parentNode.childNodes.forEach((item) => {
                    item.childNodes[0].readOnly = false;
                });
            } else {
                // update api
                console.log("update api");
                e.target.parentNode.parentNode.childNodes.forEach((item) => {
                    item.childNodes[0].readOnly = true;
                });
            }
    }

    return (
        <>
            <tr id={data.expenseId}>
                <td><input value={businessPartner} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} id="1" readOnly/></td>
                <td><input value={transactionDate} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} id="2" readOnly/></td>
                <td><input value={itemPrice} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} id="3" readOnly/></td>
                <td><input value={itemName} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} id="4" readOnly/></td>
            </tr>
        </>
    )
}