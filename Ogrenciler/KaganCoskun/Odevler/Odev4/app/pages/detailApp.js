let productId;

const productRequest = new Request("http://localhost:3004/products");
const basketRequest = new Request("http://localhost:3004/basket");
const categoryRequest = new Request("http://localhost:3004/categories");
const basketUi = new BasketUi();

const productDetailWrap = document.querySelector("#productDetail");
const detailUi = new DetailUI();

    let editBtn = document.querySelector("#editBtn");
    let deleteBtn = document.querySelector("#deleteBtn");
    let modalCategory = document.querySelector('#category'); 
    let form = document.querySelector("#productForm");

     
    
    detailUi.loadCategoriesToUi()
    basketUi.basketCount();
    basketUi.loadBasketToUi();

    
    
    async function getParam() {
        let urlString = window.location.href.toLocaleLowerCase();
        let url = new URL(urlString);
        let id = url.searchParams.get("id");
        let data = await productRequest.getById(id)//.then(data =>loadUi(data));
        return data
    }
    
    
    
    
    
    async function loadUi(){
        let data = await getParam();
        const productDetail = new ProductDetail(data);
        productDetail.createProductDetail();

    }

    

    form.addEventListener("submit",formSubmit);


    async function formSubmit(e){
        e.preventDefault();
        let data = await getParam();
        let formData = detailUi.getFormData(data.id);

        await detailUi.editProduct(data.id,formData).then(()=>loadUi()).then(()=>toasty("success","Ürün Başarıyla Güncellendi"));

    }

    loadUi()












window.addEventListener("DOMContentLoaded",getParam());

