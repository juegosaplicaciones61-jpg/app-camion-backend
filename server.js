const express = require("express");
const cors = require("cors");

console.log("1. EXPRESS IMPORTADO");

const app = express();

app.use(cors());
app.use(express.json());

console.log("2. MIDDLEWARE OK");

/* =========================
   RUTA SIMPLE
========================= */

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

console.log("3. RUTA OK");

/* =========================
   PUERTO
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`4. Servidor corriendo en puerto ${PORT}`);
});