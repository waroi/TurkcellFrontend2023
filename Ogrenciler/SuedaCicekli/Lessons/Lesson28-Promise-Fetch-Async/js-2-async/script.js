
// async

// function getTextFile() {
//   fetch("ornek.txt")
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

// getTextFile();

//json dosyası okuma

// function getJsonFile() {
//   fetch("users.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

// getJsonFile();

//API ile çalışmak

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
// getApi();


//class ile çalışmak

// class Request {
//   //get request : veri çekme işlemi yapıyor
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err, "Veri çekme işlemi başarısız"));
//     })
//   }

//   //post request : veri ekleme işlemi yapıyor
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data), //stringe çeviriyoruz
//         headers: {
//           "Content-type": "application/json;"
//         }
//       })
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     })
//   }

//   //put request : güncelleme işlemi yapıyor
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         body: JSON.stringify(data), //stringe çeviriyoruz
//         headers: {
//           "Content-type": "application/json;"
//         }
//       })
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     })
//   }

//   //delete request: veri silme işlemi yapıyor
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE'
//       })
//         .then(response => resolve("Veri silme işlemi başarılı"))
//         .catch(err => reject(err));
//     })
//   }
// }

// const request = new Request();

// request
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));


// //101. id'li postu getiriyor
// request
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 100, //biz user id verdik o bize id döndüğün için id:101 oldu
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     userId: 100, //put ile sonuna bir id ekledik
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



