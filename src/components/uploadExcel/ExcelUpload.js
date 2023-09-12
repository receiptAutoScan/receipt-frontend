import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx'
import axios from 'axios'
const Upload = () =>{ 
    const [fileName, setFileName] = useState(null);

    const handleFile = async (e)=> {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.readFile(data);
        setFileName(file.name);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        // console.log(jsonData);
        // convert(jsonData);
        const json = JSON.stringify(jsonData);
        console.log(jsonData);
        axios.post('http://localhost:8080/revenue', {
            headers: {
                'Content-type': 'application/json'
            },
            body: json
        })
        .then((result)=>{
            if(result.data.Status === 'Invalid'){
                alert('Invalid User');
            }else{
                // history to push dashboard
                // history(`/Login`);
            }
        })
    }

    // const convert = (inputArray)=>{
    //     var outPutArray = [];
    //     inputArray.map(item => {
    //         let childs = outPutArray[item["Parent"]-1] ? outPutArray[item["Parent"]-1]["Child"] : [] 
    //         childs.push(item["Child"])
    //         outPutArray[item["Parent"]-1] = outPutArray[item["Parent"]-1] ? outPutArray[item["Parent"]-1] :{}
    //         outPutArray[item["Parent"]-1]["Parent"] = item["Parent"]
    //         outPutArray[item["Parent"]-1]["Child"] = childs
    //     })
    //     const json = JSON.stringify(outPutArray);
    //     document.getElementById('json-result').innerHTML = json;
    //     console.log(json,"dwqdwq")

    // }

    return(
        <div>
            <div className="home-page container">
                <div className="row justify-content-center align-self-center mt-5 mb-5">
                    <div className="col-md-5 m-3 box">
                        <div className="mt-4 mb-4 text-center">
                            <label className="d-flex mb-3">Upload Xls File</label>   
                            {fileName && (
                                <p>
                                    FileName: <span>{fileName}</span>
                                </p>
                            )

                            }
                            <input id="file_upload" type="file" className="form-control-image pd-image-upload-file float-left" onChange={(e) => handleFile(e)} name="xl-docs" />
                        </div>
                    </div>
                    <div className="col-md-6 m-2">
                        <textarea id="json-result"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Upload;