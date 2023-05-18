function square(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof number === "number") {
        console.log("Başarılı ");
        resolve(number * number);
      } else {
        console.log("Başarısız");
        reject("Lütfen bir sayı giriniz");
      }
    }, 3000);
  });
}

square("2")
  .then((response) => console.log("sonucunuz: " + response))
  .catch((err) => console.log(err));





