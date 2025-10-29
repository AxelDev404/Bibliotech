import apiClient from "./apiClient";

export const fetchCategoriaHelper = () => apiClient.get('categorie/helper-selection-categorie/');

export const createCategoria = (formData) => apiClient.post('categorie/upload-categoria/' , formData);

