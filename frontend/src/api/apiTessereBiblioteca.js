import apiClient from "./apiClient";

export const fetchCounStatTesseraBiblioteca = () => apiClient.get('tessere-biblioteca/statistics-tessere/');
export const fetchLastTessereBibliotecaInsert = () => apiClient.get('tessere-biblioteca/statistics-last-insert-card/');
export const fetchDetailTesseraBiblioteca = (id_tessera) => apiClient.get(`tessere-biblioteca/tessera-biblioteca-id/${id_tessera}/`);