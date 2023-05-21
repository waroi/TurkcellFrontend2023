document.getElementById("btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  // xhr.onload = function () {
  //   if (this.status === 200) {
  //     document.getElementById("veri").textContent = this.responseText;
  //   }
  // };
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      document.getElementById("veri").textContent = this.responseText;
    }
    if (this.status === 404 && this.readyState === 4) {
      console.log("Sayfa bulunamadı");
    }
  };
  xhr.open("GET", "textt.txt", true);
  xhr.send();
});
