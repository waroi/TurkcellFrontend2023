const productList = document.getElementById('product-list');
const addItemBtn = document.getElementById('addItemBtn');
const confirmEditBtn = document.querySelector(".confirmEditBtn");
const basketBtn = document.getElementById("basketBtn");
const basketItemsList = document.getElementById('basketItemsList');
const buyAll = document.getElementById('buyAll');

addItemBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('addProductName').value.trim();
    const priceValue = document.getElementById('addProductPrice').value.trim();
    const stockValue = document.getElementById('addProductStock').value.trim();
    const categoryValue = document.getElementById('addProductCategory').value;
    const imageValue = document.getElementById('addProductImage').value;

    if (!nameValue || !priceValue || !stockValue || !categoryValue || !imageValue) {
        alert('Please fill in all the fields.');
        return;
    }

    const productData = {
        image: imageValue,
        name: nameValue,
        price: priceValue,
        stock: stockValue,
        category: categoryValue
    };

    // Check if a similar item already exists
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            const existingItem = data.find(item =>
                item.name === productData.name &&
                item.category === productData.category &&
                item.price === productData.price &&
                item.image === productData.image
            );

            if (existingItem) {
                // Increment the stock of the existing item
                existingItem.stock = Number(existingItem.stock) + Number(productData.stock);
                updateExistingItem(existingItem);
            } else {
                // Create a new item
                createNewItem(productData);
            }
        })
        .catch(error => console.error('Failed to check existing items:', error));
});

function updateExistingItem(item) {
    fetch(`http://localhost:3000/products/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Item stock updated:', data);
        })
        .catch(error => console.error('Failed to update item stock:', error));
}

// function createNewItem(item) {
//     fetch('http://localhost:3000/products', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(item),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('New item added:', data);
//         })
//         .catch(error => console.error('Failed to add new item:', error));
// }

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
                        <button class="btn btn-danger text-primary addItemToBasketBtn">Add to Basket</button>
                        <button class="btn btn-danger text-primary editProductBtn" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                        <button class="btn btn-danger text-primary deleteProductBtn">Delete</button>
                        </div>
                        </div>
                        </a>`;

                        productList.appendChild(listItem);
                        updateCategoryList(product.category);
                    });

                    const searchInput = document.getElementById('searchInput');
                    searchInput.addEventListener('keyup', () => {
                        const searchTerm = searchInput.value.trim();

                        const filteredProducts = products.filter(blog => {
                            const name = blog.name.toLowerCase();
                            return name.includes(searchTerm);
                        });
                        displayFilteredProducts(filteredProducts)
                    });
                    displayFilteredProducts(products)
                    sortProducts()
                    resolve(products)
                    filterProducts()
                    cartLength()
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
            } else {
                response = await fetch(`http://localhost:3000/products?category=${selectedCategory}`);
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
                <button class="btn btn-danger text-primary container-fluid addItemToBasketBtn">Add to Basket</button>
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
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            switch (sortValue) {
                case "az":
                    data.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    })
                    break;
                case "za":
                    data.sort((a, b) => {
                        return b.name.localeCompare(a.name);
                    })
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

const offcanvas = document.getElementById("offcanvasRight");
let isBasketOpen = false;
basketBtn.addEventListener("click", () => {
    const request = new Request("http://localhost:3000/atBasket");
    request.get().then((data) => {
        if (isBasketOpen) {
            basketItemsList.innerHTML = "";
        }
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
                    <button class="btn btn-info text-danger removeFromBasket">Remove</button>
                    <button class="btn btn-danger text-primary subtract"><i class="fa-solid fa-minus"></i></button>
                    <button class="btn btn-danger text-primary add-more"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </a>`;
            basketItemsList.appendChild(basketItem);
        })
        isBasketOpen = true
    })
})

function cartLength() {
    const basketCount = document.querySelector('.basket-count');

    fetch('http://localhost:3000/atBasket')
        .then(response => response.json())
        .then(data => {
            basketCount.textContent = data.length;
        })
        .catch(error => console.error('Failed to fetch basket:', error));
}

const closeOffcanvas = document.querySelector('.closeOffcanvas');
closeOffcanvas.addEventListener("click", (e) => {
    e.preventDefault()
    const request = new Request("http://localhost:3000/products");
    request.get()
});

basketItemsList.addEventListener('click', event => {
    event.preventDefault();
    const subtractButton = event.target.closest('.subtract');
    const addButton = event.target.closest('.add-more');
    const removeButton = event.target.closest('.removeFromBasket');

    if (subtractButton) {
        const basketItem = subtractButton.closest('.card');
        const productId = basketItem.querySelector('#productIdInBasket').textContent;
        updateQuantityInBasket(productId, -1);
    }

    if (addButton) {
        const basketItem = addButton.closest('.card');
        const productId = basketItem.querySelector('#productIdInBasket').textContent;
        updateQuantityInBasket(productId, 1);
    }
    if (removeButton) {
        const basketItem = removeButton.closest('.card');
        const productId = basketItem.querySelector('#productIdInBasket').textContent;
        removeFromBasket(productId);
        basketItem.remove(); // Remove the item from the DOM
    }
});
function removeFromBasket(productId) {
    fetch(`http://localhost:3000/atBasket/${productId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                console.log('Item successfully removed from the basket.');
            } else {
                throw new Error('Failed to remove item from the basket.');
            }
        })
        .catch(error => console.error(error));
}

