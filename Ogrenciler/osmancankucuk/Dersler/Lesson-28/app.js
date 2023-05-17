function getSquare(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num * num);
      } else {
        console.log(typeof num);
        reject("Lutfen sayi giriniz");
      }
    }, 3000);
  });
}
getSquare(5)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
