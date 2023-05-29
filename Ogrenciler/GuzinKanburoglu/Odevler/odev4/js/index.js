const container = document.querySelector(".products-row");
const deleteButton = document.querySelector(".deleteButtonField");
const updateButton = document.querySelector(".updateButtonField");
const searchInput = document.getElementById("searchInput");
const orderByProductName = document.getElementById("orderByProductName");
const orderByPrice = document.getElementById("orderByPrice");
const filter = document.querySelector("select");
const renderProducts = async (term, uri) => {
    let url = "http://localhost:3000/products?";

    if (term) {
        url += `q=${term}`;
    }

    if (uri) {
        url = uri;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Bir hata olustu.");
    }

    const products = await response.json();
    let cards = '';
    products.forEach(product => {
        console.log(product.id)
        cards += `<div class="card" style="width: 18rem;"id=${product.id}>
        <img id="picture" src=${product.picture} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="productName" class="card-title">${product.productName}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li id="category" class="list-group-item">category: ${product.category}</li>
          <li id="price" class="list-group-item">${product.price} TL</li>
          <li id="stock" class="list-group-item">${product.stock} adet</li>
        </ul>
        <div class="card-body">
          <a href="" class="card-link"><button id="deleteButton" class="btn btn-danger deleteButton">Delete</button></a>
          <a href="./updateProduct.html?id=${ product.id }" class="card-link"><button class="btn btn-success updateButton">Update</button></a>
          <a href="" class="card-link"><button class="btn btn-primary addToBasket">Add to basket</button></a>
        </div>
      </div>`
    });
 
    container.innerHTML = cards;
}


const deleteProduct = async (e) => {
  let id = e.target.parentElement.parentElement.parentElement.id;
  console.log(e.target.parentElement.parentElement)
    if (e.target.classList.contains("deleteButton")) {
      
        console.log("delete fonk")
        await fetch('http://localhost:3000/products/' + id, {
            method: "DELETE",
        })

        window.location.replace('/index.html');
    }
    e.preventDefault();
}

const searchByTitle = async (e) => {
    e.preventDefault();
    renderProducts(searchInput.value.trim())

}
searchInput.addEventListener("keyup", searchByTitle);

const orderByPriceFunc = async (e) => {
    let url = "http://localhost:3000/products?";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Bir hata olustu.");
    }

    const products = await response.json();
    products.sort(sortPrice);
   
    function sortPrice(a,b){
        a=a.price;
        b=b.price;
        return a-b;
    }

}
class Request {
    async get(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Bir hata oluştu");
      }
      const data = await response.json();
      return data;
    }
  }
  
  const request = new Request();
  
  
const orderByProductNameFunc = async (e) => {
    let url = "http://localhost:3000/products?";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Bir hata olustu.");
    }

    const products = await response.json();
    products.sort(turkcesiralama);

    function turkcesiralama(a, b){
        var atitle = a.productName;
        var btitle = b.productName;
        var alfabe = "AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz0123456789";
        if (atitle.length === 0 || btitle.length === 0) {
            return atitle.length - btitle.length;
        }
        for(var i=0;i<atitle.length && i<btitle.length;i++){
            var ai = alfabe.indexOf(atitle[i]);
            var bi = alfabe.indexOf(btitle[i]);
            if (ai !== bi) {
                return ai - bi;
            }
        }
}
}

const filterFunc = async () => {
    let filteredProducts = [];
    fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => {
            filteredProducts = products.filter(function (product) {
                return product.category == filter.value;
            }
            );
            let cards = '';
            filteredProducts.forEach(product => {
                cards += `<div class="card" style="width: 18rem;"id=${product.id}>
                <img id="picture" src=${product.picture} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 id="productName" class="card-title">${product.productName}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li id="category" class="list-group-item">category: ${product.category}</li>
                  <li id="price" class="list-group-item">${product.price} TL</li>
                  <li id="stock" class="list-group-item">${product.stock} adet</li>
                </ul>
                <div class="card-body">
                  <a href="" class="card-link"><button id="deleteButton" class="btn btn-danger deleteButton">Delete</button></a>
                  <a href="/updateProduct.html?id=${ product.id }" class="card-link"><button class="btn btn-success updateButton">Update</button></a>
                  <a href="" class="card-link"><button class="btn btn-primary addToBasket">Add to basket</button></a>
                </div>
              </div>`
            });
            container.innerHTML = cards;
        })
        .catch((err) => console.log(err));
  }
  
  filter.addEventListener("change", filterFunc);
orderByPrice.addEventListener("click",orderByPriceFunc)
orderByProductName.addEventListener("click",orderByProductNameFunc)
deleteButton.addEventListener("click", deleteProduct);
window.addEventListener("DOMContentLoaded", () => renderProducts());