# Boas vindas ao repositório do projeto Trybesmith

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

Para este projeto, você vai criar uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

Você irá desenvolver as camadas de _Service_ e _Controllers_ da aplicação em seu código, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação terá _endpoints_ que darão suporte a operações de criação, leitura e atualização de informações.

---

⚠️ **Dicas Importantes** ⚠️:

- Não haverá Front-end neste projeto. Não se preocupe com a visualização das coisas, apenas com as funcionalidades e qualidade do seu código;

- Sua API deve ser desenvolvida dentro da pasta `./src`.
- Seus testes deverão ser desenvolvidos na raiz da aplicação, em um diretório chamado `tests`.

</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary>
  
- Este projeto é individual.
- Serão `2` dias de projeto.
- Data de entrega para avaliação regular do projeto: `02/06/2023 14:00`.

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

Para rodar os seus testes localmente utilize o seguinte comando:

```bash
npm run test:local
```

Para os verificar seus testes de cobertura utilize o seguinte comando:

```bash
npm run test:coverage
```

## Testes do avaliador

Para rodar os testes de um único exercício faça:

```bash
npm test <N>
## Exemplo: npm test 01
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

- `git clone https://github.com/tryber/sd-027-b-project-trybesmith.git`.
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

  6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-027-b-project-trybesmith/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-027-b-project-trybesmith/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>
<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary>

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-027-b`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary>

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
   <summary><strong>🎛 Linter</strong></summary>

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

⚠️ Pull requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento! ⚠️

  </details>

<details>
  <summary><strong>🍪 Informações sobre a API </strong></summary>
  
  **⚠️ Leia as informações abaixo atentamente e siga à risca o que for pedido. ⚠️**

**👀 Observações importantes:**

- O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação;

- O projeto deve rodar na porta **3001**;

---

### Todos os seus endpoints devem estar no padrão REST

- Use os verbos `HTTP` adequados para cada operação;

- Agrupe e padronize suas _URLs_ em cada recurso;

- Garanta que seus _endpoints_ sempre retornem uma resposta, havendo sucesso nas operações ou não;

- Retorne os códigos de _status_ corretos (recurso criado, erro de validação, etc).

- Siga o padrão de nomenclatura de diretórios para cada camada como visto no conteúdo.

---

Há dois arquivos no diretório `./src/`: `server.ts` e `app.ts`, **ambos não devem ser renomeados ou apagados**. Você poderá fazer modificações em ambos os arquivos, porém **no arquivo `app.ts` o seguinte trecho de código não deve ser removido**:

```typescript
import express from 'express';

const app = express();

app.use(express.json());

export default app;
```

Isso está configurado para o avaliador funcionar corretamente.

</details>

## Quando finalizar o projeto não esquecer

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH27-B&template=betrybe/sd-0x-project-trybesmith)

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## Antes de começar

Implemente todos os tipos `Order`, `Product` e `User`, do projeto na pasta `src/types` de forma adequada. Isso é necessário para as _migrations_ rodarem.

**Atenção ⚠️:** Suas importações devem ter sempre caminhos relativos! O VSCode fará importações com caminhos absolutos automaticamente e isso pode causar erros que o módulo não foi encontrado.

## 1 - Crie um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
```

As ordens dos pedidos de id 1 a 3 já foram criados pelo seeders no banco de dados, sendo assim novos produtos devem passar um novo `orderId`, pois os produtos são exclusivos.

- Os testes devem garantir no mínimo 30% de cobertura do código das camadas `Service` e `Controller`.

