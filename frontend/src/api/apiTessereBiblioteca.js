import apiClient from "./apiClient";

export const fetchCounStatTesseraBiblioteca = () => apiClient.get('tessere-biblioteca/statistics-tessere/');
export const fetchLastTessereBibliotecaInsert = () => apiClient.get('tessere-biblioteca/statistics-last-insert-card/');
export const fetchDetailTesseraBiblioteca = (id_tessera) => apiClient.get(`tessere-biblioteca/tessera-biblioteca-id/${id_tessera}/`);
export const filterTesseraBibliotecaTable = (params) => apiClient.get('tessere-biblioteca/filter-tessera-table/' , {params});

export const createTessersBiblioteca = (formData) => apiClient.post('tessere-biblioteca/upload-tessera-biblioteca/' , formData);

export const modifyTesseraBiblioteca = (id_tessera , updateData) => apiClient.patch(`tessere-biblioteca/patch-tessera-biblioteca/${id_tessera}/` , updateData).then(res => res.data);