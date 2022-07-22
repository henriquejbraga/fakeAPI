const request = require("supertest");
const API_URL = "https://my-json-server.typicode.com/henriquejbraga/fakeAPI";

describe("Faça requisições na API com o método GET", () => {
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).get("/cursos/");
    expect(response.statusCode).toBe(200);
  });
  it("Faça uma requisição na rota cursos e retorne status 200", async () => {
    const response = await request(API_URL).get("/alunos/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Faça requisições na API com o método POST", () => {
  it("Faça uma requisição na rota cursos e retorne status 201", async () => {
    const response = await request(API_URL).post("/cursos/");
    expect(response.statusCode).toBe(201);
  });
  it("Faça uma requisição na rota alunos e retorne status 201", async () => {
    const response = await request(API_URL).post("/alunos/");
    expect(response.statusCode).toBe(201);
  });
});

describe("Faça requisições na API com o método PUT", () => {
  it("Faça uma requisição na rota cursos e retorne status 404", async () => {
    const response = await request(API_URL).put("/cursos/");
    expect(response.statusCode).toBe(404);
  });
  it("Faça uma requisição na rota alunos e retorne status 404", async () => {
    const response = await request(API_URL).put("/alunos/");
    expect(response.statusCode).toBe(404);
  });
});

describe("Faça requisições na API com o método DELETE", () => {
  it("Faça uma requisição na rota cursos e retorne status 404", async () => {
    const response = await request(API_URL).delete("/cursos/");
    expect(response.statusCode).toBe(404);
  });
  it("Faça uma requisição na rota alunos e retorne status 404", async () => {
    const response = await request(API_URL).delete("/alunos/");
    expect(response.statusCode).toBe(404);
  });
});
