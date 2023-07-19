## Factory
El patrón Factory es útil en Node.js (y en otros entornos de desarrollo) cuando necesitas crear objetos complejos o con múltiples dependencias de manera flexible y desacoplada. El patrón Factory centraliza la creación de objetos y oculta los detalles de la creación, lo que permite al código cliente solicitar la creación de objetos sin conocer la lógica interna de cómo se crean exactamente.

```
// Clases de usuarios

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
    this.role = 'admin';
  }
}

class Employee extends User {
  constructor(name) {
    super(name);
    this.role = 'employee';
  }
}

class Client extends User {
  constructor(name) {
    super(name);
    this.role = 'client';
  }
}

// Factory de usuarios

class UserFactory {
  createUser(name, type) {
    switch (type) {
      case 'admin':
        return new Admin(name);
      case 'employee':
        return new Employee(name);
      case 'client':
        return new Client(name);
      default:
        throw new Error('Invalid user type');
    }
  }
}

// Uso del patrón Factory

const factory = new UserFactory();

const adminUser = factory.createUser('John', 'admin');
adminUser.sayHello(); // Output: Hello, my name is John

const employeeUser = factory.createUser('Alice', 'employee');
employeeUser.sayHello(); // Output: Hello, my name is Alice

const clientUser = factory.createUser('Bob', 'client');
clientUser.sayHello(); // Output: Hello, my name is Bob

```