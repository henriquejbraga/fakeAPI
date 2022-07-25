const request = require("supertest");
const API_URL = "https://my-json-server.typicode.com/henriquejbraga/fakeAPI";

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

describe("Faça requisições na API com o método GET", () => {
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).get("/cursos/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(cursos);
  });
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).get("/alunos/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(alunos);
  });
});

describe("Faça requisições na API com o método POST", () => {
  it("Faça uma requisição na rota cursos e retorne status 201", async () => {
    const response = await request(API_URL).post("/cursos/");
    expect(response.statusCode).toBe(201);
  });
  it("Deve criar um curso", async () => {
    const response = await request(API_URL).post("/cursos").send({
      titulo: "treinando teste POST",
      url: "https://www.google.com",
    });
    expect(response.body.titulo).toBe("treinando teste POST")
    expect(response.body.url).toBe("https://www.google.com")
  })
    it("Faça uma requisição na rota alunos e retorne status 201", async () => {
      const response = await request(API_URL).post("/alunos/");
      expect(response.statusCode).toBe(201);
    });
    it("Deve criar um aluno", async () => {
      const response = await request(API_URL).post("/alunos").send({
        nome: "Henrique Braga",
        curso: 3,
      });
      expect(response.body.nome).toBe("Henrique Braga")
      expect(response.body.curso).toBe(3)
    })
  })

describe("Faça requisições na API com o método PUT", () => {
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).put("/cursos/1");
    expect(response.statusCode).toBe(200);
  });

  it("Faça uma requisição na rota alunos e retorne status 200", async () => {
    const response = await request(API_URL).put("/alunos/1");
    expect(response.statusCode).toBe(200);
  });
});

describe("Faça requisições na API com o método DELETE", () => {
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).delete("/cursos/1");
    expect(response.statusCode).toBe(200);
  });
  it("Faça uma requisição na rota alunos e retorne status 200", async () => {
    const response = await request(API_URL).delete("/alunos/1");
    expect(response.statusCode).toBe(200);
  });
});
