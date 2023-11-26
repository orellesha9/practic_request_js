import "./styles/normalize.css";
import "./styles/index.css";
import { renderAllProducts } from "./js/renderAllProducts";
import { refs } from "./refs";
import { handleForm } from "./js/handleForm";

renderAllProducts();

refs.singleProductForm.addEventListener("submit", handleForm);