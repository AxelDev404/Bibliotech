import axios from "axios";


const apiClient = axios.create({

    baseURL: "http://localhost:8000/api/", //192.168.1.35:8000 per poter hostare in rete il back ed essere raggiunto da altri dispotivi , avvia il server runserver in 0.0.0.0:8000 !!!!!
    withCredentials : true,

})


export default apiClient;
