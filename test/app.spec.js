import supertest from "supertest";
import app from "../src/app.js";

const request = supertest(app);

describe("app.js", () => {
    test("Deve retornar status 200 e mensagem Olá, o servidor está rodando com express e HTTP 2!!", async () => {
        const res = await request.get("/")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("msn")
        expect(res.body.msn).toEqual("Oi! Tudo bom? Uma mensagem do json msn")
    })
});