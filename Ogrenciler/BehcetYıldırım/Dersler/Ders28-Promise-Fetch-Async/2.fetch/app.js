function getTextFile() {
  fetch("ornek.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
}

getTextFile();

function getJsonFile() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
}

getJsonFile();

function getApi() {
  fetch("https://api.exchangerate.host/latest")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
}

getApi();

//-----------------------------------------------------------
