document.getElementById("change").addEventListener("click", change);
function change() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987"
  );
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let rate = response.rates.TRY;
      let amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * rate;
    }
  };
  xhr.send();
}
