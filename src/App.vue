<!--<template>-->
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->
<template class="">
  <div id="app">
    <nav class="mt-5 mb-5">
      <div class="text-center">
        <h1>Desafio cuco - Clientes</h1>
      </div>
    </nav>

    <div class="container">
      <form class="row p-4 bg-info" @submit.prevent="filtro">
        <div class="col-md-4">
          <input type="text" placeholder="Nome" v-model="clientesFiltrado.nome" class="form-control">
        </div>
        <div class="col-md-4 mt-2">
          <input type="text" placeholder="Cpf" v-model="clientesFiltrado.cpf" class="form-control">
        </div>
        <div class="col-4">
          <button type="submit" class="btn btn-success me-2 my-2">Filtrar</button>
          <span @click="listar()"  class="btn btn-success">Listar</span>
        </div>
      </form>
      <table class="table">
        <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Data de nascimento</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cliente of clientes" :key="cliente.id">

          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.cpf }}</td>
          <td>{{ cliente.data_nascimento }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>
            <button @click="destroy(cliente.id)" class="bbtn btn-danger"><i class="material-icons">delete_sweep</i>
            </button>
          </td>

        </tr>
        </tbody>
      </table>

      <ul class="list-group">
        <li class="text-white ist-group-item bg-danger p-1" v-for="(erro, index) of erros" :key="index">
          <b>Erro</b>: {{ erro }}
        </li>
      </ul>

      <!-- Button trigger modal -->
      <section class="bg-light p-5">
        <h4>Cadastrar Cliente</h4>

        <form class="row g-3" @submit.prevent="salvar">
          <div class="col-md-6">
            <label class="form-label">Nome</label>
            <input type="text" placeholder="Nome" v-model="cliente.nome" class="form-control">
          </div>

          <div class="col-md-6">
            <label class="form-label">CPF</label>
            <input type="text" placeholder="Cpf" v-mask="'###.###.###-##'" v-model="cliente.cpf" class="form-control">
          </div>

          <div class="col-md-6">
            <label class="form-label">Data de Nascimento</label>
            <input type="date" placeholder="data_nascimento" v-model="cliente.data_nascimento" class="form-control">
          </div>

          <div class="col-md-6">
            <label class="form-label">Telefone</label>
            <input type="text" placeholder="telefone" v-mask="'(##) #####-####'" v-model="cliente.telefone" class="form-control">
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-success">Cadastrar novo cliente</button>
          </div>
        </form>
        <p>gerador de cpf válido: <a href="https://www.4devs.com.br/gerador_de_cpf" target="_blank" >clique aqui</a></p>
      </section>

    </div>
  </div>
</template>

<script>
import Cliente from './services/clientes'

export default {
  data() {
    return {
      cliente: {
        nome: '',
        cpf: '',
        data_nascimento: '',
        telefone: ''
      },
      clientesFiltrado: {
        nome: '',
        cpf: '',
      },
      clientes: [],
      erros: []
    }
  },
  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Cliente.listar().then(resp => {
        this.clientes = resp.data.data;
      });
    },

    filtro() {
      Cliente.filtra(this.clientesFiltrado).then(resp => {
        this.clientes = resp.data.data;
        console.log(resp);
        if (resp.data.sucesso == false) {
          alert('Erro ao cadastrar');
          this.erros = resp.data.mensagemRetorno
        }

        if (resp.data.sucesso == true) {
          alert('salvo com sucesso');
          this.erros = [];
          // this.listar();
        }
      });
    },

    salvar() {
      Cliente.criar(this.cliente).then(resp => {
        console.log(resp.data);
        this.cliente = {};
        if (resp.data.sucesso == false) {
          this.erros = resp.data.mensagemRetorno
        }

        if (resp.data.sucesso == true) {
          alert('salvo com sucesso');
          this.erros = [];
          this.listar();
        }

      });
    },

    destroy(cliente) {
      Cliente.destroy(cliente).then(resp => {
        if (resp.data.sucesso == false) {
          alert('Erro ao remover');
          this.listar();
        }

        if (resp.data.sucesso == true) {
          alert('removido com sucesso com sucesso');
          this.erros = [];
          this.listar();
        }
      })
    }
  }
}
</script>



