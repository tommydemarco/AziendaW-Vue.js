import axios from 'axios';

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/azienda/',
    timeout: 20000,
})

export default getAPI