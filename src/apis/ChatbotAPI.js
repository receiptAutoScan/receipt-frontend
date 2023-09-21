export function sendChatToServer(chat) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/chatbot?message=${chat}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(json => {
                resolve(json.text());
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })
}