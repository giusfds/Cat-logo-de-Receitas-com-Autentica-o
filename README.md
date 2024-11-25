## Recipe Vault
**Catálogo de Receitas com Autenticação**

> **Descrição**: Uma aplicação web para gerenciar receitas culinárias, com autenticação de usuários e um sistema de cadastro de receitas que permite adicionar, visualizar, e deletar receitas com segurança e facilidade de uso.

## 1. **Objetivo do Projeto**
O objetivo deste projeto é criar uma aplicação web para organização e compartilhamento de receitas culinárias de forma prática, segura e acessível. A aplicação resolve o problema de armazenamento e gestão de receitas pessoais, fornecendo uma plataforma onde os usuários podem cadastrar e organizar suas próprias receitas e visualizar receitas de outros usuários. Além disso, o sistema de autenticação garante que cada usuário tenha um espaço seguro e individualizado para gerenciar suas informações, protegendo o acesso a dados privados.

Com funcionalidades essenciais para adicionar, visualizar, editar e excluir receitas, o projeto cria um ambiente completo para a catalogação de receitas. A aplicação também oferece recursos de filtragem e paginação, permitindo que os usuários encontrem rapidamente as receitas que buscam. Dessa forma, o "Catálogo de Receitas com Autenticação" oferece uma experiência organizada e intuitiva, tornando o processo de descobrir e compartilhar receitas mais eficiente e agradável para todos os usuários.

---

## 2. **Design System**
Para o Design System deste projeto, optei por usar o Bootstrap devido à praticidade e à compatibilidade com minhas experiências anteriores. Tendo trabalhado com Bootstrap em projetos acadêmicos e pessoais, sinto-me confortável com sua sintaxe e estrutura, o que contribui para uma implementação mais ágil e eficiente. Além disso, o Bootstrap é conhecido por oferecer responsividade nativa, garantindo que a interface se adapte facilmente a diferentes tamanhos de tela e dispositivos, o que é essencial para a usabilidade e acessibilidade do projeto.

Componentes e Estilos

O Bootstrap oferece uma coleção extensa de componentes de interface, como botões, inputs, modais, tabelas e cards, todos visualmente consistentes e adaptáveis. Para este projeto, esses componentes foram utilizados para manter um padrão de interface intuitiva e coerente, seguindo a identidade visual do Bootstrap, com paleta de cores harmoniosa, tipografia moderna e espaçamentos adequados. Esses padrões foram aplicados em toda a interface, garantindo uma experiência de usuário uniforme e visualmente agradável.

---

## 3. **Organização das Pastas**
```bash
Front
├── adicionar.html
├── cadastro.html
├── listagem.html
└── login.html

recipe_vault
├── dist
├── node_modules
└── src
    └── receita
        ├── receita.controller.ts
        ├── receita.dto.ts
        ├── receita.module.ts
        ├── receita.service.ts
        ├── app.controller.ts
        ├── app.module.ts
        ├── app.service.ts
        └── main.ts
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json

```

---

## 4. **Funcionalidades Principais e Diferenciais**

Este projeto foi desenvolvido utilizando **NestJS** para o back-end, **PostgreSQL** como banco de dados e **HTML** para o front-end, com o objetivo de oferecer um sistema robusto e eficiente de gestão de receitas culinárias. Abaixo estão as principais funcionalidades e diferenciais implementados:

### Funcionalidades Principais

- **Autenticação de Usuário**: 
  - Implementação de cadastro e login de usuários para acesso ao sistema.
  - Proteção de rotas para visualização e adição de receitas, garantindo que apenas usuários autenticados possam acessar certas funcionalidades.

- **Gestão de Receitas**:
  - **Listagem Paginada de Receitas**: As receitas são exibidas em páginas, facilitando a navegação e organização dos dados.
  - **Adição de Novas Receitas**: Usuários autenticados podem adicionar novas receitas ao sistema, preenchendo campos como:
    - Nome da receita
    - Ingredientes
    - Modo de preparo
    - Tempo de preparo
    - Nível de dificuldade
  - **Soft-delete para Exclusão de Receitas**: Implementado um sistema de exclusão lógica (soft-delete), onde as receitas não são apagadas do banco de dados, mas ficam indisponíveis para visualização, permitindo possível recuperação futura.
  - **Exibição Detalhada de Receitas**: Dados completos de uma receita específica são exibidos em um modal, facilitando o acesso a informações sem a necessidade de recarregar a página.

### Diferenciais

Além das funcionalidades principais, foram implementados diferenciais para aumentar a segurança e a usabilidade da aplicação:

