import apiClient from "./apiClient";


export const fetchCountStatPrestitiAttivi = () => apiClient.get('prestiti/statistics-active-prestiti/');
export const fetchCountStatPrestitiSaldati = () => apiClient.get('prestiti/statistics-deactive-prestiti/');

export const fetchFilteringPrestiti = (tesserato) => apiClient.get(`prestiti/filtering-table-prestiti/${tesserato}/`);

export const createPrestito = (formData) => apiClient.post('prestiti/post-prestito/' , formData);