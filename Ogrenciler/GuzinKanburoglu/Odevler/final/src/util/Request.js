export async function getProducts(){
    const response = await fetch(`http://localhost:3000/products`);
    const products = await response.json();
    return products;
}

export async function getBasket(){
    const response = await fetch(`http://localhost:3000/basketItems`);
    const basketItems = await response.json();
    return basketItems;
}