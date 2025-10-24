import apiClient from "./apiClient";


export const fetchTableLibri = () => apiClient.get('libri/manage-books/');
export const fetchCountSatat = () => apiClient.get('libri/statistics-book/');