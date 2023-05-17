// document.getElementById("btn").addEventListener("click", function () {

//   const xhr = new XMLHttpRequest(); // boş bir xml http request objesi oluşturduk
//   console.log(xhr);

//   //onreadystatechange: isteğin durumunu takip eder
//   xhr.onreadystatechange = function () {
//     console.log(this.readyState);
//     // readyState: isteğin durumunu gösterir
//     if (this.readyState == 4 && this.status == 200) {

//       console.log(this.responseText);
//     }
//     if (this.readyState == 4 && this.readyStatus == 4) {
//       console.log("İstek başarısız");
//     }
//   };


//   xhr.onprogress = function () {
//     if (this.status == 200) {
//       console.log("İstek başarılı");
//     }
//   };

//   xhr.open("GET", "data.txt", true); // isteği açtık , true asenkron çalıştırır
//   xhr.send(); // isteği gönderdik
// });

let veri = document.getElementById("veri");
let btn = document.getElementById("btn");
const xhttp = new XMLHttpRequest();
btn.addEventListener("click", function () {
  xhttp.onreadystatechange = function () {
    console.log("buradayım");
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      veri.textContent += this.responseText;
    }
    if (this.readyState == 4 && this.status == 404) {
      console.log("veri alınamadı");
    }
  }
  xhttp.open("GET", "data.txt", true);
  xhttp.send();
})