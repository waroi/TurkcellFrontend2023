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


request.get()
    .then((data) => {
        UI.loadSearchedUI(data);
        UI.loadLatestNews(data);
    })
    .catch((err) => console.log(err));

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