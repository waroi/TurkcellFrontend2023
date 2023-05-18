// function getData(data) {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         console.log("data is string");
//         res("get the data");
//       } else {
//         console.log("data is not string");
//         rej("Cannot get the data");
//       }
//     }, 1000);
//   });
// }
// getData("123")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function square(x) {
  return x * x;
}

function getSquare(num) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      if (typeof num === "number") {
        console.log("data is number");
        res(square(num));
      } else {
        console.log("data is not number");
        rej("Cannot get the data");
      }
    }, 1000);
  });
}
getSquare(123)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
