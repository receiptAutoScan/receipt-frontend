import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUploadComponent() {

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>파일을 여기에 드롭해주세요</p>:
                    <p>파일을 Drag & Drop 하거나 클릭해서 선택해주세요</p>
            }
        </div>
    );
}

module.exports = FileUploadComponent;