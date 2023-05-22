document.getElementById("btn").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = xhr.responseText;
        }
    };
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
        }
    }
    xhr.open("GET", "text.txt", true);
    xhr.send();
    xhr.onerror = function () {
        console.log(xhr.statusText);
    }
    console.log(xhr);
});