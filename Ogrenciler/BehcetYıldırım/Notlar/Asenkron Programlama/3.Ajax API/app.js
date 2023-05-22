document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status) {
      let deger = Number(document.getElementById("amount").value);
      let kur = JSON.parse(this.responseText);
      const kurTr = kur.rates.TRY;

      document.getElementById("result").value = deger * kurTr;
    }
  };
  xhr.open("GET", "https://api.exchangerate.host/latest", true);
  xhr.send();
}
