class Request {
    constructor(url){
        this.url = url;
    }

    async get() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error("Bir hata oluştu");
        }
        const data = await response.json();
        return data;
    }

    async post(data) {
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("İstek başarısız oldu.");
        }
        const responseData = await response.json();
        return responseData;
    }

    async put(id, data) {
        const response = await fetch(this.url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("İstek başarısız oldu.");
        }
        const responseData = await response.json();
        return responseData;
    }

    async delete(id) {
        const response = await fetch(this.url + "/" + id, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("İstek başarısız oldu.");
        }
        const responseData = await response.json();
        return responseData;
    }
}

// let request = new Request();

// // GET request
// request.get("http://localhost:3000/posts")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// POST request
// let postData = {
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik"
// };

// request.post("http://localhost:3000/posts", postData)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// request.get("http://localhost:3000/posts")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
    

// PUT request
// let putData = {
//     userId: 100,
//     title: "Güncellenmiş Başlık",
//     body: "Güncellenmiş İçerik"
// };

// request.put("http://localhost:3000/posts/1", putData)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// DELETE request
// request.delete("http://localhost:3000/posts/1")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