function updateQuantityInBasket(productId, quantityChange) {
    fetch(`http://localhost:3000/atBasket/${productId}`)
        .then(response => response.json())
        .then(item => {
            const newQuantity = item.quantity + quantityChange;
            if (newQuantity >= 0 && newQuantity <= item.stock) {
                item.quantity = newQuantity;
                updateBasketItem(item);
            } else {
                console.log('Invalid quantity change. Stock limit reached.');
            }
        })
        .catch(error => console.error('Failed to fetch item from the basket:', error));
}

function addToBasket(productId) {
    fetch(`http://localhost:3000/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            const { id, name, price, category, image, stock } = data;
            const basketItem = {
                name,
                price,
                category,
                image,
                quantity: 1,
                id,
                stock,
            };
            console.log('Item added to basket:', basketItem);
            postItemToBasket(basketItem);
        })
        .catch(error => console.error('Failed to fetch item details:', error));
}

function postItemToBasket(item) {
    fetch('http://localhost:3000/atBasket')
        .then(response => response.json())
        .then(data => {
            const existingItem = data.find(i => i.id === item.id);
            if (existingItem) {
                const totalQuantity = existingItem.quantity + 1;
                if (totalQuantity <= item.stock) {
                    existingItem.quantity = totalQuantity;
                    updateBasketItem(existingItem);
                } else {
                    alert('Cannot add more items. Stock limit reached.');
                }
            } else {
                createBasketItem(item);
            }
        })
        .catch(error => console.error('Failed to fetch basket:', error));
}

function updateBasketItem(item) {
    fetch(`http://localhost:3000/atBasket/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Item quantity updated in the basket:', data);
        })
        .catch(error => console.error('Failed to update item quantity in the basket:', error));
}

function createBasketItem(item) {
    fetch('http://localhost:3000/atBasket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Item successfully added to basket:', data);
        })
        .catch(error => console.error('Failed to add item to basket:', error));
}

buyAll.addEventListener('click', () => {
    // basketItemsList.innerHTML = "";

    const request = new Request("http://localhost:3000/atBasket");
    request.get().then((data) => {
        data.forEach((product) => {
            const updatedStock = product.stock - product.quantity;
            const updatedProduct = { ...product, stock: updatedStock };

            fetch(`http://localhost:3000/products/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Item stock updated:', data);
                    basketItemsList.innerHTML = "";
                    const cartLengthSpan = document.querySelector('.border.bg-danger.text-primary.border-danger.rounded-circle.fs-6.position-absolute.top-0.left-0');
                    cartLengthSpan.innerText = '0';
                })
                .catch(error => console.error('Failed to update item stock:', error));
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    request
        .get()
        .then((data) => {
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
            editButtons.forEach((editButton) => {
                editButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const listItem = e.target.closest(".card");
                    editProduct(listItem);
                });
            });

            const addItemToBasketBtns = document.querySelectorAll(".addItemToBasketBtn");
            addItemToBasketBtns.forEach((addItemToBasketBtn) => {
                addItemToBasketBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    const listItem = e.target.closest(".card");
                    const productId = listItem.querySelector(".card-text.d-none").textContent;
                    addToBasket(productId);
                });
            });

        })
        .catch((err) => {
            console.log(err);
        });
});


