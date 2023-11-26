import { refs } from "../refs";
import { fetchProduct } from "../requests/products";
import { createProductMarkup } from "../services/markupService";

export async function handleForm(event) {
    try {
        event.preventDefault();
        const id = event.currentTarget.elements.id.value;
        const data = await fetchProduct(id);
        refs.singleProduct.innerHTML = createProductMarkup(data);
    } catch (error) {
        console.log(error);
    }
}
