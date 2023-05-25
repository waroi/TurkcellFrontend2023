const productList = document.getElementById('product-list');
const addToBasketBtn = document.getElementById('addItemBtn');
const confirmEditBtn = document.querySelector(".confirmEditBtn");
const basketBtn = document.querySelector("#basketBtn");
const basketItemsList = document.getElementById('basketItemsList');


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
            console.log('Product added:', response);
        })
        .catch((error) => {
            console.error('Error adding product:', error);
        });
})

class Request {
    constructor(url, name, price, image, category, stock, id) {
        this.url = url
        // this.name = name
        // this.price = price
        // this.image = image
        // this.category = category
        // this.stock = stock
        // this.id = id
    }
    get() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(products => {
                    products.forEach(product => {
                        const listItem = document.createElement('li');
                        listItem.classList = "card flex-row flex-md-column col-11 col-md-5 col-lg-3 py-3";
                        listItem.innerHTML = `
                        <a>
                        <img src="${product.image}" class="card-img-top mx-md-auto ms-1 rounded-5 my-auto container" alt="..." id="productImage"/>
                        <div class="card-body">
                        <h2 class="card-title text-md-center text-white" id="productName">${product.name}</h2>
                        <div class="d-flex flex-md-column">
                        <span>Stock: <a class="card-text pb-3 me-4" id="productStock">${product.stock} </a></span>
                        <span>Price: <a class="card-text pb-3 me-4" data-toggle="tooltip" data-placement="top" title="STELLARCOIN" id="productPrice">${product.price}</a></span>
                        <span></span>Category: <a class="card-text pb-3 me-4" id="productCategory">${product.category}</a></span>
                        <a class="card-text pb-3 me-4 d-none" id="productId">${product.id}</a>
                        </div>
                        <div class="d-flex flex-column mt-3 gap-1 gap-lg-4">
                        <button class="btn btn-danger text-primary container-fluid addItemToBasketBtn">Add to Basket</button>
                        <button class="btn btn-danger text-primary editProductBtn" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                        <button class="btn btn-danger text-primary deleteProductBtn">Delete</button>
                        </div>
                        </div>
                        </a>`;

                        const addToBasketButton = listItem.querySelector('.addItemToBasketBtn');
                        // console.log(addToBasketBtn)
                        addToBasketButton.addEventListener('click', () => {
                            addToBasket(product.id);
                        });
                        productList.appendChild(listItem);
                        updateCategoryList(product.category);
                        displayFilteredProducts(products)
                    });
                    resolve(products)
                    filterProducts()
                    sortProducts()
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
                .then((data) => {
                    // Update the select options with the new category
                    updateCategoryList(productData.category);
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    }
    delete(productId) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/products/${productId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        resolve();
                        console.log("Product deleted:", productId);
                    } else {
                        reject(new Error("Failed to delete product"));
                    }
                })
                .catch((err) => reject(err));
        });
    }
    put(productId, productData) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/products/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            })
                .then((response) => {
                    if (response.ok) {
                        resolve();
                        console.log("Product updated:", productId);
                    } else {
                        reject(new Error("Failed to update product"));
                    }
                })
                .catch((err) => reject(err));
        });
    }

}

const request = new Request("http://localhost:3000/products");

function deleteProduct(productId, listItem) {
    request
        .delete(productId)
        .then(() => {
            console.log("Product deleted:", productId);
            listItem.remove();
        })
        .catch((error) => {
            console.error("Error deleting product:", error);
        });
}

function editProduct(listItem) {
    const productId = listItem.querySelector(".card-text.d-none").textContent;
    const productName = listItem.querySelector("#productName").textContent;
    const productPrice = listItem.querySelector("#productPrice").textContent;
    const productStock = listItem.querySelector("#productStock").textContent;
    const productCategory = listItem.querySelector("#productCategory").textContent;
    const productImage = listItem.querySelector("#productImage").src;

    const nameInput = document.getElementById("editProductName");
    const priceInput = document.getElementById("editProductPrice");
    const stockInput = document.getElementById("editProductStock");
    const categoryInput = document.getElementById("editProductCategory");
    const imageInput = document.getElementById("editProductImage");

    nameInput.value = productName;
    priceInput.value = productPrice;
    stockInput.value = productStock;
    categoryInput.value = productCategory;
    imageInput.value = productImage;

    confirmEditBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const updatedProductData = {
            name: nameInput.value,
            price: priceInput.value,
            stock: stockInput.value,
            category: categoryInput.value,
            image: imageInput.value,
        };

        request
            .put(productId, updatedProductData)
            .then(() => {
                listItem.querySelector("#productName").textContent = updatedProductData.name;
                listItem.querySelector("#productPrice").textContent = updatedProductData.price;
                listItem.querySelector("#productStock").textContent = updatedProductData.stock;
                listItem.querySelector("#productCategory").textContent = updatedProductData.category;
                listItem.querySelector("#productImage").src = updatedProductData.image;
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    });
}

function updateCategoryList(category) {
    const categoryList = document.getElementById('categorySelect');
    const existingCategory = categoryList.querySelector(`option[value="${category}"]`);
    const capitalizedCategory = capitalize(category);

    if (!existingCategory) {
        const listItem = document.createElement('option');
        listItem.classList.add('productCategory');
        listItem.value = category;
        listItem.innerHTML = capitalizedCategory;

        categoryList.appendChild(listItem);
        // console.log(categoryList)
    }
}

