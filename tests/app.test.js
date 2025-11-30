const request = require("supertest");
const app = require("../index");

describe("Pruebas API", () => {

  test("GET / debe devolver BLUE/GREEN", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("ColorActual");
    expect(["BLUE", "GREEN", "not-set"]).toContain(res.body.ColorActual);
  });

  test("GET /events debe regresar arreglo", async () => {
    const res = await request(app).get("/events");
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /events debe crear evento", async () => {
    const res = await request(app)
      .post("/events")
      .send({ titulo: "Nuevo" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

});
