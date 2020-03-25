const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * GET: Buscar/Listar um informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota apos o simbolo de interrogação "?" (Filtros, paginação)
 * Route Params: Parametros usados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */
/**
 * Driver: SELECt * FROM users
 * Query Builder: table('users').select('*').where();
 */



app.listen(3333);
