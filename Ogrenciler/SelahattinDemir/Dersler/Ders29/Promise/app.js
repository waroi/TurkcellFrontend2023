const value = Number(prompt("Lütfen bir sayı giriniz"));

function getAllData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        resolve(data * data);
        let number = document.getElementById("demo");
        number.innerHTML = data * data;
      } else {
        console.log("Lüten sayı giriniz");
        alert("Lüten sayı giriniz");
        reject("Datayı Alamadık");
      }
    }, 500);
  });
}

getAllData(value)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
