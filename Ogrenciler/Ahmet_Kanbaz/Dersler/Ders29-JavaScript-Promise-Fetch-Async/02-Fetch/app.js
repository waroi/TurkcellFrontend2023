//Fetch ile local bir txt dosyasından veri alma.
// function getDatawithFetch4Txt() {
//   fetch('text.txt')
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// getDatawithFetch4Txt();

//Fetch ile local bir json dosyasından veri alma.
// function getDatawithFetch4JSON() {
//   fetch('users.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// getDatawithFetch4JSON();

//Fetch ile API'den veri alma

function getDatawithFetch4API() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

getDatawithFetch4API();