import axios from 'axios';

export async function uploadReceiptImage(files) {
    const url = "http://localhost:8080/expense";
    try {
        await axios.post(url, files, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        console.error(error);
        alert("영수증 업로드에 실패했습니다.")
    }
}