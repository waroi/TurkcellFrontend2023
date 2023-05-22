function getData(data){
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if(typeof data == "string"){
        console.log("olumlu");
        resolve("datayı aldık");
      }
      else {
        console.log("olumsuz");
        reject("datayı alamadık");
      }
    }, 1000);
  })
}

getData("test").then((response) => console.log(response)).catch((error) => console.log(error)); /*olumlu - datayı aldık*/
getData(4).then((response) => console.log(response)).catch((error) => console.log(error));/*olumsuz - datayı alamdık*/