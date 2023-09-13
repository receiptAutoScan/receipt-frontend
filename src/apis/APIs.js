// export function test(test){                    
//     return new Promise((resolve,reject)=>{
//         <>
//         </>
//     })  
// }

export function excelUpload(json){
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/revenue', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: json,
        })
        .then((result)=>{
            console.log(result);
            console.log(result.status);
            if(result.status === 201){
                console.log('저장완료');
            }else{
                console.log('저장실패');
            }
        }) 
    })
}

export function inquireExcelByDay(json){
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/revenueDay', {
            method: "GET",
        })
        .then(res=> res.json())
        .then(json => {
            resolve(json);
        })
    })
}