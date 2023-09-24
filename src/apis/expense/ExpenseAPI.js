
export async function getExpenses() {

    return new Promise((resolve, reject) => {
        // const url = "http://localhost:8080/expense";

        const result = fetch("http://localhost:8080/expense", {
            method: "GET",
        }).then(res => res.json())
        .catch(error => console.log(error));

        resolve(result);
    });


}