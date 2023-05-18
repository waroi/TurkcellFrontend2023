function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("olumlu");
        resolve("Datayı Aldık.");
      } else {
        console.log("olumsuz");
        reject("Datayı Alamadık.");
      }
    }, 3000);
  });
}

getData("test")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
