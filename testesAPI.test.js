const request = require("supertest");
const API_URL = "https://my-json-server.typicode.com/henriquejbraga/fakeAPI";

// import db from "./db.json"
// const dbCursos = db.json
// está dando erro no import: SyntaxError: Cannot use import statement outside a module
const cursos = [
  {
    id: 1,
    titulo: "Entendendo o ES6",
    url: "https://www.codeprestige.com.br/cursos/es6",
  },
  {
    id: 2,
    titulo: "Produtividade Máxima com o VS Code",
    url: "https://www.udemy.com/truques-vscode/",
  },
  {
    id: 3,
    titulo: "Entendendo o ES7/ES8",
    url: "https://www.codeprestige.com.br/cursos/es7-8",
  },
  {
    id: 4,
    titulo: "React 16 Definitivo",
    url: "https://www.udemy.com/react-16/",
  },
];

const alunos = [
  {
    id: 1,
    nome: "Marcela da Silva",
    curso: 1,
  },
  {
    id: 2,
    nome: "José Luiz Felipe",
    curso: 2,
  },
  {
    id: 3,
    nome: "Paulo Rogério",
    curso: 3,
  },
  {
    id: 4,
    nome: "Felipe da Cunha",
    curso: 1,
  },
  {
    id: 5,
    nome: "Luiza Cardoso Pereira",
    curso: 1,
  },
];

describe("Realiza requisiçoes na API na rota /cursos", () => {
  describe("Faça requisições na API com o método GET", () => {
    it("Faça uma requisição e retorne status 200 e body correspontente", async () => {
      const response = await request(API_URL).get("/cursos");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(cursos);
    });
  });
  describe("Faça requisições na API com o método POST", () => {
    it("Deve criar um curso e receber status 201 e verifica se foi criado corretamente", async () => {
      const response = await request(API_URL).post("/cursos").send({
        titulo: "treinando teste POST",
        url: "https://www.google.com",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body.titulo).toBe("treinando teste POST");
      expect(response.body.url).toBe("https://www.google.com");
    });
  });
  describe("Faça requisições na API com o método PUT", () => {
    it("Faça uma atualizaçao do titulo, e recebe status 200 e título atualizado", async () => {
      await request(API_URL)
        .put("/cursos/1")
        .send({
          titulo: "Atualizando titulo",
          url: "https://www.codeprestige.com.br/cursos/es6",
        })
        .expect(200);
      return await request(API_URL)
        .get("/cursos/1")
        .query({ titulo: "Atualizando titulo" })
        .expect(200);
    });
  });
  describe("Faça requisições na API com o método DELETE", () => {
    it("Faça uma requisição delete e retorne status 200", async () => {
      const response = await request(API_URL).delete("/cursos/1");
      expect(response.statusCode).toBe(200);
    });
    it("Faça uma requisição delete em uma rota inexistente e retorne status 404", async () => {
      const response = await request(API_URL).delete("/cursos/5");
      expect(response.statusCode).toBe(404);
    });
  });
});

describe("Realiza requisiçoes na API na rota /alunos", () => {
  describe("Faça requisições na API com o método GET", () => {
    it("Faça uma requisição e retorne status 200 e body correspontente", async () => {
      const response = await request(API_URL).get("/alunos");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(alunos);
    });
  });
  describe("Faça requisições na API com o método POST", () => {
    it("Deve criar um aluno e receber status 201 e verifica se foi criado corretamente", async () => {
      const response = await request(API_URL).post("/alunos").send({
        nome: "Henrique Braga",
        curso: 6,
      });
      expect(response.statusCode).toBe(201);
      expect(response.body.nome).toBe("Henrique Braga");
      expect(response.body.curso).toBe(6);
    });
  });
  describe("Faça requisições na API com o método PUT", () => {
    it("Faça uma atualizaçao do nome com put, e receba status 200 e titulo atualizado", async () => {
      await request(API_URL)
        .put("/alunos/1")
        .send({
          nome: "Atualizando nome",
          curso: 1,
        })
        .expect(200);
      return await request(API_URL)
        .get("/alunos/1")
        .query({ nome: "Atualizando nome" })
        .expect(200);
    });
  });
  describe("Faça requisições na API com o método DELETE", () => {
    it("Faça uma requisição delete na rota alunos e retorne status 200", async () => {
      const response = await request(API_URL).delete("/alunos/1");
      expect(response.statusCode).toBe(200);
    });
    it("Faça uma requisição delete na rota alunos e retorne status 404", async () => {
      const response = await request(API_URL).delete("/alunos/6");
      expect(response.statusCode).toBe(404);
    });
  });
});
