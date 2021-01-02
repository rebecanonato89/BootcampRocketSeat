const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end;
 * POST: Criar uma informação no back-end;
 * PUT/PATCH: Alterar uma informação no back-end;
 * delete: Deletar uma informação no back-end; * 
 * 
 */

 /**
  * Tipos de parâmetros
  * Query Params: Filtros e paginação 
  * Route Params: Identificar recursos (Atualizar/Deletar)
  * Request Body: Conteúdo na hora de editar ou criar um recursos (JSON)
  */


app.get('/projetcs', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json( [
        'Projeto 1',
        'Projeto 2',
    ]);
});


app.post('/projetcs', (request, response) => {
    const { title, owner } = request.body;


    console.log(title);
    console.log(owner);
    
    return response.json( [
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});


app.put('/projetcs/:id', (request, response) => {
    const params = request.params;

    console.log(params);


    return response.json( [
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});


app.delete('/projetcs/:id', (request, response) => {
    return response.json( [
        'Projeto 2',
        'Projeto 3',
    ]);
});


app.listen(3333, () => {
    console.log("🛹Back-end started!");
});

