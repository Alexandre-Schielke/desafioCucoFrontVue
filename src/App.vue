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
        <img src="https://cucohealth.com/wp-content/uploads/2018/08/img-cuco-logo.png">
      </div>
    </nav>

    <div class="container bg-white" >
      <form class="row p-4  rounded d-flex align-items-center" @submit.prevent="filtro" style="background-color: #999999">
        <div class="col-md-4 mt-1">
          <input type="text" placeholder="Nome" v-model="clientesFiltrado.nome" class="form-control">
        </div>
        <div class="col-md-4 mt-1">
          <input type="text" placeholder="Cpf" v-mask="'###.###.###-##'" v-model="clientesFiltrado.cpf" class="form-control">
        </div>
        <div class="col-4">
          <button type="submit" class="btn btn-success me-2 my-2">Filtrar</button>
          <span @click="listar()"  class="btn btn-success">Listar</span>
        </div>
      </form>
      <div class="table-responsive">
        <table class="table  align-middle">
          <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de nascimento</th>
            <th>Telefone</th>
            <th class="text-center">Remover</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="cliente of clientes" :key="cliente.id">

            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.cpf }}</td>
            <td>{{ cliente.data_nascimento }}</td>
            <td>{{ cliente.telefone }}</td>
            <td class="text-center">
              <button @click="destroy(cliente.id)" class="bbtn btn-danger border-0 py-1 px-3"><i class="far fa-trash-alt"></i></button>
            </td>

          </tr>
          </tbody>
        </table>
      </div>


      <ul class="list-group mt-2">
        <li class="text-white ist-group-item bg-danger p-1" v-for="(erro, index) of erros" :key="index">
          <b>Erro</b>: {{ erro }}
        </li>
      </ul>

      <!-- Button trigger modal -->
      <section class="bg-light p-5 mt-3">
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
        <p class="mt-3">gerador de cpf válido: <a href="https://www.4devs.com.br/gerador_de_cpf" target="_blank" >clique aqui</a></p>
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
          this.erros = resp.data.mensagemRetorno
        }

        if (resp.data.sucesso == true) {
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



