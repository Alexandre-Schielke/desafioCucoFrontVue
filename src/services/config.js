import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://srv106.teste.website/~apicuco'
    // baseURL: 'http://localhost:8000' valor capturado quando roda o comando php -S localhost:8000 -t no projeto lumen/laravel
});
