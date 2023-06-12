document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "users.json", true);
	xhr.onload = function () {
		let list = document.getElementById("employees");
		if (this.status === 200) {
			const parsedData = JSON.parse(this.responseText);
			parsedData.forEach(function (employee) {
				list.innerHTML += `<tr>
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>${employee.salary}</td>
                          </tr>`;
			});
		} else {
			console.error("Bir hata oluştu");
		}
	};
	xhr.send();
}
