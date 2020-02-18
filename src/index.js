const express = require('express');

const { countries, languages } = require('countries-list'); // Importacion parcial
const log = require('./modules/log'); // Importación total

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('HELLO');
});

app.get('/info', (request, response) => {
  log.info('Info');
  response.send('info nodemon');
});

app.get('/country', (request, response) => {
  console.log('Request query: ', request.query);
  response.json(countries[request.query.code]);
});

app.get('/languages/:lang', (request, response) => {
  console.log('Request param: ', request.params);
  response.json(languages[request.params.lang]);
});

app.get('#', (request, response) => {
  response.status(404).send('NOT FOUND');
});

app.listen(4000, () => {
  console.log('Running on port: 4000');
});
