export function createProductsMarkup(arg) {
  return arg
    .map(
      ({
        title,
        description,
        price,
      }) => `<li><h1>${title}</h1><p>${description}</p>
<p>${price}</p></li>`
    )
    .join("");
}

export function createProductMarkup({title, description, price}) {
  return `
      <h1>${title}</h1>
      <p>${description}</p>
      <p>${price}</p>
  `;
}