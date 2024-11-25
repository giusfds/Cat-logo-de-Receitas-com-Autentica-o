# Recipe Vault
**Catálogo de Receitas com Autenticação**

> **Descrição**: Uma aplicação web para gerenciar receitas culinárias, com autenticação de usuários e um sistema de cadastro de receitas que permite adicionar, visualizar, e deletar receitas com segurança e facilidade de uso.

## 1. Objetivo do Projeto
O objetivo deste projeto é criar uma aplicação web para organização e compartilhamento de receitas culinárias de forma prática, segura e acessível. A aplicação resolve o problema de armazenamento e gestão de receitas pessoais, fornecendo uma plataforma onde os usuários podem cadastrar e organizar suas próprias receitas e visualizar receitas de outros usuários. Além disso, o sistema de autenticação garante que cada usuário tenha um espaço seguro e individualizado para gerenciar suas informações, protegendo o acesso a dados privados.

Com funcionalidades essenciais para adicionar, visualizar, editar e excluir receitas, o projeto cria um ambiente completo para a catalogação de receitas. A aplicação também oferece recursos de filtragem e paginação, permitindo que os usuários encontrem rapidamente as receitas que buscam. Dessa forma, o "Catálogo de Receitas com Autenticação" oferece uma experiência organizada e intuitiva, tornando o processo de descobrir e compartilhar receitas mais eficiente e agradável para todos os usuários.

---

## 2. Design System

Para o Design System deste projeto, optei por criar uma solução personalizada que atendesse às necessidades específicas da interface, priorizando simplicidade e usabilidade. Ao invés de utilizar frameworks prontos como o Bootstrap, optei por escrever o CSS manualmente para ter um controle total sobre o design e garantir uma experiência visual única.

### Componentes e Estilos

O projeto foi construído com base em componentes e estilos minimalistas, como botões, campos de formulário e containers, que são visualmente consistentes e funcionais. Cada componente foi cuidadosamente projetado para manter um padrão de interface clara e intuitiva, com foco na usabilidade.

A paleta de cores foi escolhida para garantir um contraste agradável e uma leitura fácil, enquanto a tipografia foi pensada para proporcionar legibilidade e harmonia. O uso de bordas suaves, sombras discretas e espaçamentos adequados conferem uma sensação de leveza e modernidade ao layout, sem sobrecarregar o usuário visualmente.

Além disso, o layout é totalmente responsivo, adaptando-se facilmente a diferentes tamanhos de tela, desde dispositivos móveis até desktops, garantindo que a experiência seja fluida e acessível em qualquer plataforma.

---

## 3. Organização das Pastas

