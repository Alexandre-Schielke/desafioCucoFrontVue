

<p>
dentro do projeto rode o seguinte comando <code>npm install</code>
</p>



<h2>Rodando projeto</h2>
<p>
	rode o seguinte comando no terminal  (rode dentro da pasta do projeto) <code>npm run serve</code>
</p>

<h2>Build do projeto para produção (opcional)</h2>
<p>
	para que rode em produção execute o seguinte comando (rode dentro da pasta do projeto) <code>npm run build</code>.
    Copie os arquivos que estão dentro da pasta dist e cole no seu  servidor servidor ou em nuvem.
</p>
<p>

NOTA: o link da requisiçao pode ser alterado em fica em 'src/services/config.js', por padrão esta setado para 'http://srv106.teste.website/~apicuco' (produção)
</p>
-----------------------------------------------------------------------------------
obs: os comandos entre essas linhas são somente se a requisição ou a mascara não funcionar
<h2>Instalação do axios para efetuar as requisições dos campos dos imputs (somente se as requisições não estiverem funcionando)</h2>
<p>
	rode o seguinte comando no terminal para instalação (rode dentro da pasta do projeto) <code>npm install axios --save</code>
</p>

<h2>Instalação da mascara dos campos dos imputs (somente se as rmascaras do insputsnão estiverem funcionando)</h2>
<p>
	rode o seguinte comando no terminal pa instalação (rode dentro da pasta do projeto) <code>npm install v-mask</code>
</p>
<p>
E também deve realizar a importação no main.js do Vue:
import VueMask from 'v-mask';
Vue.use(VueMask);
</p>

-----------------------------------------------------------------------------------


# desafiocuco

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
