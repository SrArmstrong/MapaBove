const request = require("supertest");
const app = require("./index.js"); // O donde exportes el app

describe("API Tests", () => {

  test("GET / debe responder con API running", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.Mensaje).toBe("API running");
  });

  test("GET /events debe devolver una lista de eventos", async () => {
    const res = await request(app).get("/events");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /events debe crear un evento", async () => {
    const nuevoEvento = { name: "Nuevo Evento" };

    const res = await request(app)
      .post("/events")
      .send(nuevoEvento);

    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe("Nuevo Evento");
  });

});
