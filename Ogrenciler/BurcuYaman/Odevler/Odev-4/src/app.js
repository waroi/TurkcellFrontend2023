const addProductButton = document.querySelector("#addProductButton");
const productNameInput = document.querySelector("#productNameInput");
const productCategoryInput = document.querySelector("#productCategoryInput");
const productDescriptionInput = document.querySelector("#productDescriptionInput");
const productAmountInput = document.querySelector("#productAmountInput");
const productPriceInput = document.querySelector("#productPriceInput");
const productUrlInput = document.querySelector("#productUrlInput");
const productList = document.querySelector("#productList");
const searchInput = document.querySelector('#searchInput');
const categories = document.querySelector('.categories');
const sortAz = document.querySelector('#a-z');
const sortZa = document.querySelector('#z-a');
const artan = document.querySelector('#artan');
const azalan = document.querySelector('#azalan');
const detailButton = document.querySelector("#detailButton");
const detailModal = document.querySelector("#detailModal");
const cartButton = document.querySelector("#cart");


const productRequest = new ProductRequest("http://localhost:3000/products");
const cartRequest = new ProductRequest("http://localhost:3000/carts");
const ui = new UI();
const allProducts = [];
const productsInCart = [];
console.log(allProducts);
console.log(productsInCart);

getAllItems();
eventListeners();

function eventListeners() {
    addProductButton.addEventListener('click', addProduct);
    productList.addEventListener('click', deleteProduct);
    productList.addEventListener('click', updateProduct);
    searchInput.addEventListener('keyup', searchProduct);
    categories.addEventListener('click', filterProduct);
    sortAz.addEventListener('click', sortProductAz);
    sortZa.addEventListener('click', sortProductZa);
    artan.addEventListener('click', sortProductArtan);
    azalan.addEventListener('click', sortProductAzalan);
    productList.addEventListener('click', detailProduct);
    cartButton.addEventListener('click', goToCart);

}

function getAllItems() {
    cartRequest
        .get()
        .then((carts) => {
            carts.map((cart) => {
                if (productsInCart.includes(cart) === false) {
                    productsInCart.push(cart);
                }
            })
        }
        )

    productRequest
        .get()
        .then((products) => {
            ui.loadAllProductsToUI(products, productsInCart);
            products.map((product) => {
                allProducts.push(product);
            })
        })
        .catch((err) => {
            console.log(err);
        });

}

