export function newProduct(e) {
  const newProduct = {};
  new FormData(e.currentTarget).forEach((value, key) => {
    newProduct[key] = value;
  });
  return newProduct;
}
