## Proxy - Intermediario - Middleware
El patrón Proxy se utiliza en Node.js (y en otros lenguajes de programación) cuando deseas agregar una capa adicional de control o funcionalidad a un objeto o recurso existente sin modificar su código. El Proxy actúa como un intermediario o representante que se interpone entre el cliente y el objeto real, permitiendo realizar operaciones adicionales antes o después de llamar al objeto real:

- Validación de datos
- Cacheo
- Control de acceso
- Logging y registro de información


```
// accessControlProxy.js - Implementación del Proxy para control de acceso

class RealResource {
  constructor() {
    this.data = [];
  }

  getData(user) {
    if (user.role === 'admin') {
      return this.data;
    } else {
      throw new Error('Acceso denegado. No tienes permisos para ver los datos.');
    }
  }

  addData(user, item) {
    if (user.role === 'admin') {
      this.data.push(item);
      console.log(`Dato agregado: ${item}`);
    } else {
      throw new Error('Acceso denegado. No tienes permisos para agregar datos.');
    }
  }
}

class AccessControlProxy {
  constructor(realResource, user) {
    this.realResource = realResource;
    this.user = user;
  }

  getData() {
    return this.realResource.getData(this.user);
  }

  addData(item) {
    return this.realResource.addData(this.user, item);
  }
}

// Ejemplo de uso

const adminUser = { role: 'admin' };
const regularUser = { role: 'user' };

const realResource = new RealResource();

const adminProxy = new AccessControlProxy(realResource, adminUser);
adminProxy.addData('Dato confidencial'); // Output: Dato agregado: Dato confidencial
console.log(adminProxy.getData()); // Output: [ 'Dato confidencial' ]

const userProxy = new AccessControlProxy(realResource, regularUser);
userProxy.addData('Información pública'); // Throws Error: Acceso denegado. No tienes permisos para agregar datos.
console.log(userProxy.getData()); // Throws Error: Acceso denegado. No tienes permisos para ver los datos.

```