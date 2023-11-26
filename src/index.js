import './styles/normalize.css';
import './styles/index.css';
import { refs } from './refs';
import { handleForm } from './js/handleForm';
import { addNewProduct } from './js/addNewProduct';
// renderAllProducts();

refs.singleProductForm.addEventListener('submit', handleForm);
refs.addProductForm.addEventListener('submit', addNewProduct);
