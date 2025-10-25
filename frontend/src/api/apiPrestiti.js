import apiClient from "./apiClient";


export const fetchCountStatPrestitiAttivi = () => apiClient.get('prestiti/statistics-active-prestiti/');
export const fetchCountStatPrestitiSaldati = () => apiClient.get('prestiti/statistics-deactive-prestiti/');