export default function GetMonthlyItem({data,index}) {

    console.log(data,index);

    return (
        <>
            <tr>
                <td>{index}</td>
                <td><p>{data.transactionMonth}</p></td>
                <td><p>{data.itemTotalPrice}</p></td>
            </tr>
        </>
    )

}