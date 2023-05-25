class Http {

    //Olanı çekme
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Yeni ekleme
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    //İstenileni silme
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        });
        const resData = await "Blog Deleted";
        return resData;
    }

    //Var olanı güncelleme
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }
}