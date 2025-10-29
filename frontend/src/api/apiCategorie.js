import apiClient from "./apiClient";

export const createCategoria = (formData) => apiClient.post('categorie/upload-categoria/' , formData);