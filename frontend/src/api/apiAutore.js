import apiClient from "./apiClient";

export const fetchAutoreHelperSelection = () => apiClient.get('autori/get-autori/');

export const createAutore = (formData) => apiClient.post('autori/upload-autore/' , formData);