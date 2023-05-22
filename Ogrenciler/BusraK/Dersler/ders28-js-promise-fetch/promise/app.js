function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof data === "number") {
        // Olumlu
        console.log("number");
        resolve(data * data);
      } else {
        // Olumsuz
        console.log("olumsuz");
        reject("datayi alamadik");
      }
    }, 1000);
  });
}

getData("hi")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
