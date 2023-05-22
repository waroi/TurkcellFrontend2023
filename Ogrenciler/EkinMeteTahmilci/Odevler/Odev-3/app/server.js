class BlogRequest {
    constructor(){
        this.url = "http://localhost:3000/recipes";
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
        ui.addBlogToUI(responseData);
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
