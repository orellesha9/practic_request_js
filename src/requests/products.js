import apiInstance from "../services/api";

export async function getAll() {
    const result = await apiInstance.get("/products") 
    return result.data
    
}
