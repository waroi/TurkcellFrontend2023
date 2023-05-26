class ProductRequest {
    constructor(url) {
        this.url = url;
    }
    async get() {
        const response = await fetch(this.url);
        const data = await response.json();

        return data;
    }
    async getById(id) {
        const response = await fetch(this.url + "/" + id);
        const data = await response.json();
        return data;
    }

    async post(data) {
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const resData = await response.json();
        return resData;
    }
    async put(id, data) {
        const response = await fetch(this.url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const resData = await response.json();
        return resData;
    }
    async delete(id) {
        const response = await fetch(this.url + "/" + id, {
            method: "DELETE",
        });
        return "Silme İşlemi";
    }
}
