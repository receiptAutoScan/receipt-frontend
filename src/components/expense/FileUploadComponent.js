import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import style from "../../css/fileUploadComponent.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { uploadReceiptImage } from '../../apis/expense/ReceiptUploadAPI';


function FileUploadComponent() {

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {        
        if(rejectedFiles.length > 0) {
            alert("이미지 파일만 업로드 가능합니다.");
            return;
        }

        console.log(acceptedFiles.length);

        const formData = new FormData();

        for(let i = 0; i < acceptedFiles.length; i++) {
            formData.append(`images`, acceptedFiles[i]);
        }

        uploadReceiptImage(formData);

        alert("영수증 데이터가 업로드 되었습니다.");
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ 
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg'],
        },
        noClick: true,
        noKeyboard: true
     });

    return (
        <div className={ `${style.fileUploadBox}` } {...getRootProps()}>
            <input {...getInputProps()}/>
            <FontAwesomeIcon icon={faSquarePlus} size="7x" style={{marginTop : "150px", cursor : "pointer"}} onClick={open}/>
            {
                isDragActive ?
                    <p className={`${style.text}`}>파일을 여기에 드롭해주세요</p>:
                    <p className={`${style.text}`}>파일을 Drag & Drop 하거나 클릭해서 선택해주세요</p>
            }
        </div>
    );
}

export default FileUploadComponent;