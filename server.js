const app = require("./index");

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log("Servidor iniciado en puerto", PORT);
});
