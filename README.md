# 📦 LeanExpress - Sistema de Gestão de Estoque e Produtos

## 📝 Descrição do Projeto
O **LeanExpress** é uma solução web desenvolvida para o gerenciamento eficiente e simplificado de catálogo e estoque de produtos de um e-commerce. O sistema conta com uma interface moderna, limpa e responsiva em página única (*SPA-like*), permitindo realizar todas as operações fundamentais de **CRUD** (Cadastrar, Listar, Editar e Excluir produtos com controle de estoque) em um único painel.

---

## 🏗️ Arquitetura e Tecnologias

A aplicação foi desenvolvida seguindo o padrão arquitetural **MVC** (*Model-View-Controller*) integrado ao padrão **DAO** (*Data Access Object*) para manter a separação clara entre as regras de negócio, dados e interface.

- **Backend:** Node.js, Express
- **View Engine:** EJS (Embedded JavaScript)
- **Banco de Dados:** MySQL (com o driver `mysql2`)
- **Frontend / Estilização:** Bootstrap 5 & CSS3
- **Controle de Versão:** Git & GitHub

---

## 📥 Etapas de Instalação das Ferramentas Necessárias

Antes de executar a aplicação, certifique-se de instalar as seguintes ferramentas na sua máquina:

### 1. Instalação do Node.js
1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão **LTS** (recomendada).
3. Execute o instalador e avance clicando em **Next** em todas as etapas mantendo as configurações padrão.
4. Para confirmar a instalação no seu terminal, digite:
   ```bash
   node -v
   npm -v
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    descricao TEXT
);

AO CONCLUIR: 
1. Digite npm install no terminal
2. Digite npm start no terminal
3. Digite node index.js

🌐 Acesso à Aplicação
Assim que a mensagem de confirmação do servidor for exibida no terminal, abra o navegador e acesse:

👉 http://localhost:3000

Desenvolvido por Gabriel Fogaça para a disciplina do professor Vander.
