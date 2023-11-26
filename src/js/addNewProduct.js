import { addProduct } from '../requests/products';
import { createProductMarkup } from '../services/markupService';
import { refs } from '../refs';
import { newProduct } from './newProduct';

export async function addNewProduct(e) {
  e.preventDefault();
  const object = newProduct(e);
  const newEl = await addProduct(object);
  const createdEl = createProductMarkup(newEl);
  refs.newProduct.innerHTML = createdEl;
}
