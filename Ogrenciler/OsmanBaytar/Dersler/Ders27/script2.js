document.getElementById("button").addEventListener("click", getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "user.json", true);
    xhr.onload = function () {
        let list = document.getElementById("tbody");
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);

        }
    }
}