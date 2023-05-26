function sortProducts(products, sortBy) {
  const sortedProducts = [...products]; // Create a copy of the products array

  switch (sortBy) {
    case "1": // Sort A-Z
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "2": // Sort Z-A
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "3": // Sort Price High to Low
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "4": // Sort Price Low to High
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }

  return sortedProducts;
}

export default sortProducts;