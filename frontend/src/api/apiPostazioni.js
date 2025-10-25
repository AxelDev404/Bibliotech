import apiClient from "./apiClient";

export const fetchCountStatPostazioni = () => apiClient.get('postazioni/statistics-postazioni/');