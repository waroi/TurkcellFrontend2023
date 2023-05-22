function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        resolve(data * data);
      } else {
        reject("number değil");
      }
    }, 1000);
  });
}

getData(3)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
//derste grup çalışması ödevi