> **De olho na dica 👀:**
>
> - Para construir seus testes use o método [`.build()`](https://sequelize.org/docs/v6/core-concepts/model-instances/#creating-an-instance) quando for necessário;
>
> - Lembre do _Type Assertion_ para testar tipos.

<details close>
  <summary>As seguintes verificações serão feitas:</summary>

> 👉 Para caso os dados sejam enviados corretamente

- **[Será validado que é possível cadastrar um produto com sucesso]**

  - O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:

  ```json
  {
    "id": 6,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro"
  }
  ```

- **[Será validado que os testes estão cobrindo pelo menos 30% das camadas `Service` e `Controller`.]**

</details>

---

## 2 - Crie um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os testes devem garantir no mínimo 45% de cobertura do código das camadas `Service` e `Controller`.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

> 👉 Para caso os dados sejam enviados corretamente

- **[Será validado que é possível listar todos os produtos com sucesso]**

  - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:

  ```json
  [
    {
      "id": 1,
      "name": "Pedra Filosofal",
      "price": "20 gold",
      "orderId": null
    },
    {
      "id": 2,
      "name": "Lança do Destino",
      "price": "100 diamond",
      "orderId": 1
    }
  ]
  ```

- **[Será validado que os testes estão cobrindo pelo menos 50% das camadas `Service` e `Controller`.]**

</details>

---

## 3 - Crie um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.
- Os testes devem garantir no mínimo 60% de cobertura do código das camadas `Service` e `Controller`.

**De olho na dica 👀:** Todos os produtos são itens artesanais, portanto, únicos. Por isso são os produtos que contêm os `id`s dos pedidos.

**De olho na dica 👀:** Você precisará combinar a lógica de dois models aqui 😉

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 Para orders

- **[Será validado que é possível listar todos os pedidos com sucesso]**

  - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:

  ```json
  [
    {
      "id": 1,
      "userId": 2,
      "productIds": [1, 2]
    },
    {
      "id": 2,
      "userId": 1,
      "productIds": [3, 4]
    }
  ]
  ```

- **[Será validado que os testes estão cobrindo pelo menos 60% das camadas `Service` e `Controller`.]**

</details>

---

## 4 - Crie um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "password": "string"
}
```

- Os testes devem garantir no mínimo 70% de cobertura do código das camadas `Service` e `Controller`.

<details close>
 <summary>Além disso, as seguintes verificações serão feitas:</summary>

> 👉 Para caso haja problemas no login

- **[Será validado que o campo "username" é enviado]**

  - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"username\" and \"password\" are required" }
  ```

- **[Será validado que o campo "password" é enviado]**

  - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"username\" and \"password\" are required" }
  ```

- **[Será validado que não é possível fazer login com um username inválido]**

  - Se o _login_ tiver um username que não exista no banco de dados ele será considerado inválido e o resultado retornado deverá ser um _status http_ `401` e

  ```json
  { "message": "Username or password invalid" }
  ```

- **[Será validado que não é possível fazer login com uma senha inválida]**

  - Se o login tiver uma senha que não corresponda à senha salva no banco de dados, ela será considerada inválida e o resultado retornado deverá ser um _status http_ `401` e

  ```json
  { "message": "Username or password invalid" }
  ```

  **De olho na dica 👀:** As senhas salvas no banco de dados estão encriptadas com o **bcrypt**, portanto, você deve levar isso em consideração no momento de compará-las com as enviadas na requisição e utilizar o método adequado.

> 👉 Para caso os dados sejam enviados corretamente

- **[Será validado que é possível fazer login com sucesso]**

  - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_ no formato abaixo (a _token_ não precisa ser exatamente igual a essa):

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
  ```

- **[Será validado que os testes estão cobrindo pelo menos 70% das camadas `Service` e `Controller`.]**

</details>

---

## 5 - Crie as validações dos produtos e testes que cubram as funcionalidades deste endpoint

- Neste requisito iremos desenvolver validações referentes a criação do endpoint do requisito 1.
- Os testes devem garantir no mínimo 80% de cobertura do código das camadas `Service` e `Controller`.

<details close>

  <summary>As seguintes validações deverão ser realizadas:</summary>

  <br>

> 👉 Para name

