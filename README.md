<table>
  <tr>
      <td><h1>Gerador de jogos para Loterias</h1></td>
  </tr>
</table>


## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto

É uma aplicação com o intuito de gerar jogos aleatórios para as principais loterias nacionais.
<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| GET | http://localhost:5001/generate/megasena| Gera um jogo simples para a Mega Sena |
| GET | http://localhost:5001/generate/quina| Gera um jogo simples para a Quina |
| GET | http://localhost:5001/generate/lotofacil| Gera um jogo simples para a Lotofácil |
| GET | http://localhost:5001/generate/lotomania| Gera um jogo simples para a Lotomania |


## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/guischimidt/gerador-loterias
```

### __Back-end__
  Instale as dependências
```bash
$ npm install
$ npm start
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**guigoschimidt@gmail.com**](mailto:guigoschimidt@gmail.com)
