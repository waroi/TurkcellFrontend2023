class Request{
    constructor(url){
        this.url=url;
    }
    async getAll(){
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
    async getById(id){
        const response = await fetch(`${this.url}/${id}`);
        const data = await response.json();
        return data;
    }
    async getByQuery(query){
        const response = await fetch(`${this.url}?${query}`);
        const data = await response.json();
        return data;
    }
    async post(data){
        console.log(data)
        const response = await fetch(this.url,{
            method:'POST',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }
    async put(id,data){
        const response = await fetch(`${this.url}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
        });
        const responseData = await response.json();
        return responseData;
    }

    async patch(id,data){
        const response = await fetch(`${this.url}/${id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }


    async delete(id){
        const response = await fetch(`${this.url}/${id}`,{
            method:'DELETE'
        });
        return 'Veri silindi';
    }
}