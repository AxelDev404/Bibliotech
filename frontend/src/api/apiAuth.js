import apiClient from "./apiClient";


export const LogIn = (formData) => apiClient.post('auth/login/' , formData);
export const LogOut = () => apiClient.post('auth/logout/');
export const CheckUser = () => apiClient.get('auth/user_check/');