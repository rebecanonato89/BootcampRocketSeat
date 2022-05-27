import express from "express";

import "./database"; // Não é necessário colocar o /index pois o JS já sabe que é ele que tem que trazer por conta do nome
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes); //Acesso a todas as rotas no routes.ts

//Iniciando o servidor
app.listen(3333, () => console.log("🚀☁ Server running in port 3333!"));