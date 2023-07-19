## Builder - Objetos Complejos

El patrón Builder se utiliza en Node.js (y en otros lenguajes de programación) cuando necesitas crear objetos complejos con múltiples opciones de configuración de manera más legible y sencilla. Permite construir objetos paso a paso, abstrayendo la lógica de construcción de la clase principal y proporcionando una interfaz más amigable para la creación de objetos:

- Creación de objetos con múltiples propiedades
- Configuración de opciones en bibliotecas y módulos
- Construcción de consultas de bases de datos
- Creación de documentos o reportes estructurados

```
// queryBuilder.js - Implementación del patrón Builder para construir consultas SQL

class QueryBuilder {
  constructor() {
    this.query = '';
  }

  select(fields) {
    this.query = `SELECT ${fields.join(', ')}`;
    return this;
  }

  from(table) {
    this.query += ` FROM ${table}`;
    return this;
  }

  where(condition) {
    this.query += ` WHERE ${condition}`;
    return this;
  }

  limit(limit) {
    this.query += ` LIMIT ${limit}`;
    return this;
  }

  build() {
    return this.query;
  }
}

// Ejemplo de uso

const query = new QueryBuilder()
  .select(['id', 'name', 'price'])
  .from('productos')
  .where('price > 50')
  .limit(10)
  .build();

console.log(query);
// Output: SELECT id, name, price FROM productos WHERE price > 50 LIMIT 10

```


