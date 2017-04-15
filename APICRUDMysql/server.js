'use strict';

const app = require('./app.js'),
      server = app.listen(app.get('port'),()=>console.log(`Iniciando API REST MVC con express en el puerto ${app.get('port')}`));
