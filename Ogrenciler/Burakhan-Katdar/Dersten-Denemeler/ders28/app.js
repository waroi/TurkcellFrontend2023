// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             if(typeof data == "number"){

//                 resolve("Sonucumuz: " + Math.pow(data, 2));

//             } else {
//                 reject("Lütfen Sayı Giriniz");
//             }
//         }, 3000)
//     })
// }

// getData("15")
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

function getJsonData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.map((data) => sonuc.innerHTML += ListElement(data.name))
    })
    .catch((err) => {
        sonuc.innerHTML += ListElement("Hatalı Uzantı")
    });
}
function ListElement(data){
    return `<li>${data}</li>`
}
getJsonData();
