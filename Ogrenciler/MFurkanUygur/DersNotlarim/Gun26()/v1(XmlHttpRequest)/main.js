document.getElementById("btn").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // if (this.readyState === 4 && this.status === 200) {
        //     document.getElementById("text").textContent = this.responseText
        // }
        this.onload = function () {
            if (this.status === 200) {
                document.getElementById("text").textContent = this.responseText
            }
        }
    }
    xhr.open("GET", "text.txt", true)
    xhr.send();
})