```bash
recipe_vault/
├── dist/                                # Código compilado pelo TypeScript (não editável)
│   ├── db/                              # Código compilado relacionado ao banco de dados
│   ├── receita/                         # Código compilado do módulo de receitas
│   │   ├── receita.controller.d.ts      # Declaração de tipos para o controlador
│   │   ├── receita.controller.js        # Arquivo JavaScript compilado
│   │   ├── receita.dto.d.ts             # Declaração de tipos para os DTOs
│   │   ├── receita.dto.js               # Arquivo JavaScript compilado dos DTOs
│   │   ├── receita.module.d.ts          # Declaração de tipos do módulo
│   │   ├── receita.module.js            # Arquivo JavaScript compilado do módulo
│   │   ├── receita.service.d.ts         # Declaração de tipos para o serviço
│   │   ├── receita.service.js           # Arquivo JavaScript compilado do serviço
│   │   └── ...                          # Outros arquivos gerados
│   ├── users/                           # Código compilado do módulo de usuários
│   │   ├── users.controller.d.ts        # Declaração de tipos para o controlador
│   │   ├── users.controller.js          # Arquivo JavaScript compilado
│   │   ├── users.dto.d.ts               # Declaração de tipos para os DTOs
│   │   ├── users.dto.js                 # Arquivo JavaScript compilado dos DTOs
│   │   ├── users.module.d.ts            # Declaração de tipos do módulo
│   │   ├── users.module.js              # Arquivo JavaScript compilado do módulo
│   │   ├── users.service.d.ts           # Declaração de tipos para o serviço
│   │   ├── users.service.js             # Arquivo JavaScript compilado do serviço
│   │   └── ...                          # Outros arquivos gerados
│   └── ...                              # Outros diretórios compilados
├── node_modules/                        # Dependências do projeto
├── public/                              # Arquivos estáticos do frontend
│   ├── adicionar.html                   # Página para adicionar receitas
│   ├── cadastro.html                    # Página de cadastro de usuários
│   ├── listagem.html                    # Página de listagem de receitas
│   └── login.html                       # Página de login
├── src/                                 # Código-fonte do projeto
│   ├── auth/                            # Módulo de autenticação
│   │   ├── auth.controller.ts           # Controlador do módulo de autenticação
│   │   ├── auth.dto.ts                  # Data Transfer Objects para autenticação
│   │   ├── auth.guard.ts                # Guardas de rota (proteção)
│   │   ├── auth.module.ts               # Configuração do módulo
│   │   └── auth.service.ts              # Lógica de autenticação
│   ├── db/                              # Configuração do banco de dados
│   │   ├── entities/                    # Entidades do banco
│   │   ├── migrations/                  # Arquivos de migração
│   │   ├── db.module.ts                 # Configuração do módulo do banco
│   │   └── typeOrm.migration-config.ts  # Configuração de migrações
│   ├── receita/                         # Módulo de receitas
│   │   ├── receita.controller.ts        # Controlador do módulo de receitas
│   │   ├── receita.dto.ts               # DTOs do módulo de receitas
│   │   ├── receita.module.ts            # Configuração do módulo
│   │   └── receita.service.ts           # Lógica de receitas
│   ├── users/                           # Módulo de usuários
│   │   ├── users.controller.ts          # Controlador do módulo de usuários
│   │   ├── users.dto.ts                 # DTOs do módulo de usuários
│   │   ├── users.module.ts              # Configuração do módulo
│   │   └── users.service.ts             # Lógica de usuários
│   ├── app.controller.ts                # Controlador principal
│   ├── app.module.ts                    # Módulo raiz
│   ├── app.service.ts                   # Serviço principal
│   └── main.ts                          # Arquivo de entrada do NestJS
├── .eslintrc.js                         # Configuração do ESLint
├── .gitignore                           # Arquivos e pastas ignorados pelo Git
├── .prettierrc                          # Configuração do Prettier
├── nest-cli.json                        # Configuração do CLI do NestJS
├── package-lock.json                    # Dependências do projeto (versões exatas)
├── package.json                         # Configuração geral do projeto
├── README.md                            # Documentação do projeto
├── tsconfig.build.json                  # Configuração de build do TypeScript
└── tsconfig.json                        # Configuração principal do TypeScript

```

---

## 4. Funcionalidades Principais e Diferenciais

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

## 5. Decisões de Implementação e Boas Práticas

### Stack de Tecnologias

- **Nest.js**:  
  Escolhido como framework principal do back-end devido à sua estrutura modular baseada em TypeScript, que facilita a manutenção e escalabilidade do código.  
  O Nest.js adota uma abordagem opinativa, incorporando boas práticas de design e organização, como injeção de dependência e suporte nativo a padrões como **MVC**.

- **PostgreSQL**:  
  Selecionado como banco de dados relacional devido à sua robustez, suporte a transações complexas e alta compatibilidade com aplicações que exigem integridade de dados.  
  A integração com o Nest.js foi realizada utilizando o **TypeORM**, simplificando a modelagem de dados e operações no banco.

- **TypeScript**:  
  Utilizado em todo o projeto por sua capacidade de evitar erros comuns e fornecer uma experiência de desenvolvimento mais segura e robusta, graças à tipagem estática.

- **Postman**:  
  Ferramenta utilizada para testar APIs, permitindo validar endpoints e fluxos de dados de maneira rápida durante o desenvolvimento.

---

### Design Patterns

- **MVC (Model-View-Controller)**:  
  Adotado como padrão principal para organizar o back-end, separando as responsabilidades em camadas claras:
  - **Model**: Representação das entidades e mapeamento para o banco de dados usando o **TypeORM**.
  - **View**: As respostas das APIs, projetadas em formato JSON para serem consumidas pelo front-end.
  - **Controller**: Responsável por processar requisições, determinar as ações apropriadas e delegar tarefas às camadas de serviço e modelo.

- **Dependency Injection (DI)**:  
  Utilizado como padrão no Nest.js, melhorando a testabilidade e reduzindo o acoplamento.  
  Essa abordagem facilita a substituição de dependências, como repositórios ou serviços, sem alterar o código principal.

- **Repository Pattern**:  
  Implementado para encapsular a lógica de acesso ao banco de dados e isolar a aplicação de mudanças específicas no ORM ou no banco.

---