- **Autenticação JWT**: A autenticação baseada em tokens JWT (JSON Web Tokens) foi adicionada para maior segurança nas sessões de usuários. Com isso, o sistema garante que apenas usuários com um token válido possam acessar e interagir com as funcionalidades protegidas.

- **Filtros Avançados**:
  - Os usuários podem filtrar as receitas por diversos critérios, como popularidade e ingredientes. Isso facilita a busca por receitas específicas e proporciona uma experiência de usuário mais personalizada.

---

## 5. **Decisões de Implementação e Boas Práticas**
Explique as decisões técnicas tomadas e as boas práticas adotadas:

- **Stack de Tecnologias**: Liste as tecnologias principais (React, Node.js, Express, PostgreSQL, etc.) e por que foram escolhidas.
- **Design Patterns**: Descreva os padrões utilizados (como MVC, Singleton ou qualquer outro padrão aplicável). Por exemplo, o uso do **padrão MVC** para organizar o back-end.
- **Boas Práticas**: Explique práticas como modularização de código, uso de variáveis de ambiente para configurações sensíveis e validações nas entradas de dados.

---

## 6. Instruções de Instalação e Execução
1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

    Node.js (versão mínima recomendada: 16.x.x)
    npm (instalado junto com o Node.js)
    Banco de dados: PostgreSQL (versão mínima: 12.x)
    Git (para clonar o repositório)

2. Instalação

    Clone o repositório do projeto:

git clone <link-do-repositorio>

Acesse o diretório do projeto:

cd nome-do-projeto

Instale as dependências do projeto:

    npm install

3. Configuração do Banco de Dados

    Certifique-se de que o PostgreSQL está rodando no seu ambiente local.
    Crie um banco de dados com o nome desejado (exemplo: nome_do_banco).
    Execute as migrações (se aplicável) para criar as tabelas no banco:

    npx prisma migrate dev

    (Se não estiver usando o Prisma, substitua pelo comando correspondente do ORM utilizado, como Sequelize, TypeORM, etc.)

4. Variáveis de Ambiente

Crie um arquivo chamado .env na raiz do projeto e configure as variáveis a seguir:

### Conexão com o banco de dados PostgreSQL
`DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco`

### Chave secreta para autenticação JWT
`JWT_SECRET=sua_chave_secreta_segura`

### Porta na qual o servidor será executado
`PORT=3000`

Descrição das variáveis:

    DATABASE_URL: String de conexão para o banco de dados PostgreSQL. Substitua usuario, senha e nome_do_banco pelos valores corretos do seu ambiente.
    JWT_SECRET: Uma chave segura usada para assinar e verificar tokens JWT.
    PORT: Porta local para execução do servidor (padrão: 3000).

5. Iniciar o Projeto

Para rodar o projeto no modo de depuração, utilize:
```bash
npm run start:debug
```
O servidor será iniciado no endereço padrão http://localhost:3000/static/index.html 

---

## 7. **Teste e Validação**

Para testar e validar as APIs desenvolvidas no projeto, foi utilizado o Postman, uma ferramenta popular para desenvolvimento e testes de APIs REST. O Postman permite realizar requisições HTTP de maneira simplificada, facilitando a verificação do funcionamento das rotas e métodos criados no back-end.

### Como os testes foram realizados
1. **Configuração de Requisições**: As requisições HTTP, como `GET`, `POST`, `PUT` e `DELETE`, foram configuradas no Postman para simular interações com as rotas da aplicação. Cada rota foi testada individualmente para garantir que retornasse os dados corretos ou realizasse as operações esperadas.

2. **Envio de Dados**: No caso de requisições que exigem dados no corpo (como `POST` e `PUT`), foram criados JSONs de exemplo no Postman para verificar se a API processava corretamente as informações enviadas e respondia com os dados esperados ou com uma mensagem de confirmação.

3. **Validação de Respostas**: As respostas das requisições foram analisadas para confirmar se os status HTTP (como `200 OK`, `201 Created`, `400 Bad Request`, etc.) eram apropriados para cada situação. Também foi verificado se os dados retornados estavam no formato correto e continham todas as informações necessárias.

4. **Testes de Erro**: Foram realizados testes de cenários de erro, enviando dados incorretos ou incompletos para as rotas, para garantir que a API responde com mensagens de erro apropriadas e status HTTP adequados, reforçando a robustez da aplicação.

Com o Postman, foi possível automatizar parte desses testes e salvar as configurações das requisições, permitindo que o processo de validação seja repetido facilmente sempre que o código for atualizado.