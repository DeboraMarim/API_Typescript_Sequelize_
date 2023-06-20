# Boas vindas ao repositório do projeto 

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por no Linkedin! https://www.linkedin.com/in/deboramarimdev/

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

Para este projeto, foi criada uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

⚠️ **Dicas Importantes** ⚠️:

- Não ha Front-end neste projeto. Fique a vontade para desenvolver e compartilhar comigo :)
</details>

# Orientações específicas deste projeto

<details>
  <summary><strong>🐳 Especificações sobre uso do Docker</strong></summary>

> Rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

  > Instale as dependências [**Caso existam**] com `npm install`
  > Rode o comando `npm run db:reset` (este comando vai funcionar somente após a criação do tipos solicitados no requisito) para criar o banco de dados, as tabelas que serão utilizadas e populá-las.
  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:
  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;
  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

## Seus Testes

Para rodar os testes localmente utilize o seguinte comando:

```bash
npm run test:local
```

Para os verificar testes de cobertura utilize o seguinte comando:

```bash
npm run test:coverage
```

Para todos os exercícios faça:

```bash
npm test
```

</details>

<details>
  <summary><strong>🎲 Diagrama Entidade Relacionamento do projeto</strong></summary>
  O banco de dados do projeto segue a estrutura abaixo:

  <img src="images/diagram-der.png" height="200px" />

</details>

<details>
  <summary><strong>🪑 Tabelas</strong></summary>

O banco terá três tabelas: pessoas usuárias (`users`), produtos (`products`) e pedidos (`orders`).

Toda a parte de criação do banco de dados, das tabelas, seeders e _models_ do sequelize já está pronta. Você pode verificar toda a configuração e associações nos arquivos dentro do diretório `src/database`.

</details>

# Orientações que você ja conhece 😉

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

1. Clone o repositório

- `git clone https://github.com/DeboraMarim/API_Typescript_Sequelize_.git`.
- Entre na pasta do repositório que você acabou de clonar:

  - `cd sd-027-b-project-trybesmith`

  2. Instale as dependências [**Caso existam**]

- `npm install`

  3. Crie uma branch a partir da branch `main`

- Verifique se você está na branch `main`
  - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto

  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-027-b-project-trybesmith`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial

  - Exemplo:
    - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-027-b-project-trybesmith`

</details>


   <summary><strong>🎛 Linter</strong></summary>

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

⚠️ Pull requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento! ⚠️

  </details>

<details>
  <summary><strong>🍪 Informações sobre a API </strong></summary>
  

**👀 Observações importantes:**

- O projeto deve rodar na porta **3001**;

---

### Todos os endpoints estão no padrão REST

---

Há dois arquivos no diretório `./src/`: `server.ts` e `app.ts`, **ambos não devem ser renomeados ou apagados**. Você poderá fazer modificações em ambos os arquivos, porém **no arquivo `app.ts` o seguinte trecho de código não deve ser removido**:

```typescript
import express from 'express';

const app = express();

app.use(express.json());

export default app;
```

</details>


<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn!

</details>

# Requisitos


## 1 -  endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint

## 2 -  endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint

## 3 - endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint

## 4 - endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint


## 5 - validações dos produtos e testes que cubram as funcionalidades deste endpoint


## 6 - endpoint para o cadastro de um pedido e testes que cubram as funcionalidades deste endpoint

</details>

---
