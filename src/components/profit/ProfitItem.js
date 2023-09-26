export default function GetMonthlyItem({data,index}) {


    return (
        <>
            <tr>
                <td>{index}</td>
                <td><p>{data.transactionMonth}</p></td>
                <td><p>{data.revenueTotalPrice}</p></td>
                <td><p>{data.expenseTotalPrice}</p></td>
                <td><p>{data.profit}</p></td>
            </tr>
        </>
    )
}