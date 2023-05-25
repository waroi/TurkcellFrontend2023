const productRequest = new ProductRequest("http://localhost:3000/products");
const ui = new UI();

getAllItems();
eventListeners();

function eventListeners() { }

function getAllItems() {
    productRequest
        .get()
        .then((products) => {
            ui.loadAllProductsToUI(products);
        })
        .catch((err) => {
            console.log(err);
        });
}