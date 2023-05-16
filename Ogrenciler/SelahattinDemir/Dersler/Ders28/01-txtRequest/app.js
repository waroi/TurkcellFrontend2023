document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();
  console.log("XMLHttpRequest", xhr);
  // readyState
  xhr.onreadystatechange = function () {
    console.log("readyState", this.readyState);

    if (this.readyState === 4 && this.status === 200) {
      console.log("responseText", this.responseText);
    }
    if (this.readyState === 4 && this.status === 404) {
      console.log("Aradığın veriye ulaşılamadı");
      document.getElementById("veri").textContent =
        "Aradığın veriye ulaşılamadı";
    }
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log("responseTextonLoad", this.responseText);
      document.getElementById("veri").textContent = this.responseText;
    }
  };
  xhr.open("GET", "text.txt", true);
  xhr.send();
});
