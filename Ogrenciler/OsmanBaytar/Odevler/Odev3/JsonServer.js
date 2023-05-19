// class Request {
//     constructor(url) {
//         this.url = url;
//         this.postedData = [];
//     }

//     get() {
//         return new Promise((resolve, reject) => {
//             fetch(this.url)
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((err) => reject(err, "Veri alınamadı."));
//         });
//     }

//     post(data) {
//         const isDataPosted = this.postedData.some((postedItem) => {
//             return JSON.stringify(postedItem) === JSON.stringify(data);
//         });
//         if (isDataPosted) {
//             return Promise.resolve('Data already posted');
//         }
//         return new Promise((resolve, reject) => {
//             fetch(this.url, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((err) => reject(err));
//         });
//     }

//     put(id, data) {
//         return new Promise((resolve, reject) => {
//             fetch(`${this.url}/${id}`, {
//                 method: "PUT",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((err) => reject(err));
//         });
//     }

//     delete(id) {
//         return new Promise((resolve, reject) => {
//             fetch(`${this.url}/${id}`, {
//                 method: "DELETE",
//             })
//                 .then((response) => response.json())
//                 .then(() => resolve("Veri silindi."))
//                 .catch((err) => reject(err));
//         });
//     }
// }

// const request = new Request("http://localhost:3000/users");

// request.get()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// request.post({
//     title: "Yeni Başlık",
//     text: "Yeni içerik",
//     writer: "2000",
//     date: new Date("2022-03-25"),
//     category: "sport",
//     url: "https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/dark%20website%20themes_22023.png?width=595&height=400&name=dark%20website%20themes_22023.png"
// })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


class Request {
    constructor(url) {
        this.url = url;
    }
    async get() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error("bir hata oluştu");
        }
        const data = await response.json();
        return data;
    }

    async post(data) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error("An error occurred.");
        }
        const responseData = await response.json();
        return responseData;

    }
    async put(id, data) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error("An error occurred.");
        }
        const responseData = await response.json();
        return responseData;
    }
    async delete(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("An error occurred.");
        }
        const responseData = await response.json();
        return responseData;
    }
}

const request = new Request("http://localhost:3000/users");

// request.get()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// request.post({
//     title: "Yeni Başlık",
//     text: "Yeni içerik",
//     writer: "2000",
//     date: new Date("2022-03-25"),
//     category: "sport",
//     url: "https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/dark%20website%20themes_22023.png?width=595&height=400&name=dark%20website%20themes_22023.png"
// })
//     .then((responseData) => {
//         console.log('POST:', responseData);
//     })
//     .catch((error) => {
//         console.log('POST Error:', error);
//     });

// request.put(5, { title: '25', text: '25', writer: '25', date: new Date("2022-03-25"), category: '25', url: '25' })
//     .then((responseData) => {
//         console.log('PUT:', responseData);
//     })
//     .catch((error) => {
//         console.log('PUT Error:', error);
//     });