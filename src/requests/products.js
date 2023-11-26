import apiInstance from "../services/api";

export async function getAll() {
    const result = await apiInstance.get("/products") 
    return result.data
}

export async function fetchProduct(id) {
    const result = await apiInstance.get(`/products/${id}`);
    return result.data;
}
