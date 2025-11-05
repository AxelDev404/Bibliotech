import apiClient from "./apiClient";

//GET
export const fetchTableLibri = () => apiClient.get('libri/manage-books/');
export const fetchCountSatat = () => apiClient.get('libri/statistics-book/');
export const fetchLastInsertBookStat = () => apiClient.get('libri/statistics-last-inserts-book/');
export const fetchLibroDetailPage = (isbn) => apiClient.get(`libri/book-isbn/${isbn}/`);
export const filterBookFetch = (params) => apiClient.get('libri/filter-book-table/' , {params}); 

//POST
export const createLibro = (formData) => apiClient.post('libri/upload-book/' , formData);

//PATCH
export const modifyLibro = (isbn , updateData) => apiClient.patch(`libri/patch-book/${isbn}/` , updateData).then(res => res.data);