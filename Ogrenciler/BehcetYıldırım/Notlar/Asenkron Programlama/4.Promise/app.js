// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject("lütfen bir string giriniz");
//       }
//     }, 2000);
//   });
// }

// getData(24)
//   .then(function (response) {
//     console.log("gelen değer " + response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen string bir değer giriniz"));
      }
    }, 2000);
  });
}

addTwo(10)
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err));
// Promise yapısında bir adet catch kullanabiliriz. Ama birden çok then kullanabiliriz.
