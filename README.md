
# Desafio Frontend Angular 🚀

Projeto desenvolvido como parte de um desafio técnico para vaga de estágio Frontend, utilizando Angular. O objetivo é construir uma aplicação responsiva com listagem, cadastro e detalhamento de posts, integrando com uma API mock.

## 🔗 Link do Repositório
[https://github.com/Marconde12/Desafio-frontend-angular](https://github.com/Marconde12/Desafio-frontend-angular)

---

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Angular CLI](https://angular.io/cli)

---

## 📁 Estrutura do Projeto

```bash
Desafio-frontend-angular/
├── src/
│   ├── app/
│   │   ├── post-list/        # Componente para listagem de posts
│   │   ├── post-detail/      # Componente para exibição de post por ID
│   │   ├── post-form/        # Componente para cadastro de novo post
│   │   └── services/         # Serviços Angular para API
│   ├── assets/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

---

## 📋 Funcionalidades

✅ Layout responsivo e estilizado com HTML e CSS  
✅ Listagem dinâmica de posts integrando com API mock  
✅ Cadastro de novos posts com formulário  
✅ Exibição de post por ID (detalhes)  
✅ Navegação entre páginas com Angular Router  

---

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js e npm instalados
- Angular CLI instalado globalmente:  
  ```bash
  npm install -g @angular/cli
  ```

### Passos para rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/Marconde12/Desafio-frontend-angular.git
cd Desafio-frontend-angular

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200
```

---

## 🌐 API Mock Utilizada

A aplicação consome os seguintes endpoints simulados:

- `GET /posts` – Lista todos os posts
- `GET /post/:id` – Detalhes de um post
- `POST /post` – Cria um novo post

*Detalhes da API podem estar definidos em um arquivo de serviço (`post.service.ts`).*

---

## 🙋‍♂️ Autor

**Marcus Vinicius**  
Desenvolvedor Frontend em formação  
[LinkedIn](https://www.linkedin.com/in/seu-link) *(adicione seu link se quiser)*

---

## 📄 Licença

Este projeto é apenas para fins de demonstração técnica.
