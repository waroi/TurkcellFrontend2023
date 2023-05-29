const id = new URLSearchParams(window.location.search).get('id');
class Product {
    constructor(productName, price, category,picture,stock) {
        this.productName= productName;
        this.price= price;
        this.category = category;
        this.picture=picture;
        this.stock=stock;
    }
}

const updateProductForm = async() =>{
    fetch(`http://localhost:3000/products/${id}`)
             .then((response) => response.json())
             .then((data) =>
             {
                 document.getElementById("productName").value=data.productName;
                 document.getElementById("price").value = data.price;
                 document.getElementById("stock").value= data.stock;
                 document.getElementById("picture").value =data.picture;
                 document.querySelector('input[name="category"]:checked').value = data.category;
             } 
             )
             .catch((err) => console.log(err));
 }
 
 updateProductForm();
const updateProduct = async (e) =>{
    e.preventDefault();

    const productName = document.getElementById("productName").value
    const price = document.getElementById("price").value
    const stock = document.getElementById("stock").value
    const picture =  document.getElementById("picture").value;
    const category = document.querySelector('input[name="category"]:checked').value;

    const product = new Product(productName,price,category,picture,stock);
    await fetch('http://localhost:3000/products/'+ id, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/index.html');
}


document.getElementById("productForm").addEventListener("submit", updateProduct);