<h1 align=center>
	<b>API Loja RESTful com NestJS</b>
</h1>

<h2 align=center>
	 <i>Projeto Pessoal</i>
</h2>

<p align=center>
	Este projeto é uma API RESTful para gerenciar uma loja virtual, desenvolvida utilizando o framework NestJS. A API suporta operações CRUD completas para produtos, categorias e usuários, além de autenticação e autorização.
</p>

---

<h2>
Descrição
</h2>

A `api-loja-restful-nest` é uma aplicação backend desenvolvida com NestJS, um framework progressivo para a construção de aplicações Node.js escaláveis e eficientes. Esta API permite gerenciar uma loja virtual, oferecendo endpoints para criar, ler, atualizar e deletar produtos, categorias e usuários. Além disso, inclui funcionalidades de autenticação e autorização para proteger os recursos da aplicação.

---

<h2>
Funcionalidades
</h2>

- **Gerenciamento de Produtos**: CRUD completo para produtos, incluindo nome, descrição, preço e categoria.
- **Gerenciamento de Categorias**: CRUD completo para categorias de produtos.
- **Gerenciamento de Usuários**: CRUD completo para usuários, incluindo cadastro, login e perfis.
- **Autenticação e Autorização**: Implementação de JWT (JSON Web Tokens) para autenticar e autorizar usuários.
- **Validação de Dados**: Validação robusta de dados de entrada utilizando a biblioteca class-validator.
- **Documentação de API**: Documentação automática da API com Swagger.

---

<h2>
Tecnologias Utilizadas
</h2>

- **NestJS**: Framework para a construção de aplicações Node.js eficientes e escaláveis.
- **TypeScript**: Linguagem de programação utilizada para desenvolvimento do projeto.
- **TypeORM**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados da aplicação.
- **JWT**: Implementação de autenticação segura com JSON Web Tokens.
- **Swagger**: Ferramenta para documentação automática da API.

---

<h2>
Instalação
</h2>

### Pré-requisitos

- Node.js
- npm ou yarn
- PostgreSQL

### Passo a Passo

1. Clone o repositório:

   ```sh
   git clone https://github.com/lmoraesdev/api-loja-restful-nest.git
   cd api-loja-restful-nest
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

   ```sh
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=seu_usuario
   DATABASE_PASSWORD=sua_senha
   DATABASE_NAME=nome_do_banco
   JWT_SECRET=sua_chave_secreta
   ```
4. Execute as migrações do banco de dados:
   
   ```sh
   npm run typeorm migratuin:run
   ```
   
5. incie a aplicação:

   ```sh
   npm run start
   ```
