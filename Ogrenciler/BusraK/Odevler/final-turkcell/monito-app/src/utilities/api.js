export const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products.");
  }
};
