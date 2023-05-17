document.getElementById("btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  let loading = document.getElementById("loading");
  let veri = document.getElementById("veri");

  xhr.onreadystatechange = function (e) {
    switch (this.readyState) {
      case 1:
        loading.innerText = "%25";

        break;
      case 2:
        loading.innerText = "%50";
        break;
      case 3:
        loading.innerText = "%75";
        break;
      case 4:
        loading.innerText = "%100";
        this.status === 200 ? (veri.innerText = xhr.responseText) : "";

        break;
    }
  };
  xhr.open("GET", "text.txt", true);
  xhr.send();
});
