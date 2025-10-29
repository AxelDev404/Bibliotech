import apiClient from "./apiClient";

export const fetchCountStatPostazioni = () => apiClient.get('postazioni/statistics-postazioni/');
export const fetchHelperSelectionPostazioni = () => apiClient.get('postazioni/helper-selection-postazioni/');

export const createPostazione = (formData) => apiClient.post('postazioni/upload-postazione/' , formData);