function filterProducts() {
    const categoryList = document.getElementById('categorySelect');

    categoryList.addEventListener('change', async (e) => {
        const selectedCategory = e.target.value;
        console.log(selectedCategory)
        try {
            let response;
            if (selectedCategory == "all") {
                response = await fetch(`http://localhost:3000/products`);
                console.log("all1")
            } else {
                response = await fetch(`http://localhost:3000/products?category=${selectedCategory}`);
                console.log("1")
            }
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            displayFilteredProducts(data, selectedCategory);
        } catch (error) {
            console.error(error);
        }
    });
}

function displayFilteredProducts(products, filter) {
    productList.innerHTML = '';

    products.forEach(product => {
        if (!filter || product.category === filter) {
            const listItem = document.createElement('li');
            listItem.classList = "card flex-row flex-md-column col-11 col-md-5 col-lg-3 py-3";
            listItem.innerHTML = `
          <a>
            <img src="${product.image}" class="card-img-top mx-md-auto ms-1 rounded-5 my-auto container" alt="..." id="productImage"/>
            <div class="card-body">
              <h2 class="card-title text-md-center text-white" id="productName">${product.name}</h2>
              <div class="d-flex flex-md-column">
                <span>Stock: <a class="card-text pb-3 me-4" id="productStock">${product.stock} </a></span>
                <span>Price: <a class="card-text pb-3 me-4" data-toggle="tooltip" data-placement="top" title="STELLARCOIN" id="productPrice">${product.price}</a></span>
                <span>Category: <a class="card-text pb-3 me-4" id="productCategory">${product.category}</a></span>
                <a class="card-text pb-3 me-4 d-none" id="productId">${product.id}</a>
              </div>
              <div class="d-flex flex-column mt-3 gap-1 gap-lg-4">
                <button class="btn btn-danger text-primary container-fluid">Add to Basket</button>
                <button class="btn btn-danger text-primary editProductBtn" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                <button class="btn btn-danger text-primary deleteProductBtn">Delete</button>
              </div>
            </div>
          </a>`;
            productList.appendChild(listItem);
        }
    });
}

async function sortProducts() {
    const sortProducts = document.querySelectorAll('#sort');

    sortProducts.forEach((sort) => {
        sort.addEventListener('change', async (e) => {
            const sortValue = e.target.value;
            console.log(sortValue)
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            switch (sortValue) {
                case "az":
                    data.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    })
                    console.log(data)
                    break;
                case "za":
                    data.sort((a, b) => {
                        return b.name.localeCompare(a.name);
                    })
                    console.log(data)
                    break;
                case "asc":
                    data.sort((a, b) => {
                        return a.price - b.price;
                    })
                    break;
                case "desc":
                    data.sort((a, b) => {
                        return b.price - a.price;
                    })
                    break;
            }

            displayFilteredProducts(data);
        });
    });
}
console.log(basketBtn)
basketBtn.addEventListener("click", () => {
    const request = new Request("http://localhost:3000/atBasket");
    request.get().then((data) => {
        data.forEach((product) => {
            const basketItem = document.createElement('li');
            basketItem.classList = "card border-danger mb-3";
            basketItem.innerHTML = `
            <a>
            <img src="${product.image}"
                class="card-img-top mx-md-auto ms-1 rounded-5 my-auto w-25" alt="..." id="productImage" />
            <div class="card-body">
                <h2 class="card-title text-md-center text-white" id="productNameInBasket">${product.name}</h2>
                <div class="d-flex flex-column">
                    <span>Quantity: <a class="card-text pb-3 me-4" id="productQuantityInBasket">${product.quantity}</a></span>
                    <span>Price: STC<a class="card-text pb-3 me-4" data-toggle="tooltip"
                            data-placement="top" title="STELLARCOIN"
                            id="productPriceInBasket">${product.price}</a></span>
                    <span></span>Category: <a class="card-text pb-3 me-4" id="productCategoryInBasket">${product.category}</a></span>
                    <a class="card-text pb-3 me-4 d-none" id="productIdInBasket">${product.id}</a>
                </div>
                <div class="d-flex mt-3 gap-1 gap-lg-4">
                    <button class="btn btn-info text-danger">Remove</button>
                    <button class="btn btn-danger text-primary">Add More</button>
                </div>
            </div>
        </a>`;
            basketItemsList.appendChild(basketItem);
        })

    })
})

function addToBasket(productId) {
    fetch('http://localhost:3000/atBasket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Item added to basket:', data);
            // Perform any additional actions or updates you need
        })
        .catch(error => console.error('Failed to add item to basket:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    request
        .get()
        .then((data) => {
            // console.log(data);

            const deleteButtons = document.querySelectorAll(".deleteProductBtn");
            deleteButtons.forEach((deleteButton) => {
                deleteButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const listItem = e.target.closest(".card");
                    const productId = listItem.querySelector(".card-text.d-none").textContent;
                    deleteProduct(productId, listItem);
                });
            });

            const editButtons = document.querySelectorAll(".editProductBtn");
            // console.log(editButtons);
            editButtons.forEach((editButton) => {
                editButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const listItem = e.target.closest(".card");
                    editProduct(listItem);
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
