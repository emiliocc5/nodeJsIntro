const express = require('express');

const routes = require('./routes'); // No es necesario especificar el index, ya que node lo detecta y lo importa

const app = express();

routes(app);

app.listen(4000, () => {
  console.log('Running on port: 4000');
});
