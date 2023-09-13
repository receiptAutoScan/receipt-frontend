import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx'
import axios from 'axios'
import { excelUpload } from '../../apis/APIs';
const Upload = () =>{ 
    const [fileName, setFileName] = useState(null);


    const handleFile = async (e)=>{

        if(e.target.value.substr(e.target.value.length-4) === 'xlsx' || e.target.value.substr(e.target.value.length-3) === 'xls'){

            const file = e.target.files[0];
            
            const data = await file.arrayBuffer();
            const workbook = XLSX.readFile(data);
            setFileName(file.name);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            const json = JSON.stringify(jsonData);
            await excelUpload(json);
        }else{
            alert("맞지않는 파일 형식입니다")
        }
        
    }

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
                            <input name="fileInput" id="file_upload" type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="form-control-image pd-image-upload-file float-left" onChange={(e) => handleFile(e)} />
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