// Grup çalışması Ekin Mete-Mücahit

const input = document.getElementById("input");

const value = parseFloat(input.value);

btn.addEventListener("click", () => {
  function makeCube(value) {
    return new Promise(function (resolve, reject) {
      console.log(typeof value);
      setTimeout(() => {
        if (typeof data == "number") {
          resolve(value * value * value + " başarılı işlem");
        } else {
          reject("Number gir bro!!");
        }
      }, 1000);
    });
  }

  makeCube(value)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
});
