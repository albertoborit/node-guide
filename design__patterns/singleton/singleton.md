## Singleton

El patrón Singleton se utiliza en Node.js (y en otros lenguajes de programación) cuando deseas asegurarte de que una clase tenga solo una única instancia y proporcionar un punto de acceso global a esta instancia en toda la aplicación.

```
// logger.js - Implementación del Singleton Logger

class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    console.log(`[${timestamp}] ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

// Creamos una única instancia del Logger (Singleton)
const logger = new Logger();

module.exports = logger;

```

```
// db.js - Implementación del Singleton para la conexión a la base de datos MySQL

const mysql = require('mysql');

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'db_user',
      password: 'db_password',
      database: 'db_name',
    });

    this.connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
      }
      console.log('Conexión a la base de datos establecida');
    });
  }

  getConnection() {
    if (!this.connection) {
      this.connect();
    }
    return this.connection;
  }
}

// Creamos una única instancia de la base de datos (Singleton)
const database = new Database();

module.exports = database;

```