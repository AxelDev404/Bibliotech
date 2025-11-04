import apiClient from "./apiClient";


export const fetchCountStatPrestitiAttivi = () => apiClient.get('prestiti/statistics-active-prestiti/');
export const fetchCountStatPrestitiSaldati = () => apiClient.get('prestiti/statistics-deactive-prestiti/');

export const fetchFilteringPrestiti = (tesserato , params) => apiClient.get(`prestiti/filtering-table-prestiti/${tesserato}/` , {params});

export const createPrestito = (formData) => apiClient.post('prestiti/post-prestito/' , formData);

export const destroyPrestito = (id_prestito) => apiClient.delete(`prestiti/delete-prestito/${id_prestito}/`);

export const modifyPrestito = (id_prestito , updateData) => apiClient.patch(`prestiti/patch-prestito-status/${id_prestito}/` , updateData).then(res => res.data);
export const modifyPendingPrestito = (id_prestito , updateData) => apiClient.patch(`prestiti/patch-pending-prestito/${id_prestito}/` , updateData).then(res => res.data);