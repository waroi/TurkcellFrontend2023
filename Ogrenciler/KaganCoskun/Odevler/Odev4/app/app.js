let isEdit = false;
let editProduct;

let forms = document.querySelector('#productForm');

forms.addEventListener('submit',formSubmit);

function formSubmit(e){
    e.preventDefault();
    let validity = formValidation(e);
    if(validity){
      let product = ui.getFormData();
      isEdit?editProduct(product):ui.addNewProduct(product);
    }
    

}

function formValidation(event){
    if (!event.target.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
  
      event.target.classList.add('was-validated')
    return event.target.checkValidity();
    }
       
      
      



const ui = new UserInterface();
const productRequest = new Request('http://localhost:3004/products');
const basketRequest = new Request('http://localhost:3004/basket');
const categoryRequest = new Request('http://localhost:3004/categories');

let modalCategory = document.querySelector('#category'); 
let categoryList = document.querySelector('.categoryList');
let addNewProductBtn = document.querySelector('#addNewProductBtn');
let sortProducts = document.querySelector('#sortProducts');


let productsWrap = document.querySelector('.productsWrap');


ui.loadUi();
ui.loadCategoriesToUi();

let searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('keyup',ui.loadUi);
categoryList.addEventListener('change',ui.loadUi);
sortProducts.addEventListener('change',ui.loadUi);



