
// async

// function getTextFile() {
//   fetch("ornek.txt")
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

// getTextFile();

//json dosyası okuma

function getJsonFile() {
  fetch("users.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

getJsonFile();