const express = require("express");
const mongoose = require("mongoose");

const app = express();
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-9a8c0.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json()); // tem que vir antes das rotas
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
