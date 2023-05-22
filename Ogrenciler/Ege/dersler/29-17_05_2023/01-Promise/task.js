function square(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") resolve(data * data);
      else reject("Number değil.");
    }, 1000);
  });
}

square(2)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
