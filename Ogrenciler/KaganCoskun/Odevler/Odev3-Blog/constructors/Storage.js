class Storage{
    constructor(url){
        this.url = url;
    }
    async getAll(){
        let response = await fetch(this.url);
        let data = await response.json();
        return data;
    }
    async get(id){
        let response = await fetch(`${this.url}/${id}`);
        let data = await response.json();
        return data;
    }
    async createBlog(data){
        let response = await fetch(this.url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });       
        let responseData = await response.json();
        return responseData;
    }
    async update(id,data){
        let response = await fetch(`${this.url}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let responseData = await response.json();
        return responseData;
    }
    async deleteBlog(id){
        let fetchOpt = { method: "delete"};
         let response = await fetch(`${this.url}/${id} `, fetchOpt);
         return response;
    }  

    async getCategories(){
        let response = await fetch(`http://localhost:3004/categories`);
        let data = await response.json();
        return data;
    }
    
    async getCategoriesById(id){
        let response = await fetch(`http://localhost:3004/categories/${id}`);
        let data = await response.json();
        return data;
    }

    async updateClap(id,clap){
        let response = await fetch(`${this.url}/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clap: clap
                })
        });
        let responseData = await response.json();
        return responseData;
    }
}