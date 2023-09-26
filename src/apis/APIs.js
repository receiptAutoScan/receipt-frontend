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
            if(json.length === 0){
                alert("등록된 지출 표가 없습니다")
            }
            resolve(json);
        })
    })
}

export function inquireExcelByMon(json){
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/revenue/monthly', {
            method: "GET",
        })
        .then(res=> res.json())
        .then(json => {
            console.log(json)
            if(json.length === 0){
                alert("등록된 지출 표가 없습니다")
            }
            resolve(json);
        })
    })
}

export function inquireExcelByYear(json){
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/revenueYear', {
            method: "GET",
        })
        .then(res=> res.json())
        .then(json => {
            console.log(json)
            if(json.length === 0){
                alert("등록된 지출 표가 없습니다")
            }
            resolve(json);
        })
    })
}