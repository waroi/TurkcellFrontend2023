let veri = document.getElementById("veri");
let btn = document.getElementById("btn");
const xhttp = new XMLHttpRequest();
btn.addEventListener("click", function () {
    xhttp.onreadystatechange = function () {
        console.log("buradayım");
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            veri.innerHTML = this.responseText;

        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("veri alınamadı");
        }
    }
    xhttp.open("GET", "veri.txt", true);
    xhttp.send();
})
