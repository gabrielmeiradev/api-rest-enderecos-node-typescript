import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
    it("Cria registro", async () => {
        const res1 = await testServer
        .post("/cidades")
        .send({ nome: "São Paulo" });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual("number");
    });
    
    it("Tenta criar um registro com nome curto", async () => {
        const res1 = await testServer
        .post("/cidades")
        .send({ nome: "As"});
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.body.nome");
    });
});

