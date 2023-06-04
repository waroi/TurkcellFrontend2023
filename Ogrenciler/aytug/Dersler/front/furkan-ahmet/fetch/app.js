function getData() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((json) => {
			let userList = json.map((user) => `<tr><td>${user.id}</td><td>${user.name}</td></tr>`);
			let renderList = document.getElementById("userList");
			renderList.innerHTML = userList.join("");
		})
		.catch((error) => console.log(error));
}

getData();
