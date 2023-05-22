function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "number") {
        console.log("olumlu");
        resolve(square(data));
      } else {
        console.log("olumsuz");
        reject("Datayı Alamadık");
      }
    }, 3000);
  });
}

function square(x) {
  return(x * x);
}

getData(3)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));








