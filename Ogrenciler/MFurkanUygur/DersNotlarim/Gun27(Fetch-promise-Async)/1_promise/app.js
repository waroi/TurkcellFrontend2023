function getSquare(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(`Karesi: ${num * num}`);
            } else {
                reject("Veri türü doğru değil.");
            }
        }, 2000);
    });
}

getSquare(6)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
