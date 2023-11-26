import { refs } from "../refs";
import { getAll } from "../requests/products";
import { createProductsMarkup } from "../services/markupService";


export async function renderAllProducts() {
    const data = await getAll();
    const markup = createProductsMarkup(data.products);
    refs.allProducts.innerHTML = markup;
}
