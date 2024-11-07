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
project-root/
├── client/                         # Front-end (React)
│   ├── public/                     # Arquivos públicos, como index.html, ícones, manifest.json
│   ├── src/                        # Código-fonte do React
│   │   ├── assets/                 # Imagens, fontes, e arquivos estáticos
│   │   ├── components/             # Componentes reutilizáveis da interface
│   │   ├── hooks/                  # Hooks customizados para lógica de negócio
│   │   ├── pages/                  # Páginas e rotas principais do aplicativo
│   │   ├── services/               # Serviços de API para comunicação com o back-end
│   │   ├── styles/                 # Arquivos de estilo e temas
│   │   └── App.js                  # Componente principal do React
│   └── package.json                # Dependências e scripts do React

├── server/                         # Back-end (NestJS)
│   ├── src/                        
│   │   ├── modules/                # Módulos principais da aplicação
│   │   ├── controllers/            # Controladores que gerenciam as rotas
│   │   ├── services/               # Serviços que contêm a lógica de negócios
│   │   ├── entities/               # Definições de entidades e modelos de dados
│   │   ├── dto/                    # Objetos de transferência de dados
│   │   ├── main.ts                 # Arquivo principal do NestJS
│   └── package.json                # Dependências e scripts do NestJS

├── .gitignore                      # Arquivos e diretórios ignorados pelo Git
├── README.md                       # Documentação do projeto
└── docker-compose.yml              # Arquivo para gerenciar o ambiente de contêineres

```

---

## 4. **Funcionalidades Principais e Diferenciais**
Destaque as funcionalidades principais e, se houver, os diferenciais implementados. Siga os requisitos:

- **Autenticação de Usuário**: Cadastro e login de usuários, proteção das rotas para visualização e adição de receitas.
- **Gestão de Receitas**:
  - Listagem paginada de receitas.
  - Adição de novas receitas (campos como nome, ingredientes, modo de preparo, tempo de preparo, nível de dificuldade).
  - Soft-delete para exclusão de receitas.
  - Exibição de dados de uma receita específica em um modal.
- **Diferenciais (se implementados)**:
  - Explique cada um dos diferenciais adicionados:
    - **Recuperação de Senha** ou autenticação com **JWT tokens**.
    - **Filtros Avançados** (por popularidade, ingredientes, etc.).
    - **Aplicativo Mobile**: Uso de React Native para uma versão móvel.
    - **Funcionalidades Extras** como edição de receitas, ordenação ou recomendações.

---

## 5. **Decisões de Implementação e Boas Práticas**
Explique as decisões técnicas tomadas e as boas práticas adotadas:

- **Stack de Tecnologias**: Liste as tecnologias principais (React, Node.js, Express, PostgreSQL, etc.) e por que foram escolhidas.
- **Design Patterns**: Descreva os padrões utilizados (como MVC, Singleton ou qualquer outro padrão aplicável). Por exemplo, o uso do **padrão MVC** para organizar o back-end.
- **Boas Práticas**: Explique práticas como modularização de código, uso de variáveis de ambiente para configurações sensíveis e validações nas entradas de dados.

---

## 6. **Instruções de Instalação e Execução**
Dê instruções claras sobre como rodar o projeto localmente:

1. **Pré-requisitos**: Liste ferramentas necessárias (Node.js, npm, banco de dados).
2. **Instalação**:
```bash
    git clone <link-do-repositorio>
    cd nome-do-projeto
    npm install
```
3. **Configuração do Banco de Dados**: Inclua instruções sobre como configurar o banco de dados (por exemplo, usando PostgreSQL).
4. **Iniciar o Projeto**:
```bash
    npm run dev
```
5. **Variáveis de Ambiente**: Explique as variáveis necessárias (como `DATABASE_URL`, `JWT_SECRET`, etc.).

---

## 7. **Teste e Validação**
Indique como os testes unitários foram feitos, se aplicável, e como testar as funcionalidades básicas da API (com **Postman**, por exemplo).