import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://srv106.teste.website/~apicuco'
    // baseURL: 'http://localhost:8000'
});
