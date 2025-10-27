import apiClient from "./apiClient";


export const fetchTableLibri = () => apiClient.get('libri/manage-books/');
export const fetchCountSatat = () => apiClient.get('libri/statistics-book/');
export const fetchLastInsertBookStat = () => apiClient.get('libri/statistics-last-inserts-book/');
export const fetchLibroDetailPage = (isbn) => apiClient.get(`libri/book-isbn/${isbn}/`);