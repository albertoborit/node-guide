## Strategy

El patrón Strategy es útil en Node.js (y en cualquier lenguaje de programación) cuando tienes diferentes algoritmos o estrategias para realizar una determinada tarea y quieres poder intercambiarlas de manera flexible sin modificar el código cliente.

```
// Definimos las clases de estrategia para las bases de datos

class MySQLStrategy {
  connect() {
    console.log('Conexión a MySQL establecida');
    // Lógica para establecer la conexión con MySQL
  }

  query(sql) {
    console.log(`Ejecutando la consulta en MySQL: ${sql}`);
    // Lógica para ejecutar la consulta en MySQL y obtener los resultados
  }
}

class MongoDBStrategy {
  connect() {
    console.log('Conexión a MongoDB establecida');
    // Lógica para establecer la conexión con MongoDB
  }

  query(collection, filter) {
    console.log(`Ejecutando la consulta en MongoDB en la colección ${collection}:`, filter);
    // Lógica para ejecutar la consulta en MongoDB y obtener los resultados
  }
}

// Clase de contexto que utiliza la estrategia seleccionada

class DatabaseContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  connect() {
    this.strategy.connect();
  }

  query(query) {
    return this.strategy.query(query);
  }
}

// Uso del patrón Strategy

const mysqlStrategy = new MySQLStrategy();
const mongodbStrategy = new MongoDBStrategy();

const dbContext = new DatabaseContext(mysqlStrategy);
dbContext.connect();
dbContext.query('SELECT * FROM users');

// Cambiamos a MongoDB

dbContext.setStrategy(mongodbStrategy);
dbContext.connect();
dbContext.query('users', { age: { $gt: 25 } });

```