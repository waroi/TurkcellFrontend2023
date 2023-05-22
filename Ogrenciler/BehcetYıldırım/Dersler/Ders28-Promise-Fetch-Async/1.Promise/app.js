function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("data is string");
        resolve("datayı aldım");
      } else {
        console.log("data is not string");
        reject("datayı alamadık");
      }
    }, 1000);
  });
}

getData("test") // string ise
  .then(function (e) {
    console.log(e);
  })
  .catch(function (a) {
    console.log(a);
  });

getData(4) // string değil ise
  .then(function (e) {
    console.log(e);
  })
  .catch(function (a) {
    console.log(a);
  });
