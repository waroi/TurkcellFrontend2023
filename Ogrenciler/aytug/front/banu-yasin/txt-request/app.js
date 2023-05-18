document.getElementById("btn").addEventListener("click", function () {
	const xhr = new XMLHttpRequest();
	console.log(xhr);

	xhr.onreadystatechange = function () {
		console.log(this.readyState);
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(this.responseText);
			// document.getElementById("veri").textContent = this.responseText;
		}
		if (this.readyState === 4 && xhr.status === 404) {
			console.log("Not Found");
			document.getElementById("veri").textContent = "Aradığınız veriye ulaşılamadı";
		}
	};

	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
			document.getElementById("veri").textContent = this.responseText;
		}
	};

	xhr.open("GET", "text.txt", true);
	xhr.send();
});
