const express = require('express');

const log = require('./modules/log'); //Importación total
const { countries } = require('countries-list'); //Importacion parcial

const app = express();

app.get('/', function(request, response) {
  response.status(200).send('HELLO');
});

app.get('/info', function(request, response) {
  log.info('Info');
  response.send('info nodemon');
});

app.get('#', function(request, response) {
  response.status(404).send('NOT FOUND');
});

/* var server = http.createServer(function(request, response) {
  var parsed = url.parse(request.url);
  console.log("parsed: ", parsed);
  
  var pathname = parsed.pathname;

  var query = querystring.parse(parsed.query);
  console.log("query: ", query);

  if (pathname == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>HELLO</p></body></html>");
    response.end();
  } else if (pathname == "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>BYE</p></body></html>");
    response.end();
  } else if (pathname == "/country") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else if (pathname == "/info") {
    var result = log.info(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result);
    response.end();
  } else if (pathname == "/error") {
    var resultError = log.error(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(resultError);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
}); */

app.listen(4000, function() {
  console.log('Running on port: 4000');
});
