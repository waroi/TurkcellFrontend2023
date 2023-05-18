document.getElementById("getData").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    let list = document.getElementById("displayData");
    xhr.onload = function () {
        if (this.status === 200) {
            const rawData = JSON.parse(this.responseText);
            rawData.forEach(e => {
                list.innerHTML += `
                <tr>
                    <td>${e.name}</td>
                    <td>${e.department}</td>
                    <td>${e.salary}</td>
                </tr>
                `
            });
        }
    }
    xhr.send()
})