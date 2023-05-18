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

// function getDatawithFetch4API() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// getDatawithFetch4API();

// class Request {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error, 'Veri Alınamadı'));
//     });
//   }
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-type': 'application/json;'
//         },
//       })
//       .then((response) => response.json())
//       .then((resData) => resolve(resData))
//       .catch((error) => reject(error));
//     });
//   }
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-type': 'application/json;',
//         },
        
//       })
//       .then((response) => response.json())
//       .then((resData) => resolve(resData))
//       .catch((error) => reject(error));
//     });
//   }
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE',
//       })
//       .then((response) => response.json())
//       .then(() => resolve('Veri Silindi.'))
//       .catch((error) => reject(error));
//     });
//   }
// }

// const request = new Request();

// request.get('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   });

// request.post('https://jsonplaceholder.typicode.com/posts', {
//   userId: 100,
//   title: 'Yeni Başlık',
//   body: 'Yeni İçerik'
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// request.put('https://jsonplaceholder.typicode.com/posts/1', {
//   userId: 100,
//   title: 'PUT İçin Yeni Başlık',
//   body: 'PUT İçin Yeni İçerik'
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// request.delete('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

class Request {
  constructor(url) {
    this.url = url;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((resData) => resolve(resData))
        .catch((error) => reject(error));
    });
  }
  post(data) {
        return new Promise((resolve, reject) => {
          fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json;'
            },
          })
          .then((response) => response.json())
          .then((resData) => resolve(resData))
          .catch((error) => reject(error));
        });
      }
  put(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: {
          'Content-type': 'application/type;',
        },
      })
      .then((response) => response.json())
      .then((resData) => resolve(resData))
      .catch((error) => reject(error));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + '/' + id, {
        method: 'DELETE',
      })
      .then((response) => response.json())
      .then(() => resolve(`${id} id'li Veri Silindi.`))
      .catch((error) => reject(error));
    });
  }
}

const request = new Request('https://jsonplaceholder.typicode.com/posts/');

// request.get()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// request.post({
//   userId: 100,
//   title: 'Yeni Başlık',
//   body: 'Yeni İçerik'
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// request.put(1, {
//   userId: 100,
//   title: 'PUT için yeni başlık',
//   body: 'Put için yeni içerik.'
// })
// .then((response) => console.log(response))
// .catch((error) => console.log(error));

request.delete(1)
.then((response) => console.log(response))
.catch((error) => console.log(error));