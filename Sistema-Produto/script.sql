-- 1. Criar o banco de dados da LeanExpress (se ainda não existir)
CREATE DATABASE IF NOT EXISTS leanexpress_db;

-- 2. Selecionar o banco de dados para uso
USE leanexpress_db;

-- 3. Criar a tabela de produtos com o campo de quantidade
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    descricao TEXT
);