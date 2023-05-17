function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("olumlu");
        resolve("Datayı aldık");
      } else {
        // Olumsuz
        console.log("olumsuz");
        reject("Datayı alamadık");
      }
    }, 3000);
  });
}

//datayı aldık , string
getData("Merhaba")
  //olumlu ise
  .then((response) => console.log(response))
  //olumsuz ise
  .catch((err) => console.log(err));

// //datayı alamadık
// getData(5)
//   //olumlu ise
//   .then((response) => console.log(response))
//   //olumsuz ise
//   .catch((err) => console.log(err));