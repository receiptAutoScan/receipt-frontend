import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as xlsx from 'xlsx';
const Upload = () =>{
    const readUploadFile = (e) => {
        console.log("json");
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    return (
        <form>
        <label htmlFor="upload">Upload File</label>
        <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
        />
        </form>
    )
}
export default Upload;