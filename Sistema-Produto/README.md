# 🛍️ LeanExpress - Sistema de Gestão de E-commerce (CRUD)

Uma aplicação web funcional desenvolvida para a loja virtual **LeanExpress**, cobrindo o ciclo completo de gerenciamento de produtos (**Create, Read, Update, Delete**) com persistência em banco de dados relacional MySQL.

---

## 📋 Sobre o Projeto

O **LeanExpress** foi desenvolvido como parte de uma entrega acadêmica, aplicando conceitos de arquitetura de software para sistemas web. A aplicação permite cadastrar novos produtos, listar o estoque em tempo real, atualizar informações existentes e remover itens do sistema através de uma interface responsiva e amigável.

### 🌟 Funcionalidades
- **Listar Produtos (Read):** Exibição do catálogo de produtos com preço, estoque e categoria.
- **Cadastrar Produto (Create):** Formulário para inclusão de novos itens na loja.
- **Editar Produto (Update):** Atualização de dados de produtos já cadastrados.
- **Excluir Produto (Delete):** Remoção de itens do banco de dados com confirmação do usuário.

---

## 🛠️ Tecnologias Utilizadas

- **Back-end:** [Node.js](https://nodejs.org/) com [Express.js](https://expressjs.com/)
- **Front-end:** [EJS (Embedded JavaScript templates)](https://ejs.co/) e [Bootstrap 5](https://getbootstrap.com/)
- **Banco de Dados:** [MySQL](https://www.mysql.com/) (utilizando o driver `mysql2/promise`)
- **Arquitetura de Software:** Padrão **MVC** (Model-View-Controller) com camada **DAO** (Data Access Object)

---

## 📁 Estrutura de Pastas

```text
LeanExpress/
├── src/
│   ├── controllers/
│   │   └── produtoController.js    # Regras de negócio e controle de rotas
│   ├── dao/
│   │   ├── conexao.js              # Conexão e pool com o MySQL
│   │   └── produtoDAO.js           # Métodos de acesso ao banco (Queries SQL)
│   ├── models/
│   │   └── produtoModel.js         # Representação da entidade Produto
│   └── views/
│       ├── form.ejs                # Tela de cadastro e edição
│       └── index.ejs               # Painel principal / Tabela de produtos
├── index.js                        # Ponto de entrada e configuração do Express
├── package.json                    # Dependências do projeto Node.js
├── script.sql                      # Script DDL de criação da base de dados
└── README.md                       # Documentação do projeto