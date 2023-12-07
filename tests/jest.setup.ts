import supertest from "supertest";

import { Knex } from "../src/server/database/knex";

import { server } from "../src/server/server";


afterAll(async () => {
    console.log("ola");
})

export const testServer = supertest(server);