function addProduct(e) {
    const productName = productNameInput.value.trim();
    const productCategory = productCategoryInput.value.trim();
    const productDescription = productDescriptionInput.value.trim();
    const productAmount = productAmountInput.value.trim();
    const productPrice = productPriceInput.value.trim();
    const productUrl = productUrlInput.value.trim();

    const productNames = allProducts.map((product) => {
        return product.name;
    })

    if (productName === "" || productCategory === "" || productDescription === "" || productAmount === "" || productPrice === "" || productUrl === "") {
        alert("Lütfen tüm alanları doldurunuz.");
    } else if (productNames.includes(productName)) {
        alert("Bu ürün zaten var. Ürünü Güncellemek için lütfen güncelleme butonuna tıklayınız.");
    } else if (productAmountInput <= 0) {
        alert("Lütfen geçerli bir ürün adedi giriniz.");
    } else if (productPriceInput <= 0) {
        alert("Lütfen geçerli bir ürün fiyatı giriniz.");
    }
    else {
        productRequest
            .post({ name: productName, category: productCategory, description: productDescription, amount: productAmount, price: productPrice, url: productUrl })
            .then((product) => {
                ui.addProductToUI(product);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    ui.clearInputs(productNameInput, productCategoryInput, productDescriptionInput, productAmountInput, productPriceInput, productUrlInput);
    e.preventDefault();
}

function deleteProduct(e) {
    if (e.target.id === "deleteButton") {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        productRequest
            .delete(id)
            .then((product) => {
                console.log("silme işlemi başarılı");
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (e.target.id === "deleteIcon") {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        productRequest
            .delete(id)
            .then((product) => {
                console.log("silme işlemi başarılı");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    e.preventDefault();
}

function updateProduct(e) {
    if (e.target.id === 'updateButton') {
        let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
        updateModal.show();

        const updateProductName = document.querySelector("#updateProductNameInput");
        const updateProductCategory = document.querySelector("#updateProductCategoryInput");
        const updateProductDescription = document.querySelector("#updateProductDescriptionInput");
        const updateProductAmount = document.querySelector("#updateProductAmountInput");
        const updateProductPrice = document.querySelector("#updateProductPriceInput");
        const updateProductUrl = document.querySelector("#updateProductUrlInput");
        const updateButton = document.querySelector("#updateButtonModal");

        const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        const card = e.target.parentElement.parentElement.parentElement.parentElement;

        productRequest
            .get()
            .then((products) => {
                products.map(product => {
                    if (product.id == id) {
                        updateProductName.value = product.name;
                        updateProductCategory.value = product.category;
                        updateProductDescription.value = product.description;
                        updateProductAmount.value = product.amount;
                        updateProductPrice.value = product.price;
                        updateProductUrl.value = product.url;
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });

        updateButton.addEventListener('click', function () {
            productRequest
                .put(id, {
                    name: updateProductName.value,
                    category: updateProductCategory.value,
                    description: updateProductDescription.value,
                    amount: updateProductAmount.value,
                    price: updateProductPrice.value,
                    url: updateProductUrl.value

                })
                .then((product) => {
                    ui.updateProductFromUI(product, card);
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            e.preventDefault();

        });
    } else if (e.target.id === "updateIcon") {
        let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
        updateModal.show();

        const updateProductName = document.querySelector("#updateProductNameInput");
        const updateProductCategory = document.querySelector("#updateProductCategoryInput");
        const updateProductDescription = document.querySelector("#updateProductDescriptionInput");
        const updateProductAmount = document.querySelector("#updateProductAmountInput");
        const updateProductPrice = document.querySelector("#updateProductPriceInput");
        const updateProductUrl = document.querySelector("#updateProductUrlInput");
        const updateButton = document.querySelector("#updateButtonModal");

        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        const card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;

        productRequest
            .get()
            .then((products) => {
                products.map(product => {
                    if (product.id == id) {
                        updateProductName.value = product.name;
                        updateProductCategory.value = product.category;
                        updateProductDescription.value = product.description;
                        updateProductAmount.value = product.amount;
                        updateProductPrice.value = product.price;
                        updateProductUrl.value = product.url;
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });

        updateButton.addEventListener('click', function () {
            productRequest
                .put(id, {
                    name: updateProductName.value,
                    category: updateProductCategory.value,
                    description: updateProductDescription.value,
                    amount: updateProductAmount.value,
                    price: updateProductPrice.value,
                    url: updateProductUrl.value

                })
                .then((product) => {
                    ui.updateProductFromUI(product, card);
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            e.preventDefault();

        });
    }
    e.preventDefault();
}

function searchProduct(e) {
    const searchValue = e.target.value.toLowerCase();
    ui.searchProductInUI(searchValue);
}

function filterProduct(e) {
    let filteredProducts = [];
    const category = e.target.id;
    ui.filterProductsInUI(category, filteredProducts);
}

function sortProductAz(e) {
    const productList = document.querySelectorAll(".card-title");
    const productListArray = Array.from(productList);
    const sortedProducts = [];
    productListArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    }
    );
    productListArray.map(function (product) {
        const card = product.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedProducts.push(card);
        }
    });
    ui.sortProduct(sortedProducts);
    e.preventDefault();
}
function sortProductZa(e) {
    const productList = document.querySelectorAll(".card-title");
    const productListArray = Array.from(productList);
    const sortedProducts = [];
    productListArray.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    }
    );
    productListArray.map(function (product) {
        const card = product.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedProducts.push(card);
        }
    });
    ui.sortProduct(sortedProducts);
    e.preventDefault();
}
function sortProductArtan(e) {
    const productList = document.querySelectorAll(".product-price");
    const productListArray = Array.from(productList);
    const sortedProducts = [];
    productListArray.sort(function (a, b) {
        return a.textContent - b.textContent;
    }
    );
    productListArray.map(function (product) {
        const card = product.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedProducts.push(card);
        }
    });
    ui.sortProduct(sortedProducts);
    e.preventDefault();
}
function sortProductAzalan(e) {
    const productList = document.querySelectorAll(".product-price");
    const productListArray = Array.from(productList);
    const sortedProducts = [];
    productListArray.sort(function (a, b) {
        return b.textContent - a.textContent;
    }
    );
    productListArray.map(function (product) {
        const card = product.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedProducts.push(card);
        }
    });
    ui.sortProduct(sortedProducts);
    e.preventDefault();
}

function detailProduct(e) {

    if (e.target.id === 'detailButton') {
        let url;
        let name;
        let price;
        let description;
        let amount;
        let category;
        const product = e.target.parentElement.parentElement.parentElement.parentElement;
        const id = product.getAttribute("id");
        const addToCartButton = document.querySelector("#addToCartButton");

        productRequest
            .get()
            .then((products) => {
                products.map(product => {
                    if (product.id == id) {
                        url = product.url;
                        name = product.name;
                        price = product.price;
                        description = product.description;
                        amount = product.amount;
                        category = product.category;
                        ui.detailProductInUI(url, name, price, description, amount);
                        if (amount == 0) {
                            addToCartButton.disabled = true;
                        } else {
                            addToCartButton.disabled = false;
                        }

                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });

        addToCartButton.addEventListener('click', function () {

            let quantity = document.querySelector("#quantityInput").value.trim();
            console.log(quantity);
            allProducts.map(product => {
                if (product.id == id) {
                    if (product.amount >= quantity) {
                        const cartProduct = {
                            id: id,
                            category: category,
                            url: url,
                            name: name,
                            price: price,
                            description: description,
                            amount: amount,
                            quantity: quantity,
                        };

                        cartRequest
                            .get()
                            .then((cartProducts) => {
                                let flag = false;
                                cartProducts.map(cartProduct => {
                                    if (cartProduct.name == name) {
                                        flag = true;
                                    }
                                });
                                if (flag == false) {
                                    cartRequest
                                        .post(cartProduct)
                                        .then((cartProduct) => {
                                            console.log(cartProduct);
                                        }
                                        )
                                        .catch((err) => {
                                            console.log(err);
                                        }
                                        );

                                }
                                else if (flag == true) {
                                    cartRequest
                                        .put(id, {
                                            // quantitiy: quantitiy + productQuantitiy,
                                        })
                                        .then((cartProduct) => {
                                            console.log(cartProduct);
                                        }
                                        )
                                        .catch((err) => {
                                            console.log(err);
                                        }
                                        );
                                }
                            })

                        productRequest
                            .getById(id)
                            .then((product) => {
                                const updatedProduct = {
                                    ...product,
                                    amount: product.amount - quantity,

                                };
                                productRequest
                                    .put(id, updatedProduct)
                                    .then((product) => {
                                        console.log(product);
                                    }
                                    )
                                    .catch((err) => {
                                        console.log(err);
                                    }
                                    );
                            })
                            .catch((err) => {
                                console.log(err);
                            }
                            );
                    }
                    else if (parseInt(product.amount) < parseInt(quantity)) {
                        alert("Stokta yeterli ürün yok");
                    }
                }
            });
        }
        );
    }
    if (e.target.id === 'detailIcon') {
        let url;
        let name;
        let price;
        let description;
        let amount;
        let category;
        const product = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        const id = product.getAttribute("id");
        const addToCartButton = document.querySelector("#addToCartButton");

        productRequest
            .get()
            .then((products) => {
                products.map(product => {
                    if (product.id == id) {
                        url = product.url;
                        name = product.name;
                        price = product.price;
                        description = product.description;
                        amount = product.amount;
                        category = product.category;
                        ui.detailProductInUI(url, name, price, description, amount);
                        if (amount == 0) {
                            addToCartButton.disabled = true;
                        } else {
                            addToCartButton.disabled = false;
                        }

                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });


        addToCartButton.addEventListener('click', function () {

            let quantity = document.querySelector("#quantityInput").value.trim();
            console.log(quantity);
            allProducts.map(product => {
                if (product.id == id) {
                    if (product.amount >= quantity) {
                        const cartProduct = {
                            id: id,
                            category: category,
                            url: url,
                            name: name,
                            price: price,
                            description: description,
                            amount: amount,
                            quantity: quantity,
                        };

                        cartRequest
                            .get()
                            .then((cartProducts) => {
                                let flag = false;
                                cartProducts.map(cartProduct => {
                                    if (cartProduct.name == name) {
                                        flag = true;
                                    }
                                });
                                if (flag == false) {
                                    cartRequest
                                        .post(cartProduct)
                                        .then((cartProduct) => {
                                            console.log(cartProduct);
                                        }
                                        )
                                        .catch((err) => {
                                            console.log(err);
                                        }
                                        );

                                }
                                else if (flag == true) {
                                    cartRequest
                                        .put(id, {
                                            // quantitiy: quantitiy + productQuantitiy,
                                        })
                                        .then((cartProduct) => {
                                            console.log(cartProduct);
                                        }
                                        )
                                        .catch((err) => {
                                            console.log(err);
                                        }
                                        );
                                }
                            })
                        // product.amount = product.amount - quantity;
                        productRequest
                            .getById(id)
                            .then((product) => {
                                const updatedProduct = {
                                    ...product,
                                    amount: product.amount - quantity,

                                };
                                productRequest
                                    .put(id, updatedProduct)
                                    .then((product) => {
                                        console.log(product);
                                    }
                                    )
                                    .catch((err) => {
                                        console.log(err);
                                    }
                                    );
                            })
                            .catch((err) => {
                                console.log(err);
                            }
                            );



                    }
                    else if (product.amount < quantity) {
                        alert("Stokta yeterli ürün yok");
                    }
                }
            });
        }
        );
    }
}

function goToCart(e) {

    cartRequest
        .get()
        .then((cartProducts) => {
            ui.goToCartInUI(cartProducts);
            const deleteButtonInCarts = document.querySelectorAll("#deleteButtonInCart");
            let deleteButtonInCart = Array.from(deleteButtonInCarts)
            deleteButtonInCart.map((button) => {
                console.log(button);
                button.addEventListener('click', deleteProductInCart);
            });
        }
        )
        .catch((err) => {
            console.log(err);
        }
        );
}

function deleteProductInCart(e) {
    const product = e.target.parentElement.parentElement;
    console.log(product);
    const productName = product.querySelector("#productNameInCart").textContent;
    console.log(productName);
    allProducts.map(product => {
        if (product.name == productName) {
            const id = product.id;
            productRequest
                .getById(id)
                .then((product) => {
                    const updatedProduct = {
                        ...product,
                        amount: product.amount + 1,

                    };
                    productRequest
                        .put(id, updatedProduct)
                        .then((product) => {
                            console.log(product);
                        }
                        )
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                })
                .catch((err) => {
                    console.log(err);
                }
                );
        }
    });

    console.log(product);
    const quantity = product.children[1].children[3].textContent.trim();
    console.log(quantity);
    if (quantity == 1) {
        const id = product.getAttribute("id");
        cartRequest
            .delete(id)
            .then((cartProduct) => {
                console.log(cartProduct);
                e.preventDefault();
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );


    } else {
        const id = product.getAttribute("id");
        cartRequest
            .put(id, {
                url: product.querySelector("#productImageInCart").src,
                name: product.querySelector("#productNameInCart").textContent,
                price: product.querySelector("#productPriceInCart").textContent,
                category: product.querySelector("#productCategoryInCart").textContent,
                quantity: quantity - 1,

            })
            .then((cartProduct) => {
                console.log(cartProduct);
                e.preventDefault();
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }
    e.preventDefault();
}