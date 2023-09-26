export default function GetMonthlyItem({data}) {


    return (
        <>
            <tr>
                <td><p>{data.transactionMonth}</p></td>
                <td><p>{data.revenueTotalPrice}</p></td>
                <td><p>{data.expenseTotalPrice}</p></td>
                <td><p>{data.profit}</p></td>
            </tr>
        </>
    )
}