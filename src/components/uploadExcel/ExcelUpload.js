import React, { useCallback,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx'
import axios from 'axios'
import { excelUpload } from '../../apis/APIs';
import style from "../../css/fileUploadComponent.module.css"
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import ExcelData from "./ExcelData";
import "../../css/excelData.css"

function Upload(){ 
    const [fileName, setFileName] = useState(null);
    const [excelState,setExcelState] = useState(true);
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {        
        if(rejectedFiles.length > 0) {
            alert("엑셀 파일만 업로드 가능합니다.");
            return;
        }
        acceptedFiles.forEach((file) => {
            console.log(acceptedFiles.length);
            console.log(acceptedFiles[0]);

            const reader = new FileReader();
            const rABS = !!reader.readAsBinaryString;
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')

            reader.onload = (e) =>{
                const file = e.target.result;
                setFileName(file.name);
                var workbook = XLSX.read(file, { type: rABS ? "binary" : "array" })
                var sheet_name_list = workbook.SheetNames[0];            
                const worksheet = workbook.Sheets[sheet_name_list];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                const json = JSON.stringify(jsonData);
                setExcelState(false);
                excelUpload(json);
            }

                if (rABS){
                    reader.readAsBinaryString(file)
                    excelState = false
                }else{
                    reader.readAsArrayBuffer(file)
                    excelState = true
                }
            }
        )
        

    }, []);

    

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ 
        onDrop,
        accept: {
            'application/vnd.ms-excel': ['.xls', '.xlsx',],
        },
        noClick: true,
        noKeyboard: true
     });
        return (
            <div className='w100'>                
                <div className={ `${style.fileUploadBox}` } {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <FontAwesomeIcon icon={faSquarePlus} size="7x" style={{marginTop : "150px", cursor : "pointer"}} onClick={open}/>
                    {
                        isDragActive ?
                            <p className={`${style.text}`}>파일을 여기에 드롭해주세요</p>:
                            <p className={`${style.text}`}>파일을 Drag & Drop 하거나 클릭해서 선택해주세요</p>
                    }
                </div>
            </div>
        )

    // const handleFile = async (e)=>{

    //     if(e.target.value.substr(e.target.value.length-4) === 'xlsx' || e.target.value.substr(e.target.value.length-3) === 'xls'){

    //         const file = e.target.files[0];
            
    //         const data = await file.arrayBuffer();
    //         const workbook = XLSX.readFile(data);
    //         setFileName(file.name);
    //         const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    //         const jsonData = XLSX.utils.sheet_to_json(worksheet);
    //         const json = JSON.stringify(jsonData);
    //         await excelUpload(json);
    //     }else{
    //         alert("맞지않는 파일 형식입니다")
    //     }
        
    // }

    // return(
    //     <div>
    //         <div className="home-page container">
    //             <div className="row justify-content-center align-self-center mt-5 mb-5">
    //                 <div className="col-md-5 m-3 box">
    //                     <div className="mt-4 mb-4 text-center"> 
    //                         {fileName && (
    //                             <p>
    //                                 FileName: <span>{fileName}</span>
    //                             </p>
    //                             )

    //                         }
    //                         <input name="fileInput" id="file_upload" type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="form-control-image pd-image-upload-file float-left" onChange={(e) => handleFile(e)} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default Upload;