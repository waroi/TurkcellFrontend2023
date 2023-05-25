const productList = document.getElementById('product-list');
const addToBasketBtn = document.getElementById('addItemBtn');

addToBasketBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = document.getElementById('addProductName').value.trim();
    const priceValue = document.getElementById('addProductPrice').value.trim();
    const stockValue = document.getElementById('addProductStock').value.trim();
    const categoryValue = document.getElementById('addProductCategory').value;
    const imageValue = document.getElementById('addProductImage').value;

    const productData = {
        image: imageValue,
        name: nameValue,
        price: priceValue,
        stock: stockValue,
        category: categoryValue
    };
    request
        .post(productData)
        .then((response) => {
            console.log('Blog added:', response);
        })
        .catch((error) => {
            console.error('Error adding blog:', error);
        });
})

class Request {
    get() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/products')
                .then(response => response.json())
                .then(products => {
                    products.forEach(product => {
                        const listItem = document.createElement('li');
                        listItem.classList = "card flex-row flex-md-column col-11 col-md-5 col-lg-3 py-3";
                        listItem.innerHTML = `
                        <a>
                                    <img src="${product.image}" class="card-img-top mx-md-auto ms-1 rounded-5 my-auto container" alt="..." />
                                    <div class="card-body">
                                        <h2 class="card-title text-md-center text-white">${product.name}</h2>
                                        <div class="d-flex flex-md-column">
                                            <a class="card-text pb-3 me-4"> Stock: ${product.stock} </a>
                                            <a class="card-text pb-3 me-4" data-toggle="tooltip" data-placement="top" title="STELLARCOIN">Price: STC${product.price}</a>
                                            <a class="card-text pb-3 me-4">Category: ${product.category}</a>
                                        </div>
                                        <div class="d-flex flex-column mt-3 gap-1 gap-lg-4">
                                            <button class="btn btn-danger text-primary container-fluid">Add to Basket</button>
                                            <button class="btn btn-danger text-primary" class="editProductBtn">Edit</button>
                                            <button class="btn btn-danger text-primary" class="deleteProductBtn">Delete</button>
                                        </div>
                                    </div>
                                </a>`;
                        productList.appendChild(listItem);
                    });
                })
                .catch((err) => reject(new Error("Satılacak Ürün Bulunamadı.")));

        })
    }
    post(productData) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        })
    }
    delete(productId) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/blogs/${productId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        resolve();
                        console.log("Blog deleted:", blogId);
                    } else {
                        reject(new Error("Failed to delete blog"));
                    }
                })
                .catch((err) => reject(err));
        });
    }
    put(productData) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/blogs/${productData.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then((response) => {
                    if (response.ok) {
                        resolve();
                        console.log("Blog updated:", blogId);
                    } else {
                        reject(new Error("Failed to update blog"));
                    }
                })
                .catch((err) => reject(err));
        })
    }
}
// Fetch product data from json-server

const request = new Request();
request
    .get("http://localhost:3000/blogs")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
