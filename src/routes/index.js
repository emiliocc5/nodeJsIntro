const { countries, languages } = require('countries-list'); // Importacion parcial
const log = require('../modules/log'); // Importación total

const routes = (app) => {
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
    const lang = languages[request.params.lang];
    if (lang) {
      response.json(lang);
    } else {
      response
        .status(404)
        .json({
          Status: 'NOT_FOUND',
          Message: `language ${request.params.lang} not found`,
        });
    }
  });

  app.get('#', (request, response) => {
    response.status(404).send('NOT FOUND');
  });
};

module.exports = routes;
