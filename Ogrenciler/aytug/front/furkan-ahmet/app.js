function getData() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((json) => {
			let userList = json.map((user) => `<tr>${user.id}</tr><tr>${user.name}</tr>`);
			console.log(userList);
			let renderList = document.getElementById("userList");
			renderList.innerHTML += userList;
		})
		.catch((error) => console.log(error));
}

getData();
