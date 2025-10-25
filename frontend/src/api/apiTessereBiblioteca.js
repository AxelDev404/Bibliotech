import apiClient from "./apiClient";

export const fetchCounStatTesseraBiblioteca = () => apiClient.get('tessere-biblioteca/statistics-tessere/');