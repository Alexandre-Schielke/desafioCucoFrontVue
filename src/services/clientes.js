import { http } from './config'

export default {
    listar:() => {
        return http.get('/clientes/list')
    },

    criar:(cliente) => {
        return http.post('/clientes/store', cliente)
    },

    destroy:(idCliente) => {
        return http.delete('/clientes/destroy/'+idCliente)
    },

    filtra:(dadosCliente) => {
        return http.post('/clientes/list', dadosCliente)
    }
}
