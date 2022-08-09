<h1 align="center">
   Itens-Medievais-API
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>


## 💻 Sobre o projeto

Nesse projeto o objetivo foi desenvolver um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript. 🚀
Primeiro Projeto utilizando Typescript

## 🚀 Como executar o projeto

Clonar o repositório

Executar o comando npm install

Criar um arquivo .env na raiz do projeto(passar as variaveis de ambiente especificadas em .env.example)

Executar o comando npm run dev

A aplicação será aberta na porta:3000 - acesse http://localhost:3000


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://github.com/expressjs/express)**
-   **[MySQL](https://github.com/mysql)**
-   **[Sequelize](https://github.com/sequelize/sequelize)**
-   **[JSON-WebToken](https://github.com/auth0/node-jsonwebtoken)**
-   **[Nodemon](https://github.com/remy/nodemon)**


## Endpoint para o cadastro de produtos

- O endpoint acessível através do caminho (`/products`);

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```
---

## Endpoint para a listagem de produtos

- O endpoint acessível através do caminho (`/products`);

    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

