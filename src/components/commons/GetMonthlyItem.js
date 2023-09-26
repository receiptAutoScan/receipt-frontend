export default function GetMonthlyItem({data}) {

    console.log(data);

    return (
        <>
            <tr>
                <td><p>{data.transactionMonth}</p></td>
                <td><p>{data.itemTotalPrice}</p></td>
            </tr>
        </>
    )

}