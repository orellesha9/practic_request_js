import "./styles/normalize.css";
import "./styles/index.css";
import { getAll } from "./requests/products";
import { createProductsMarkup } from "./services/markupService";
import { refs } from "./refs";


async function renderAllProducts() {
    const data = await getAll()
    // console.log(data);
    const markup = createProductsMarkup(data.products)
    refs.allProducts.innerHTML = markup;
}

renderAllProducts();