### Boas Práticas

- **Modularização de Código**:  
  O projeto foi organizado em módulos independentes, cada um representando uma funcionalidade específica.  
  Por exemplo: um módulo para autenticação, outro para gestão de usuários, entre outros. Isso melhora a escalabilidade e facilita a manutenção.

- **Uso de Variáveis de Ambiente**:  
  Configurações sensíveis, como credenciais de banco de dados e chaves de API, foram gerenciadas utilizando o pacote `@nestjs/config`.  
  Isso melhora a segurança e evita a exposição de informações confidenciais no repositório.

- **Validação de Dados**:  
  O módulo `class-validator` foi utilizado para garantir que os dados das requisições estejam no formato esperado antes de serem processados.  
  Essa prática reduz erros e protege a aplicação contra entradas maliciosas.

- **Tratamento de Erros**:  
  Foi implementada uma estratégia centralizada para lidar com erros, utilizando filtros de exceção personalizados (`ExceptionFilter`).  
  Isso garante respostas consistentes e informativas ao cliente, independentemente do tipo de erro.

---

## 6. Instruções de Instalação e Execução
### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

    Node.js (versão mínima recomendada: 16.x.x)
    npm (instalado junto com o Node.js)
    Banco de dados: PostgreSQL (versão mínima: 12.x)
    Git (para clonar o repositório)

### Instalação

    Clone o repositório do projeto:

git clone <link-do-repositorio>

Acesse o diretório do projeto:

cd nome-do-projeto

Instale as dependências do projeto:

    npm install

### Configuração do Banco de Dados

    Certifique-se de que o PostgreSQL está rodando no seu ambiente local.
    Crie um banco de dados com o nome desejado (exemplo: nome_do_banco).
    Execute as migrações (se aplicável) para criar as tabelas no banco:

    npx prisma migrate dev

    (Se não estiver usando o Prisma, substitua pelo comando correspondente do ORM utilizado, como Sequelize, TypeORM, etc.)

### Variáveis de Ambiente

Crie um arquivo chamado .env na raiz do projeto e configure as variáveis a seguir:

#### Conexão com o banco de dados PostgreSQL
`DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco`

#### Chave secreta para autenticação JWT
`JWT_SECRET=sua_chave_secreta_segura`

#### Porta na qual o servidor será executado
`PORT=3000`

Descrição das variáveis:

    DATABASE_URL: String de conexão para o banco de dados PostgreSQL. Substitua usuario, senha e nome_do_banco pelos valores corretos do seu ambiente.
    JWT_SECRET: Uma chave segura usada para assinar e verificar tokens JWT.
    PORT: Porta local para execução do servidor (padrão: 3000).

### Iniciar o Projeto

Para rodar o projeto no modo de depuração, utilize:
```bash
npm run start:debug
```
O servidor será iniciado no endereço padrão http://localhost:3000/static/index.html 

---

## 7. Teste e Validação

Para testar e validar as APIs desenvolvidas no projeto, foi utilizado o Postman, uma ferramenta popular para desenvolvimento e testes de APIs REST. O Postman permite realizar requisições HTTP de maneira simplificada, facilitando a verificação do funcionamento das rotas e métodos criados no back-end.

### Como os testes foram realizados
1. **Configuração de Requisições**: As requisições HTTP, como `GET`, `POST`, `PUT` e `DELETE`, foram configuradas no Postman para simular interações com as rotas da aplicação. Cada rota foi testada individualmente para garantir que retornasse os dados corretos ou realizasse as operações esperadas.

2. **Envio de Dados**: No caso de requisições que exigem dados no corpo (como `POST` e `PUT`), foram criados JSONs de exemplo no Postman para verificar se a API processava corretamente as informações enviadas e respondia com os dados esperados ou com uma mensagem de confirmação.

3. **Validação de Respostas**: As respostas das requisições foram analisadas para confirmar se os status HTTP (como `200 OK`, `201 Created`, `400 Bad Request`, etc.) eram apropriados para cada situação. Também foi verificado se os dados retornados estavam no formato correto e continham todas as informações necessárias.

4. **Testes de Erro**: Foram realizados testes de cenários de erro, enviando dados incorretos ou incompletos para as rotas, para garantir que a API responde com mensagens de erro apropriadas e status HTTP adequados, reforçando a robustez da aplicação.

Com o Postman, foi possível automatizar parte desses testes e salvar as configurações das requisições, permitindo que o processo de validação seja repetido facilmente sempre que o código for atualizado.