import axios from 'axios';

export async function getExpenses() {

    return new Promise((resolve, reject) => {
        const url = "http://localhost:8080/expense";

        const result = fetch(url, {
            method: "GET",
        }).then(res => res.json())
        .catch(error => console.log(error));

        resolve(result);
    });


}