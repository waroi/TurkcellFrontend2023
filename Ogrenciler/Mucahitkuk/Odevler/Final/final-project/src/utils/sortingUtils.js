export const sortProducts = (products, sortingOption) => {
  switch (sortingOption) {
    case "A to Z":
      return products.sort((a, b) => a.title.localeCompare(b.title));
    case "Z to A":
      return products.sort((a, b) => b.title.localeCompare(a.title));
    case "Price Low to High":
      return products.sort((a, b) => a.price - b.price);
    case "Price High to Low":
      return products.sort((a, b) => b.price - a.price);
    case "Ranking Low to High":
      return products.sort((a, b) => a.rating.rate - b.rating.rate);
    case "Ranking High to Low":
      return products.sort((a, b) => b.rating.rate - a.rating.rate);
    default:
      return products;
  }
};