- **[Será validado que o campo "name" é obrigatório]**

  - Se o campo "name" não for informado, o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"name\" is required" }
  ```

- **[Será validado que o campo "name" tem o tipo string]**

  - Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"name\" must be a string" }
  ```

- **[Será validado que o campo "name" é uma string com mais de 2 caracteres]**

  - Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"name\" length must be at least 3 characters long" }
  ```

> 👉 Para price

- **[Será validado que o campo "price" é obrigatório]**

  - Se o campo "price" não for informado, o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"price\" is required" }
  ```

- **[Será validado que o campo "price" tem o tipo string]**

  - Se o campo "price" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"price\" must be a string" }
  ```

- **[Será validado que o campo "price" é uma string com mais de 2 caracteres]**

  - Se o campo "price" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"price\" length must be at least 3 characters long" }
  ```

- **[Será validado que os testes estão cobrindo pelo menos 80% das camadas `Service` e `Controller`.]**

</details>

---

## Requisitos Bônus

## 6 - Crie um endpoint para o cadastro de um pedido e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/orders`);
- Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token `JWT` validado;
- Os pedidos enviados devem ser salvos na tabela `orders` do banco de dados, salvando `id` da pessoa usuária da aplicação que fez esse pedido;
- A tabela `products` também deve ser alterada, atualizando todos os produtos com os `id` incluídos na chave `productIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "productIds": [1, 2],
  "userId": 1
}
```

- Os testes devem garantir no mínimo 90% de cobertura do código das camadas `Service` e `Controller`.

**⚠️ Ao cadastrar um pedido, lembre-se de atualizar os respectivos produtos no banco de dados, incluindo neles o número do pedido criado.**

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

> 👉 Para token

- **[Será validado que não é possível cadastrar pedidos sem token]**

  - Se o token não for informado, o resultado retornado deverá ser um _status http_ `401` e

  ```json
  { "message": "Token not found" }
  ```

- **[Será validado que não é possível cadastrar um pedido com token inválido]**

  - Se o token informado não for válido, o resultado retornado deverá ser um _status http_ `401` e

  ```json
  { "message": "Invalid token" }
  ```

> 👉 Para user

- **[Será validado que o campo "userId" é obrigatório]**

  - Se o corpo da requisição não possuir o campo "userId", o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"userId\" is required" }
  ```

- **[Será validado que o campo "userId" tem o tipo número]**

  - Se o campo "userId" não for do tipo `number`, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"userId\" must be a number" }
  ```

- **[Será validado que o campo "userId" é uma pessoa usuária existente]**

  - Se o campo "userId" não for um usuário, o resultado retornado deverá ser um _status http_ `404` e

  ```json
  { "message": "\"userId\" not found" }
  ```

> 👉 Para products

- **[Será validado que o campo "productIds" é obrigatório]**

  - Se o corpo da requisição não possuir o campo "productIds", o resultado retornado deverá ser um _status http_ `400` e

  ```json
  { "message": "\"productIds\" is required" }
  ```

- **[Será validado que não é possível criar um pedido com o campo "productIds" não sendo um array]**

  - Se o valor do campo "productIds" não for um array, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"productIds\" must be an array" }
  ```

- **[Será validado que não é possível cadastrar um pedido se o campo "productIds" for um array vazio]**

  - Se o campo "productIds" possuir um array vazio, o resultado retornado deverá ser um _status http_ `422` e

  ```json
  { "message": "\"productIds\" must include only numbers" }
  ```

> 👉 Para caso os dados sejam enviados corretamente

- **[Será validado que é possível criar um pedido com sucesso com 1 item]**

  - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:

  ```json
  {
    "userId": 1,
    "productIds": [1]
  }
  ```

- **[Será validado que é possível criar um pedido com sucesso com vários itens]**

  - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:

  ```json
  {
    "userId": 1,
    "productIds": [1, 2]
  }
  ```

- **[Será validado que os testes estão cobrindo pelo menos 90% das camadas `Service` e `Controller`.]**

</details>

---
