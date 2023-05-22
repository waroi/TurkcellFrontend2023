document.getElementById("button").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Sıkıntı yok veri geliyor.");
    }
  };
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        "app"
      ).innerHTML += `<div class="col-lg-3 waviy"><span style="--i:${Math.floor(
        Math.random() * 5
      )}">${this.responseText}</span></div>`;
    } else if (this.status === 404) {
      document.getElementById("app").innerHTML = "Veri bulunamadı.";
    }
  };
  xhr.open("GET", "test.txt", true);
  xhr.send();
});
