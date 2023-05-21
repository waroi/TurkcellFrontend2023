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

// function getJsonData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       data.map((data) => sonuc.innerHTML += ListElement(data.name))
//     })
//     .catch((err) => {
//         sonuc.innerHTML += ListElement("Hatalı Uzantı")
//     });
// }
// function ListElement(data){
//     return `<li>${data}</li>`
// }
// getJsonData();

class Request {
    constructor(url){
        this.url = url
        
    };

  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve("PUT "+ data))
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch( this.url+id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request("https://jsonplaceholder.typicode.com/posts/");


// request
// .put(5, {
//   userId: 100,
//   title: "Yeni Başlık",
//   body: "Yeni İçerik",
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// request
//   .post({
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));




request
.delete(1)
.then((data) => console.log(data))
.catch((err) => console.log(err));

// request
//   .get()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });