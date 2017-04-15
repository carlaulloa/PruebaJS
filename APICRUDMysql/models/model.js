'use strict';

const mysql = require('mysql'),
    myConnection = require('express-myconnection'),
      conf = require('./db-conf'),
    dbOptions = {
        host:conf.mysql.host,
        user:conf.mysql.user,
        password:conf.mysql.password,
        port:conf.mysql.port,
        database:conf.mysql.database
    },
    conn = mysql.createConnection(dbOptions);

conn.connect((err)=>{
    return (err) ? console.log(`Error de conexion de base de datos ${err.stack}`) : console.log(`Conexion establecida con mysql ${conn.threadId}`)
});
module.exports = conn;