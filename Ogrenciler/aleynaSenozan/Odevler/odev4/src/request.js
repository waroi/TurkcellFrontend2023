class Requestv2 {
    constructor(url) {
        this.url = url;
    }

    async get() {
        const response = await fetch(this.url);
        const responseData = await response.json();

        return responseData;
    }

    async post(product) {
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const responseData = await response.json();
        return responseData;
    }

    
    async put(id, data) {
        const response = await fetch(this.url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const responseData = await response.json();
        return responseData;
    }


    async delete(id) {
        const response = await fetch(this.url + "/" + id, {
            method: "DELETE",
        });
        return "Ürün Silindi";
    }

    async getOne(id) {
        const response = await fetch(this.url + "/" + id);
        const responseData = await response.json();
    
        return responseData;
    }
    
}