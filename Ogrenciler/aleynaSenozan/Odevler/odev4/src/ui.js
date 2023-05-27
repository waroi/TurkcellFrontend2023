class UI {
    addAllProductsToUI(products) {
        const productList = document.getElementById("products");
        productList.innerHTML = ""; // clear the existing list
        products.forEach(function (product) {
            ui.addProductToUI(product);
        });
    }

    addProductToUI(product) {
        const productList = document.getElementById("products");
        productList.innerHTML += `
            <div class="product-card card" data-id="${product.id}">
                <div class="card-body">
                    <h4 class="product-name card-title">${product.productName}</h4>
                    <p class="product-description card-text">${product.productDescription}</p>
                    <p class="product-price">${product.price}</p>
                    <p class="product-stock">${product.stockQuantity}</p>
                    <button id="edit-product" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Düzenle</button>
                    <button id="delete-product" class="btn btn-danger">Sil</button>
                </div>
            </div>
        `;
    }
    

    deleteProductFromUI(element) {
        element.remove();
    }

    filterProductsOnUI(filterValue, productNames) {
        productNames.forEach(function (productName) {
            const text = productName.textContent.toLowerCase();
            if (text.indexOf(filterValue) === -1) {
                productName.parentElement.setAttribute("style", "display: none !important");
            } else {
                productName.parentElement.setAttribute("style", "display: block");
            }
        });
    }

    openUpdateModal(product, updateProduct) {
        const updateModal = new bootstrap.Modal(document.getElementById("editModal"));
    
        updateModal._element.addEventListener('shown.bs.modal', () => {
            document.getElementById("editProductName").value = product.productName;
            document.getElementById("editProductDescription").value = product.productDescription;
            document.getElementById("editPrice").value = product.price;
            document.getElementById("editStockQuantity").value = product.stockQuantity;
    
            const saveChangesButton = document.getElementById("saveChanges");
            let onSaveChangesClick = () => {
                updateProduct(product.id);
                saveChangesButton.removeEventListener('click', onSaveChangesClick);
            };
            saveChangesButton.addEventListener('click', onSaveChangesClick);
    
            updateModal._element.removeEventListener('shown.bs.modal', this);
        });
    
        updateModal.show();
    }
    
    updateProductInUI(updatedProduct) {
        const productCard = document.querySelector(`.product-card[data-id='${updatedProduct.id}']`);
        productCard.querySelector('.product-name').textContent = updatedProduct.productName;
        productCard.querySelector('.product-description').textContent = updatedProduct.productDescription;
        productCard.querySelector('.product-price').textContent = updatedProduct.price;
        productCard.querySelector('.product-stock').textContent = updatedProduct.stockQuantity;
    }

    sortProductsByName(products) {
        products.sort((a, b) => {
            if(a.productName < b.productName) { return -1; }
            if(a.productName > b.productName) { return 1; }
            return 0;
        });
        this.addAllProductsToUI(products);
    }

    sortProductsByPrice(products) {
        products.sort((a, b) => a.price - b.price);
        this.addAllProductsToUI(products);
    }
    
    
}
